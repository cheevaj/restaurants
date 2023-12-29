<template>
    <div>
        <v-card flat>
            <v-card height="40%">
                <v-card flat height="20%" class="rounded-0">
                    <v-img style="padding-top: 1px; height: 100px;" class="pa-0"
                        src="https://popmenucloud.com/usfzricy/4000d1c1-a311-4b56-806c-cb94773b3c51.jpg" />

                </v-card>
                <v-col class="pa-0" style="height: 100%; background-color: #a0aecd">
                    <v-card flat style="border-radius: 0%; height: 100%; width: 100%">
                        <v-divider style="background-color: rgb(128, 128, 128); height: 8px"></v-divider>
                        <v-card-text class="py-0 mr-1" style="background-color: rgb(219, 219, 219)">
                            <v-col cols="12">
                                <v-row>
                                    <v-col cols="3" class="pa-0">
                                        <v-btn @click="active = active !== 'food' ? 'food' : 'food'" text
                                            style="height: 100%; width: 100%; border-radius: 0" :style="{
                                                backgroundColor:
                                                    active === 'food' ? '#fff' : 'rgb(219, 219, 219)',
                                            }">
                                            <div>
                                                <v-col class="py-0 text-center">
                                                    <v-icon size="25" color="#e0dc63">mdi-bowl-mix</v-icon>
                                                </v-col>
                                                <v-col class="py-0 text-center">ອາຫານ</v-col>
                                            </div>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="3" class="pa-0">
                                        <v-btn @click="active = active !== 'water' ? 'water' : 'water'" text
                                            style="height: 100%; width: 100%; border-radius: 0" :style="{
                                                backgroundColor:
                                                    active === 'water' ? '#fff' : 'rgb(219, 219, 219)',
                                            }">
                                            <div>
                                                <v-col class="py-0 text-center">
                                                    <v-icon size="25" color="#1abced">mdi-bottle-soda-classic</v-icon>
                                                </v-col>
                                                <v-col class="py-0 text-center">ເຄື່ອງດື່ມ</v-col>
                                            </div>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="3" class="pa-0">
                                        <v-btn @click="active = active !== 'salad' ? 'salad' : 'salad'" text
                                            style="height: 100%; width: 100%; border-radius: 0" :style="{
                                                backgroundColor:
                                                    active === 'salad' ? '#fff' : 'rgb(219, 219, 219)',
                                            }">
                                            <div>
                                                <v-col class="py-0 text-center">
                                                    <v-icon size="25" color="#ababa7">mdi-pot-mix</v-icon>
                                                </v-col>
                                                <v-col class="py-0 text-center">ຕໍາ</v-col>
                                            </div>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="3" class="pa-0">
                                        <v-btn @click="
                                            active =
                                            active !== 'food_fast' ? 'food_fast' : 'food_fast'
                                            " text style="height: 100%; width: 100%; border-radius: 0"
                                            :style="{ backgroundColor: active === 'food_fast' ? '#fff' : 'rgb(219, 219, 219)', }">
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
                        <v-card-text style="height: 450px" class="pa-0 scroll_y">
                            <v-img
                                src="https://static.vecteezy.com/system/resources/thumbnails/007/188/600/small/abstract-blur-background-with-pastel-color-free-vector.jpg">
                                <div v-if="active === 'food'">
                                    <food />
                                </div>
                                <div v-if="active === 'water'">
                                    <water />
                                </div>
                                <div v-if="active === 'salad'">
                                    <salad />
                                </div>
                            </v-img>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-card>
        </v-card>
    </div>
</template>
<script>
import food from "../menu/food_user.vue";
import water from "../menu/water_user.vue";
import salad from "../menu/salad_user.vue";
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
            item: {},
        };
    },
    // mounted() {
    //   this.datas();
    // },
    // methods: {
    //   async datas() {
    //     const config ={
    //         headers: {
    //           'ngrok-skip-browser-warning': 'true', // Include the custom header
    //         },
    //       };
    //     const res = await this.$axios.$get(
    //       "https://220f-183-182-110-230.ngrok-free.app/users/object",config
    //     );
    //     console.log(res);
    //     this.item=res;
    //   },
    // },
};
</script>
  