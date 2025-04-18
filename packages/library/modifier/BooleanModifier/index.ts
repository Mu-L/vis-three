import { BufferGeometry, Mesh } from "three";
import { CSG } from "three-csg-ts";
import { Modifier, ModifierParameters } from "../BaseModifier";

export interface BooleanModifierParameters extends ModifierParameters {
  source?: Mesh;
  target?: Mesh;
  mode?: "subtract" | "union" | "intersect";
}

export class BooleanModifier extends Modifier {
  _source!: Mesh;
  target!: Mesh;
  mode: "subtract" | "union" | "intersect";

  private originalGeometry!: BufferGeometry;
  private modifiedGeometry: BufferGeometry = new BufferGeometry();

  private timer = 0;
  private throttling = 1000 / 15;

  constructor(parameters: BooleanModifierParameters) {
    super(parameters);
    parameters.source && (this.source = parameters.source);
    parameters.target && (this.target = parameters.target);

    this.mode = parameters.mode || "subtract";
  }

  set source(value: Mesh) {
    this._source = value;
    this.originalGeometry = this._source.geometry;
    this.modifiedGeometry.copy(this.originalGeometry);
    this.source.geometry = this.modifiedGeometry;
  }

  get source() {
    return this._source;
  }

  modify() {
    if (this._source && this.target) {
      const source = this._source;
      const likeMeshScoruce = {
        geometry: this.originalGeometry,
        matrix: this.source.matrixWorld,
      } as Mesh;

      const likeMeshTarget = {
        geometry: this.target.geometry,
        matrix: this.target.matrixWorld,
      } as Mesh;

      const csgSource = CSG.fromMesh(likeMeshScoruce);
      const csgTarget = CSG.fromMesh(likeMeshTarget);
      const csgGeometry = CSG.toGeometry(
        csgSource[this.mode](csgTarget),
        source.matrixWorld
      );
      this.modifiedGeometry.copy(csgGeometry);
    }
  }

  render() {
    if (this.visible) {
      if (!this.timer) {
        this.timer = window.setTimeout(() => {
          this.modify();
          this.timer = 0;
        }, this.throttling);
      }
    } else {
      this.modifiedGeometry.copy(this.originalGeometry);
    }
  }

  apply() {
    this.originalGeometry.copy(this.modifiedGeometry);
    this.source.geometry = this.originalGeometry;
  }

  dispose() {
    this.source.geometry = this.originalGeometry;
    this.modifiedGeometry.dispose();
  }
}
