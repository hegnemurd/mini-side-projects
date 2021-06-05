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
  padding: 0.5rem 2rem;
  background-color: #252525fd;
  color: #ffff;
  font-family: Arial, sans-serif;
}

#pay-button:hover {
  cursor: pointer;
  background-color: #f7f5f5;
  color: rgb(0, 0, 0);
  box-shadow: -1px 1px 4px 1px #aeafb1;
}
</style>
