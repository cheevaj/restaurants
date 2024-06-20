<template>
  <div>
    <div>
      <v-btn fab text small>
        <v-icon size="30">mdi-arrow-left</v-icon>
      </v-btn>
    </div>
    <v-row>
      <v-col cols="4" class="text-center">
        <v-card-text>
          <h2>ຮູບພາບ</h2>
        </v-card-text>
      </v-col>
      <v-col cols="4" class="text-center">
        <v-card-text>
          <h2>ຊື່ເມນູ</h2>
        </v-card-text>
      </v-col>
      <v-col cols="4" class="text-center">
        <v-card-text>
          <h2>ລາຄາ</h2>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-text style="height: 700px; overflow-y: scroll">
      <v-card>
        <v-row>
          <v-col cols="4" height="200">
            <v-img
              max-height="200"
              max-width="200"
              src="https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=220"
            />
          </v-col>
          <v-col cols="4" height="150" class="text-center">
            <v-card-text class="text-h6">ອານຫານທະເລລອມ</v-card-text>
          </v-col>
          <v-col cols="4" class="text-center">
            <v-card-text class="text-h6"> 120.000 kip </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-card-text>
    <v-card-text>
      <v-card-actions>
        <div>
          <h2>ລາຄາລອມ:</h2>
        </div>
        <div>
          <v-card-text> <h2>120.000 kip</h2> </v-card-text>
        </div>
      </v-card-actions>
    </v-card-text>
  </div>
</template>