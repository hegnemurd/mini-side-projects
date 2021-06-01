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
  name: "Container",
  components: {
    QuickPay,
    Integrations,
  },
};
</script>

<style scoped>
.divider {
  border-top: 1px solid #dde1e6;
  display: flex;
  height: 1px;
  justify-content: center;
  align-items: center;
  margin: 1em 0 2em 0;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: 100;
}

.divider span {
  background: white none repeat scroll 0 0;
  padding: 0.1em 1.5em;
  font-family: sans-serif;
}
</style>
