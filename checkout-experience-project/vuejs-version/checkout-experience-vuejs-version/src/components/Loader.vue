<template>
  <div id="loader">
    <div class="text-center"><b-spinner label="Spinning"></b-spinner></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#loader {
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  border-radius: inherit;
}
</style>
