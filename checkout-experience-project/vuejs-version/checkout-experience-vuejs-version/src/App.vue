<template>
  <div id="app">
    <!-- <CheckoutExperience></CheckoutExperience> -->
    <div class="parent">
      <container @clicked-quick-pay="change"></container>
      <loader v-if="clicked === true"></loader>
      <div id="done">Payment Successful!</div>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    Container,
    Loader,
  },
  data: function() {
    return {
      clicked: false,
    };
  },
  methods: {
    change: function() {
      if (this.clicked === false) {
        this.clicked = true;
        setTimeout(() => {
        
      }, 3000);
      } else {
        this.clicked = false;
      }
    },
  },
    // methods: {
  //  loading(load) {
      //var changedContainer = document.getElementById("loader");
      // if (!changedContainer) {
      //   changedContainer.style.display = "block";
      // } else {
      //   changedContainer.style.display = "none";
      // }
      // this.$emit(load);
      
    // },
    // done: function() {
      // data
    // },
  // },
// };
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
