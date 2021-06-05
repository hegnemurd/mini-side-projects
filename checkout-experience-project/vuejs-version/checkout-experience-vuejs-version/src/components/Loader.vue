<template>
  <div id="loader">
    <span class="spinner-border text-light" role="status"></span>
  </div>
</template>

<script>
export default {}
</script>

<style>
#loader {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  border-radius: inherit;
   width: 100%;
  height: 100%;
}

.spinner-border {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 41%;
  top: 42%;
  /* border-color: white transparent transparent transparent; */
}
</style>
