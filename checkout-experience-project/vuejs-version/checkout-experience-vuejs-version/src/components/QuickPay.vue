<template>
  <div class="quick-pay-container">
    <div class="saved-card">
      <b-button class="saved-button">
        <span class="card"
          ><b-icon
            icon="credit-card"
            style="width: 17px;"
            aria-hidden="true"
          ></b-icon>
          Saved Card **** 4321
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
        /></span>
      </b-button>
    </div>
    <one-click-pay
      @click-button="$emit('click-one-click-pay', $event)"
    ></one-click-pay>
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
  padding: 5px 9px 8px;
  text-align: center;
}

.saved-button:hover {
  text-decoration: none;
  color: black;
  background-color: #f7f5f5;
  border: 0.5px solid #f7f5f5;
}

#flexRadioDefault1 {
  margin: 5px 4px 0px 3px;
  border: 0.5px solid #d1cfcf;
}

.form-check-input {
  width: 1em;
  height: 1em;
  border: 1px solid #ececec;
  position: inherit;
}


.btn-secondary:focus, .btn-secondary.focus {
    color: black;
    background-color: #f7f5f5;
    border-color: #f7f5f5;
    box-shadow: 0 0 0 0.2rem #f7f5f5;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: black;
  background-color: #f7f5f5;
  border-color: #f7f5f5;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: black;
  background-color: #f7f5f5;
  border-color: #f7f5f5;
}
</style>
