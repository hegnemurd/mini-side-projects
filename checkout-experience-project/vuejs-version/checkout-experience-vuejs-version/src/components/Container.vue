<template>
  <div class="container">
    <h4>£129.99</h4>
    <quick-pay></quick-pay>
    <div class="divider">
      <span> OR</span>
    </div>
    <integrations></integrations>
  </div>
</template>

<script>
import QuickPay from "./QuickPay";
import Integrations from "./Integrations";

export default {
  name: "Parent",
  components: {
    QuickPay,
    Integrations,
  },
};
</script>

<style>
/* .container {
  width: 100%;
  height: 100%;
} */
</style>
