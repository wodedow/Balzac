<template>
  <div class="editby">
    <slot></slot>
    <div>--- balzacfeedback@qq.com ---</div>
  </div>
</template>

<script>
  export default {
    name: "editby"
  }
</script>

<style scoped>
  .editby {
    margin: 2em auto;
    text-align: center;
    color: rgba(80, 00, 80, 0.3);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>