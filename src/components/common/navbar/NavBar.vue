<template>
  <div class="NavBar">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .NavBar {
    display: flex;
    height: 54px;
    line-height: 54px;
    text-align: center;
    background-color: #f6f4f4;
  }
  .NavBar div {
    flex: 1;
  }
</style>
