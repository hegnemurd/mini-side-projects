<template>
  <div id="loader">
    <div class="text-center"><b-spinner label="Spinning"></b-spinner></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#loader {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  border-radius: inherit;
}

.spinner-border {
  display: inline-block;
  width: 55px;
  height: 55px;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 1s linear infinite spinner-border;
  animation: 1s linear infinite spinner-border;
  color: white;
  position: absolute;
  left: 41%;
  top: 44%;
}
</style>
