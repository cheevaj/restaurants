<template>
  <div>
    <EnLanguages :en="en" />
    <v-row>
      <v-col cols="12" sm="6" md="6" class="px-4">
        <v-card v-if="en" outlined class="mx-auto mt-4" max-width="90%">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-img height="250"
            src="https://watermark.lovepik.com/photo/20211208/large/lovepik-restaurant-cafe-picture_501643584.jpg"></v-img>
          <v-card-title>Classroom User</v-card-title>
          <v-card-text>
            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Restaurant for Users</v-card-title>
          <v-card-actions>
            <v-btn elevation="0" block large :loading="loading" color="deep-purple lighten-2" style="color: aliceblue;"
              @click="classUser">
              For User
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="px-4">
        <v-card outlined class="mx-auto mt-4" max-width="90%">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-img height="250"
            src="https://foaps.co/wp-content/uploads/2022/03/How-to-Open-a-restaurant-in-India-1.jpg"></v-img>
          <v-card-title>Classroom Owner</v-card-title>
          <v-card-text>
            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Restaurant for Owners</v-card-title>
          <v-card-actions>
            <v-btn elevation="0" block large :loading="loading" color="deep-purple lighten-2" style="color: aliceblue;"
              @click="classOwner">
              For owner
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-card-text class="text-center pt-12">
      <Input v-model="value" placeholder="Enter Link...." style="width: 300px" />
      <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Generate QR Code</span>
        <span v-else>Loading</span>
      </Button>
      <v-card flat>
        <div>
          <v-card-text>
            <v-img max-width="250px" max-height="250px" :src="imageqr" />
          </v-card-text>
        </div>
      </v-card>
    </v-card-text> -->
  </div>
</template>
<script>
import EnLanguages from '~/components/enLanguages.vue';

export default {
  components: {
    EnLanguages,
  },
  computed: {
    en() {
      return this.$store.state.en;
    },
  },
  data() {
    return {
      loading: false,
      selection: 1,
      value: '',
      imageqr: '',
      i: 5,
    };
  },
  methods: {
    classUser() {
      this.$router.push('/user');
    },
    classOwner() {
      this.$router.push('/owner');
    },
    toLoading() {
      this.loading = true;
      const link = encodeURIComponent(this.value);
      const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
      this.imageqr = qr;
      this.loading = false;
    },
  },
};
</script>