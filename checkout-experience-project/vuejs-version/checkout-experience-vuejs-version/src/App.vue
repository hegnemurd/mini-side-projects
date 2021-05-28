<template>
  <div id="app">
    <!-- <CheckoutExperience></CheckoutExperience> -->
    <div class="parent">
      <container></container>

      <div id="loader">
        <span class="spinner-border text-light" role="status"></span>
      </div>

      <div id="done">Payment Successful!</div>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: {
    Container,
  },
};
</script>

<style>
.parent {
  display: flex;
  flex-direction: column;
  border: 0.5px solid #dde1e6;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 5%;
  width: 280px;
  height: 300px;
  text-align: center;
  box-shadow: -10px 20px 30px 10px #909296;
  position: relative;
}

.container,
#loader,
#done {
  width: 100%;
  height: 100%;
}

#loader {
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  border-radius: inherit;
}

.spinner-border {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 41%;
  top: 42%;
}

#done {
  display: none;
  margin-top: 50%;
}

h4 {
  font-family: Arial, sans-serif;
  font-size: 20px;
  margin: 0.5rem;
  font-weight: 500;
}
</style>
