import { getVideoTextureConfig, VideoTextureConfig } from "../TextureConfig";
import { needUpdateRegCommand, urlHanlder } from "./common";
import { VideoTexture } from "@vis-three/core";
import { syncObject } from "@vis-three/utils";
import { TextureCompiler } from "../TextureCompiler";
import { defineProcessor, EngineSupport } from "@vis-three/middleware";

export default defineProcessor<
  VideoTextureConfig,
  VideoTexture,
  EngineSupport,
  TextureCompiler
>({
  type: "VideoTexture",
  config: getVideoTextureConfig,
  commands: {
    set: {
      url: urlHanlder,
      $reg: [needUpdateRegCommand],
    },
  },
  create(config: VideoTextureConfig, engine: EngineSupport): VideoTexture {
    const texture = new VideoTexture(document.createElement("video"));

    if (config.url) {
      urlHanlder({ target: texture, value: config.url, engine });
    }

    syncObject(config, texture, {
      type: true,
      url: true,
    });

    texture.needsUpdate = true;

    return texture;
  },

  dispose(target: VideoTexture): void {
    target.dispose();
  },
});