<template>
  <div class="video">
    <canvas id="canvas" ref="myswiper"></canvas>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted } from "vue";

import MissileEngineDecoder from "@/h265/index";
import RenderEngine420P from "@/h265/render-yuv420p";
const myswiper = ref(null);

var url265 = "http://192.168.21.21:8080/spreedmovie.hevc";
var token =
  "base64:QXV0aG9yOmNoYW5neWFubG9uZ3xudW1iZXJ3b2xmLEdpdGh1YjpodHRwczovL2dpdGh1Yi5jb20vbnVtYmVyd29sZixFbWFpbDpwb3JzY2hlZ3QyM0Bmb3htYWlsLmNvbSxRUTo1MzEzNjU4NzIsSG9tZVBhZ2U6aHR0cDovL3h2aWRlby52aWRlbyxEaXNjb3JkOm51bWJlcndvbGYjODY5NCx3ZWNoYXI6bnVtYmVyd29sZjExLEJlaWppbmcsV29ya0luOkJhaWR1";
var version = "100.2.0";

var networkInterval = null;
var rawParserObj = null;
var decoderMod = null;

const test = () => {
  var canvas = myswiper.value;
  var yuv = RenderEngine420P.setupCanvas(canvas, {
    preserveDrawingBuffer: false,
  });
  
  var main = () => {
    rawParserObj = new MissileEngineDecoder.CRawParser();
    var startFetch = false;
    networkInterval = window.setInterval(() => {
      if (!startFetch) {
        startFetch = true;
        fetch(url265)
          .then(function (response) {
            let pump = function (reader) {
              return reader.read().then(function (result) {
                if (result.done) {
                  window.clearInterval(networkInterval);
                  return;
                }
                let chunk = result.value;
                rawParserObj.appendStreamRet(chunk);
                return pump(reader);
              });
            };
            return pump(response.body.getReader());
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, 1);

    var ptsIdx = 0;
    window.setInterval(() => {
      let nalBuf = rawParserObj.nextNalu(); // nal
      if (nalBuf != false) {
        decoderMod.decodeNalu(nalBuf, ptsIdx);
        ptsIdx++;
      }
    }, 2);
  };
  decoderMod = new MissileEngineDecoder.CMissileDecoder(token, version);
  decoderMod.initFinish = () => {
    decoderMod.bindCallback(function (
      y,
      u,
      v,
      stride_y,
      stride_u,
      stride_v,
      width,
      height
    ) {
      RenderEngine420P.renderFrame(yuv, y, u, v, stride_y, height);
    });
    main();
  };
  decoderMod.initDecoder();
};

onMounted(() => {
  test();
});

defineComponent({
  name: "yunweibao-H265",
});
</script>

<style  scoped lang="scss">
.video {
  width: 100%;
  height: 100%;
  background: #000000;
  #canvas {
    width: 100%;
    height: 100%;
  }
}
</style>>
