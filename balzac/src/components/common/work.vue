<template>
  <div class="work">
    <div class="works--img">
      <slot name="worksimg"></slot>
    </div>
    <div class="works--bc"></div>
    <div class="works--type">
      <slot name="type"></slot>
    </div>
    <div class="works--title">
      <slot name="title"></slot>
    </div>
    <div class="works--balzac"><img src="@/assets/imgs/balzac_l.png" alt="balzac" width="80px"></div>
  </div>
</template>

<script>
  export default {
    name: "work"
  }
</script>

<style scoped>
  .work {
    width: 150px;
    height: 200px;
    position: relative;
    border: 1px solid rgb(80, 00, 80, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 10px;
  }

  .work:hover {
    box-shadow: 5px 5px 5px rgba(80, 00, 80, 0.05);
  }

  .works--img {
    width: 150px;
    height: 200px;
  }

  .works--type {
    color: purple;
    font-family: "kaiTi";
    position: absolute;
    font-size: 0.6em;
    top: 52%;
    right: 0;
    left: 0;
    text-align: center;
  }

  .works--title {
    color: purple;
    font-family: "biaoSong";
    font-size: 0.85em;
    position: absolute;
    top: 58%;
    right: 0;
    left: 0;
    text-align: center;
  }

  .works--balzac {
    position: absolute;
    top: 60%;
    right: 0;
    left: 0;
    text-align: center;
    opacity: 0.5;
  }

  .works--bc {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgb(255, 255, 255, 0.65);
  }
</style>