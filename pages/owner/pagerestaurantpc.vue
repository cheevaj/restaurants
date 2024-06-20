<template>
    <div>
      <v-card flat class="rounded-0">
        <v-col class="pa-0">
          <v-card flat class="rounded-0 text-center">
            <v-card-text>
              <h1>chee vang</h1>
            </v-card-text>
          </v-card>
        </v-col>
        <div>
          <v-col class="pa-0" style="height: 100%; background-color: #a0aecd">
            <v-card flat style="border-radius: 0%; height: 100%; width: 100%">
              <v-divider
                style="background-color: rgb(128, 128, 128); height: 8px"
              ></v-divider>
              <v-card-text class="py-0">
                <v-card-text class="pa-0">
                  <v-card-text class="py-0 text-center">
                    <h4>ຂໍ້ມູນຕິດຕໍ່</h4>
                  </v-card-text>
                  <v-card-text class="pa-2">
                    <v-icon>mdi-gmail</v-icon>
                    chivang@gmail.com
                  </v-card-text>
                  <v-card-text class="pa-2">
                    <v-icon>mdi-phone-in-talk-outline</v-icon>
                    02058812037
                  </v-card-text>
                  <v-card-text class="pa-2">
                    <v-icon>mdi-facebook</v-icon>
                    chivang
                  </v-card-text>
                </v-card-text>
                <v-card-text class="pa-0">
                  <v-card-text class="py-0 text-center">
                    <h4>ຂໍ້ມູນທີ່ຢູ່</h4>
                  </v-card-text>
                  <v-card-text class="pa-2">
                    <v-icon>mdi-home</v-icon>
                    home
                  </v-card-text>
                  <v-card-text class="pa-2">
                    <v-icon>mdi-city-variant-outline</v-icon>
                    city
                  </v-card-text>
                  <v-card-text class="pa-2">
                    <v-icon>mdi-home-city</v-icon>
                    province
                  </v-card-text>
                </v-card-text>
              </v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-card>
    </div>
  </template>
  <script>
  // import food from "../menu/food.vue";
  // import water from "../menu/water.vue";
  // import salad from "../menu/salad.vue";
  export default {
    name: "IndexPage",
    // components: {
    //   food,
    //   water,
    //   salad,
    // },
    data() {
      return {
        active: "food",
      };
    },
    //   methods: {
    //     async food() {
    //       const config = {
    //         headers: {
    //           "ngrok-skip-browser-warning": "true", // Include the custom header
    //         },
    //       };
    //       const res = await this.$axios.$get(
    //         "https://220f-183-182-110-230.ngrok-free.app/users/object",
    //         config
    //       );
    //       console.log(res);
    //       this.item = res;
    //     },
    //   },
  };
  </script>
  <style>
  .scroll_y {
    background-color: #eee;
    overflow-y: scroll; /* Add the ability to scroll */
  }
  
  .scroll_y::-webkit-scrollbar {
    display: none;
  }
  
  .scroll_y {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  </style>