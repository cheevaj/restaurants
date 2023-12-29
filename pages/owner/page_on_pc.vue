<template>
  <div>
    <v-card style="height: 920px; background-color: #a0aecd">
      <v-col cols="12" class="pa-0" style="height: 20%">
        <v-row>
          <v-col cols=""> </v-col>
          <v-col> </v-col>
        </v-row>
        <v-img
          style="height: 100%; width: 100%"
          src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg"
        />
      </v-col>
      <v-col cols="12" style="height: 80%">
        <v-row>
          <v-col cols="3" class="px-0">
            <pageowner_pc />
          </v-col>
          <v-col cols="6" class="px-1" style="height: 560px">
            <pagemenu_pc />
          </v-col>
          <v-col cols="3" class="px-0" style="height: 560px">
            <pagerestaurant_pc />
          </v-col>
        </v-row>
        <v-card-text style="height: 95px"> </v-card-text>
      </v-col>
    </v-card>
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
          risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
          Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
          cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
  <script>
import pageownerpc from "./pageownerpc.vue";
import pagemenupc from "./pagemenupc.vue";
import pagerestaurantpc from "./pagerestaurantpc.vue";
export default {
  name: "IndexPage",
  components: {
    pageownerpc,
    pagerestaurantpc,
    pagemenupc,
  },
  data() {
    return {
      item: {},
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    };
  },
};
</script>