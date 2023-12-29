<template>
  <div>
    <v-card v-if="active=='login'" flat class="rounded-0 mr-8">
      <v-col cols="12" class="pb-0 text-center">
        <v-card-text>
          <h2>ເຂົ້າລະບົບ</h2>
        </v-card-text>
      </v-col>
      <v-divider></v-divider>
      <v-card flat class="pa-4 px-8">
        <v-card-text class="pa-0 mt-0"> Phone number or Email </v-card-text>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Phone number or Email"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> Your Password </v-card-text>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Password"
          ></v-text-field>
        </v-responsive>
        <v-col cols="12" class="py-0">
          <v-row>
            <v-col cols="5" class="py-0"> </v-col>
            <v-col cols="7" class="py-0">
              <v-card-actions class="py-0">
                <v-card-text class="pa-0 mt-0 text-right"> Forget </v-card-text>
                <v-card-text @click="active='forget'" class="pa-0 mt-0" style="color: blue">
                  Password
                </v-card-text>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
      <v-col cols="12" class="text-center">
        <v-btn width="70%" height="40" class="primary">log in</v-btn>
      </v-col>
    </v-card>

    <!-- forget password -->
    <v-card v-if="active=='forget'" flat class="rounded-0 mr-12">
      <v-col cols="12" class="pb-0 text-center">
        <v-card-text>
          <h2>Forget password</h2>
        </v-card-text>
      </v-col>
      <v-divider></v-divider>
      <v-card flat class="pa-4 px-8">
        <v-card-text class="pa-0 mt-0">
          <v-col class="text-center py-0"> Phone number or Email</v-col>
        </v-card-text>
        <v-divider></v-divider>
        <br/>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            dense
            :rules="[rules.required]"
            clearable
            label="Phone or Email"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0">kk</v-card-text>
      </v-card>
      <v-col cols="12">
        <v-row>
          <v-col cols="6" class="text-left">
            <v-btn @click="active='login'" text width="50%" height="50" class="gray"><v-icon>mdi-arrow-left</v-icon>Next</v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn width="50%" height="50" class="primary">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Field is required",
      },
      active: "login",
    };
  },
};
</script>