<template>
    <div>
      <v-col v-for="i in 10" :key="i" class="pa-3">
        <v-card class="rounded-0">
          <v-col>
            <v-row>
              <v-col cols="2" class="pa-1">
                <v-card flat>
                  <v-img
                    style="height: 100%; width: 100%"
                    src="https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-chicken-pasta-salad-646670ff9c384.jpeg"
                  />
                </v-card>
              </v-col>
              <v-col cols="7" class="pa-1">
                <v-card-text class="pa-0">
                  <div>food</div>
                  <div>12.000 kip</div>
                </v-card-text>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-row justify="center">
                  <v-btn color="primary" dark >
                    Open Dialog
                  </v-btn>         
                </v-row>            
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
      };
    },
  };
  </script>