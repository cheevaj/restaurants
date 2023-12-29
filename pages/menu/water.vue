<template>
    <div>
      <v-col v-for="i in 10" :key="i" class="pa-3">
        <v-card class="rounded-0">
          <v-col>
            <v-row>
              <v-col cols="2" class="pa-1">
                <v-img
                  src="https://aroyscandyshop.be/5077-large_default/pepsi-cola-33-cl.jpg"
                />
              </v-col>
              <v-col cols="7" class="pa-1">
                <v-card-text class="pa-0">
                  <div>water</div>
                  <div>12.000 kip</div>
                </v-card-text>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn width="70%" x-small class="primary"> ແກ້ໄຂ </v-btn>
                <v-btn x-small width="70%" class="error pa-2"> ລົບເມນູ </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </div>
  </template>