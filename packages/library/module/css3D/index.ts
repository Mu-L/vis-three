import { CSS3DCompiler } from "./CSS3DCompiler";
import { CSS3DRule } from "./CSS3DRule";
import CSS3DPlaneProcessor from "./processors/CSS3DPlaneProcessor";
import CSS3DObjectProcessor from "./processors/CSS3DObjectProcessor";
import CSS3DSpriteProcessor from "./processors/CSS3DSpriteProcessor";
import { SUPPORT_LIFE_CYCLE } from "@vis-three/middleware";

export * from "./CSS3DCompiler";
export * from "./CSS3DConfig";

export default {
  type: "css3D",
  object: true,
  compiler: CSS3DCompiler,
  rule: CSS3DRule,
  processors: [CSS3DPlaneProcessor, CSS3DObjectProcessor, CSS3DSpriteProcessor],
  lifeOrder: SUPPORT_LIFE_CYCLE.THREE,
};
