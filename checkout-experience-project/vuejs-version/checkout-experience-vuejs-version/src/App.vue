<template>
  <div id="app">
    <!-- <CheckoutExperience></CheckoutExperience> -->
    <div class="parent">
      <div class="container">
        <h4>£129.99</h4>
        <quick-pay></quick-pay>
        <div class="divider">
          <span> OR</span>
        </div>
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
      </div>

      <div id="loader">
        <span class="spinner-border text-light" role="status"></span>
      </div>

      <div id="done">Payment Successful!</div>
    </div>
  </div>
</template>

<script>
import QuickPay from "./components/QuickPay.vue";

export default {
  name: "App",
  components: {
    QuickPay,
  },
};
</script>

<style></style>
