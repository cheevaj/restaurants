<template>
  <div>
    hh
  </div>
</template>
  <script>
// import Login from "./login.vue";
// import signup from "./signup.vue";
export default {
  name: "index",
  // components: {
  //   signup,
  //   Login,
  // },
  data() {
    return {
      rules: {
        required: (value) => !!value || "Field is required",
      },
      active1: true,
      active2: false,
      active3: false,
    };
  },
  methods: {
    onActiveLogin() {
      this.active1 = true;
      this.active2 = false;
      this.active3 = false;
    },
    onActiveSingiup() {
      this.active2 = true;
      this.active1 = false;
      this.active3 = false;
    },
    onActivebook() {
      this.active3 = true;
      this.active1 = false;
      this.active2 = false;
    },
  },
};
</script>