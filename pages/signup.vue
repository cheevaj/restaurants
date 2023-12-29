<template>
  <div>
    <!-- data owner -->
    <v-card flat class="rounded-0" v-if="activesignup==='owner'">
      <v-card-title> ຂໍ້ມູນເຈົ້າຂອງຮ້ານ </v-card-title>
      <v-divider></v-divider>
      <v-card flat class="pa-4">
        <v-card-text class="pa-0 mt-0"> Fist Name </v-card-text>
        <v-responsive max-width="244">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Fist name"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> Last Name </v-card-text>
        <v-responsive max-width="244">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Last name"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> Phone number </v-card-text>
        <v-responsive max-width="244">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Your number"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> Number cade </v-card-text>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Your number"
          ></v-text-field>
        </v-responsive>
        <v-card-action>
          <div>
            <v-card-text class="pa-0 mt-0"> Image cade </v-card-text>
          </div>
          <div>
            <v-file-input
              hide-input
              show-size
              truncate-length="28"
              label="Image"
              variant="filled"
              prepend-icon="mdi-image"
            >
            </v-file-input>
          </div>
        </v-card-action>
      </v-card>
      <v-col cols="12" class="text-right pt-0">
        <v-btn @click="activesignup='restaurant'" width="40%" height="50" class="primary">next</v-btn>
      </v-col>
    </v-card>
    <!--/ data owner -->

    <!-- data restaurant -->
    <v-card flat class="rounded-0" v-if="activesignup==='restaurant'">
      <v-card-title> ຂໍ້ມູນຮ້ານ </v-card-title>
      <v-divider></v-divider>
      <v-card flat class="pa-4">
        <v-card-text class="pa-0 mt-0"> Name </v-card-text>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Name"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> ທີ່ຕັ້ງຂອງຮ້ານ </v-card-text>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="ຮ້ານຕັ້ງຢູ່ບ້ານ"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> Menu </v-card-text>
        <v-combobox
          v-model="model"
          :items="items"
          :search-input.sync="search"
          hide-selected
          hint="Maximum of 5 tags"
          label="Add some tags"
          multiple
          persistent-hint
          small-chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong
                  >". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </v-card>
      <v-col cols="12" class="pt-0">
        <v-row>
          <v-col cols="6" class="text-left">
            <v-btn @click="activesignup='owner'" width="50%" height="50" class="gray" text
              ><v-icon>mdi-arrow-left</v-icon>back</v-btn
            >
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn @click="activesignup='login'" width="50%" height="50" class="primary">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
    <!--/ data restaurant -->

    <!-- data on log in -->
    <v-card flat class="rounded-0" v-if="activesignup==='login'">
      <v-card-title> ຂໍ້ມູນໃຊ້ເຂົ້າລະບົບ </v-card-title>
      <v-divider></v-divider>
      <v-card flat class="pa-4">
        <v-card-text class="pa-0 mt-0"> ອິເມວ </v-card-text>
        <v-responsive max-width="344">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Email"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> ເບີໂທ </v-card-text>
        <v-responsive max-width="244">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Phone number"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> Password </v-card-text>
        <v-responsive max-width="300">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Password"
          ></v-text-field>
        </v-responsive>
        <v-card-text class="pa-0 mt-0"> confirm Password </v-card-text>
        <v-responsive max-width="300">
          <v-text-field
            placeholder="Placeholder"
            outlined
            dense
            :rules="[rules.required]"
            clearable
            label="Password"
          ></v-text-field>
        </v-responsive>
      </v-card>
      <v-col cols="12" class="pt-0">
        <v-row>
          <v-col cols="6" class="text-left">
            <v-btn @click="activesignup='restaurant'" width="50%" height="50" class="gray" text
              ><v-icon>mdi-arrow-left</v-icon> back</v-btn
            >
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn width="100%" height="50" class="primary">Create new account</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
    <!-- data login -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      i:"https://tse2.mm.bing.net/th?id=OIP.7Szg6T2mxXud0dSv0HDMYQHaD_&pid=Api&P=0&h=220",
      rules: {
        required: (value) => !!value || "Field is required",
      },
      items: [ "Programming", "Vue", "Vuetify"],
      model: ["Vuetify"],
      search: null,
      watch: {
        model(val) {
          if (val.length > 5) {
            this.$nextTick(() => this.model.pop());
          }
        },
      },
      activesignup:"owner",
    };
  },
};
</script>