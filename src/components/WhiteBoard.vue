<template>
  <div>
    <canvas id="whiteboard" resize></canvas>
    <!-- <mainPanel></mainPanel>
    <historyPanel></historyPanel> -->
  </div>
</template>

<script>
import paper from "paper";
import MainPanel from "./panel/MainPanel";
import HistoryPanel from "./panel/HistoryPanel";

export default {
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel
  },
  created() {
    paper.install(window);
  },
  mounted() {
    paper.setup("whiteboard");
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
canvas {
  height: 100vh;
  width: 100%;
  background:white;
}
</style>