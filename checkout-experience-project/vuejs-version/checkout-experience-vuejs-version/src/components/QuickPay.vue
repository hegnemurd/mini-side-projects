<template>
  <div class="quick-pay-container">
    <div class="saved-card">
      <b-button class="saved-button">
        <span class="card"
          ><b-icon icon="credit-card" aria-hidden="true"></b-icon
        ></span>
        Saved Card **** 4321
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
      </b-button>
    </div>
    <one-click-pay @click-button="$emit('click-one-click-pay', $event)"></one-click-pay>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
import OneClickPay from "./OneClickPay.vue";

export default {
  components: {
    BIcon,
    OneClickPay,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: inline;
  vertical-align: text-top;
  background: #f7f5f5;
  border: none;
}

.saved-button {
  border: 0.5px solid #f7f5f5;
  border-radius: 10px;
  margin: 1rem;
  padding: 0.5rem 1.01rem;
  background-color: #f7f5f5;
  color: black;
}

.flexRadioDefault{
  width: 15px; 
  height: 15px; 
  align-items: center; 
  margin: 10px 2px;
}
</style>
