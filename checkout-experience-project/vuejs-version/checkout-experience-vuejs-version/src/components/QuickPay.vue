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
          style="width: 15pxpx; height: 15px' align-items: center; padding: 2px;"
        />
      </b-button>
    </div>
    <div class="one-click-pay">
      <b-button id="pay-button"
        >One-Click Pay<b-icon icon="lock"></b-icon
      ></b-button>
    </div>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  components: {
    BIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: inline;
  vertical-align: text-top;
}

.saved-button {
  border: 0.5px solid #f7f5f5;
  border-radius: 10px;
  margin: 1rem;
  padding: 0.6rem 1.01rem;
  background-color: #f7f5f5;
  font-size: 15px;
  font-family: Arial, sans-serif;
}

#pay-button {
  border: 0.5px solid #dde1e6;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  background-color: #252525fd;
  color: #ffff;
  font-family: Arial, sans-serif;
}
</style>
