<template>
  <div class="container">
    <h4>£129.99</h4>
    <quick-pay
      @click-one-click-pay="$emit('clicked-quick-pay', $event)"
    ></quick-pay>
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
.container {
  width: 100%;
  height: 100%;
}

.divider {
  border-top: 1px solid #dde1e6;
  display: flex;
  height: 1px;
  justify-content: center;
  align-items: center;
  margin: 1em 0 2em 0;
  text-align: center;
}
.divider span {
  background: white none repeat scroll 0 0;
  padding: 0.1em 1.5em;
}
</style>
