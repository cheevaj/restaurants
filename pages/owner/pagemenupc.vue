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
              <v-card-text
                class="py-0 mr-1"
                style="background-color: rgb(219, 219, 219)"
              >
                <v-col cols="12">
                  <v-row>
                    <v-col cols="3" class="pa-0">
                      <v-btn
                        @click="active = active !== 'food' ? 'food' : 'food'"
                        text
                        style="height: 100%; width: 100%; border-radius: 0"
                        :style="{
                          backgroundColor:
                            active === 'food' ? '#fff' : 'rgb(219, 219, 219)',
                        }"
                      >
                        <div>
                          <v-col class="py-0 text-center">
                            <v-icon size="25" color="#e0dc63"
                              >mdi-bowl-mix</v-icon
                            >
                          </v-col>
                          <v-col class="py-0 text-center">ອາຫານ</v-col>
                        </div>
                      </v-btn>
                    </v-col>
                    <v-col cols="3" class="pa-0">
                      <v-btn
                        @click="active = active !== 'water' ? 'water' : 'water'"
                        text
                        style="height: 100%; width: 100%; border-radius: 0"
                        :style="{
                          backgroundColor:
                            active === 'water' ? '#fff' : 'rgb(219, 219, 219)',
                        }"
                      >
                        <div>
                          <v-col class="py-0 text-center">
                            <v-icon size="25" color="#1abced"
                              >mdi-bottle-soda-classic</v-icon
                            >
                          </v-col>
                          <v-col class="py-0 text-center">ເຄື່ອງດື່ມ</v-col>
                        </div>
                      </v-btn>
                    </v-col>
                    <v-col cols="3" class="pa-0">
                      <v-btn
                        @click="active = active !== 'salad' ? 'salad' : 'salad'"
                        text
                        style="height: 100%; width: 100%; border-radius: 0"
                        :style="{
                          backgroundColor:
                            active === 'salad' ? '#fff' : 'rgb(219, 219, 219)',
                        }"
                      >
                        <div>
                          <v-col class="py-0 text-center">
                            <v-icon size="25" color="#ababa7">mdi-pot-mix</v-icon>
                          </v-col>
                          <v-col class="py-0 text-center">ຕໍາ</v-col>
                        </div>
                      </v-btn>
                    </v-col>
                    <v-col cols="3" class="pa-0">
                      <v-btn
                        @click="
                          active =
                            active !== 'food_fast' ? 'food_fast' : 'food_fast'
                        "
                        text
                        style="height: 100%; width: 100%; border-radius: 0"
                        :style="{
                          backgroundColor:
                            active === 'food_fast'
                              ? '#fff'
                              : 'rgb(219, 219, 219)',
                        }"
                      >
                        <div>
                          <v-col class="py-0 text-center">
                            <v-icon size="25" color="#e0cc70">mdi-noodles</v-icon>
                          </v-col>
                          <v-col class="py-0 text-center">ອາຫານດ່ອນ</v-col>
                        </div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-card-text>
              <!-- <v-divider style=" background-color: black;"></v-divider> -->
              <v-card-text style="height: 620px" class="pa-0 scroll_y">
                <v-img
                  src="https://static.vecteezy.com/system/resources/thumbnails/007/188/600/small/abstract-blur-background-with-pastel-color-free-vector.jpg"
                >
                  <div v-if="active==='food'">
                    <food />
                  </div>
                  <div v-if="active==='water'">
                    <water />
                  </div>
                  <div v-if="active==='salad'">
                    <salad />
                  </div>
                </v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-card>
    </div>
  </template>
  <script>
  import food from "../menu//food.vue";
  import water from "../menu/water.vue";
  import salad from "../menu/salad.vue";
  export default {
    name: "IndexPage",
    components: {
      food,
      water,
      salad,
    },
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
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scroll_y::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scroll_y {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  </style>
    