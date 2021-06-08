<template>
  <div id="app">
    <!-- <CheckoutExperience></CheckoutExperience> -->
    <div class="parent">
      <container @clicked-quick-pay="change"></container>
      <loader v-if="clicked === true"></loader>
      <div v-if="done" id="done">Payment Successful!</div>
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
      done: false,
    };
  },
  methods: {
    change: function() {
      if (this.clicked === false) {
        this.clicked = true;
        setTimeout(() => {
          this.clicked = false;
          this.done = true;
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
  width: 330px;
  height: 350px;
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

</style>
