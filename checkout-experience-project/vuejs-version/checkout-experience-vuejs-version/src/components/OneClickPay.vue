<template>
  <div class="one-click-pay" id="one-click-pay">
    <b-button id="pay-button" @click="$emit('click-button', $event)"
      >One-Click Pay<b-icon icon="lock"></b-icon
    ></b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#pay-button {
  border: 0.5px solid #dde1e6;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 0.3rem 2rem;
  background-color: #252525fd;
  color: #ffff;
}

.btn-secondary:focus,
.btn-secondary.focus {
  color: black;
  background-color: #f7f5f5;
  border-color: #f7f5f5;
  box-shadow: 0 0 0 0.2rem #f7f5f5;
}
</style>
