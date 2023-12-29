<template>
  <div>
    <v-card height="80" class="pa-0 ma-0 rounded-0 red" flat>
      <v-img
        height="80"
        class="ma-0"
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y1NDZiYXRjaDMtbXludC0zMS1iYWRnZXdhdGVyY29sb3JfMS5qcGc.jpg"
      >
        <v-col cols="12">
          <v-row>
            <v-col cols="7" class="pa-0">
              <!-- <v-card height="80" flat class="rounded-0"> -->
              <v-card-actions class="pa-0 pl-1">
                <div>
                  <v-img
                    height="70"
                    width="140"
                    src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                  />
                </div>
                <div>
                  <v-card-title>
                    <v-card-actions>
                      <h1 style="color: red">RES</h1>
                      <h1>TAURANT</h1>
                    </v-card-actions>
                  </v-card-title>
                </div>
              </v-card-actions>
              <!-- </v-card> -->
            </v-col>

            <v-col cols="5" class="pa-0">
              <!-- <v-card height="80" flat class="rounded-0"> -->
              <v-btn v-if="active1" height="80" class="rounded-0 white" text>
                <v-card-text class="mt-12"> Log in </v-card-text>
              </v-btn>

              <v-btn
                @click="onActiveLogin"
                v-else
                height="80"
                class="rounded-0"
                text
              >
                <v-card-text class="mt-12"> Log in </v-card-text>
              </v-btn>

              <v-btn v-if="active2" height="80" class="rounded-0 white" text>
                <v-card-text class="mt-12"> Sing up </v-card-text>
              </v-btn>

              <v-btn
                v-else
                @click="onActiveSingiup"
                height="80"
                class="rounded-0"
                text
              >
                <v-card-text class="mt-12"> Sing up </v-card-text>
              </v-btn>
              <v-btn v-if="active3" height="80" class="rounded-0 white" text>
                <v-card-text class="mt-12"> book </v-card-text>
              </v-btn>

              <v-btn
                v-else
                @click="onActivebook"
                height="80"
                class="rounded-0"
                text
              >
                <v-card-text class="mt-12"> book </v-card-text>
              </v-btn>
              <!-- </v-card> -->
            </v-col>
          </v-row>
        </v-col>
      </v-img>
    </v-card>

    <v-card height="600" class="pa-0 ma-0 rounded-0 blue" flat>
      <v-img
        height="600"
        class="ma-0"
        src="https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMC1uLTEyLWNsb3Vkd2F0ZXJjb2xvcnNfMi5qcGc.jpg"
      >
        <v-col cols="12">
          <v-row>
            <v-col cols="7" class="pa-0 text-baton">
              <v-col cols="12" >
                <div>
                  <v-card-text>
                    <h1>hh</h1>
                  </v-card-text>
                </div>
              </v-col>
            </v-col>
            <v-col cols="5" class="pa-0 pr-12">
              <v-div v-if="active2" >
                <signup />
              </v-div>
              <div v-if="active1" >
                <login/>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-img>
    </v-card>
  </div>
</template>
  <script>
import login from "./login.vue";
import signup from "./signup.vue";
export default {
  name: "pagecreateaccount",
  components: {
    signup,
    login,
  },
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