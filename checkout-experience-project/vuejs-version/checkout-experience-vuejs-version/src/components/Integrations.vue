<template>
  <div class="integrations">
    <div class="paypal">
      <button class="paypal-button">PayPal</button>
    </div>
    <div class="google">
      <button class="google-button">
        <span class="blue">G</span><span class="red">o</span
        ><span class="yellow">o</span><span class="blue">g</span
        ><span class="green">l</span><span class="red">e</span> Pay
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paypal {
  padding: 5px;
}

.paypal-button {
  border: 0.5px solid #dde1e6;
  border-radius: 10px;
  margin-bottom: 0.25rem;
  padding: 0.2rem 6.1rem;
  background-color: #a9d0ff;
  color: #0055bd;
}

.google-button {
  border: 0.5px solid #dde1e6;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 0.2rem 4.95rem;
  background-color: #000000;
  color: #ffff;
}

.blue {
  color: #006bee;
}

.red {
  color: #e71212;
}

.yellow {
  color: #f1ee1c;
}

.green {
  color: #0cb607;
}
</style>
