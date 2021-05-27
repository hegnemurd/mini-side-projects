<template>
  <div class="quick-pay-container">
    <div class="saved-card">
      <b-button class="saved-button">
        <b-icon icon="credit-card" aria-hidden="true"></b-icon> Saved Card ****
        4321
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
      <button id="pay-button">One-Click Pay <i class="bi bi-lock"></i></button>
    </div>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  components: {
    BIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
