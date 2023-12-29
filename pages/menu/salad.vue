<template>
    <div>
      <v-col v-for="i in 10" :key="i" class="pa-3">
        <v-card class="rounded-0">
          <v-col>
            <v-row>
              <v-col align="center"  justify="center" cols="2" class="pa-1">
                <v-img
                  src="https://changinghabits.com.au/wp-content/uploads/2015/11/Pickled-Green-Papaya-Salad-1.jpg"
                />
              </v-col>
              <v-col cols="7" class="pa-1">
                <v-card-text class="pa-0">
                  <div>salad</div>
                  <div>12.000 kip</div>
                </v-card-text>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn width="70%" x-small class="primary"> ແກ້ໄຂ </v-btn>
                <v-btn x-small width="70%" class="error"> ລົບເມນູ </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </div>
  </template>