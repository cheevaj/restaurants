<template>
    <div>
      <v-card style="height: 700px; background-color: #a0aecd">
        <v-col cols="12" class="pa-0" style="height: 16%">
          <v-img
            style="height: 100%; width: 100%"
            src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg"
          >
            <v-col cols="12" class="px-1 py-0" style="height: 100%; width: 100%">
              <v-row>
                <v-col cols="8">
                  <v-card-actions class="pa-0">
                    <div>
                      <v-img
                        height="120"
                        width="150"
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b5aa5a110142211.5fe4b6386999e.jpg"
                      />
                    </div>
                    <div>
                      <v-card-title>
                        <h1>Restaurant China</h1>
                      </v-card-title>
                    </div>
                  </v-card-actions>
                </v-col>
                <v-col cols="4" class="px-0 py-0">
                  <v-card height="38%" width="100%" class="rounded-0 mt-2">
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="7">
                          <v-card-text class="pa-0"
                            >ເບີເຈົ້າຂອງຮ້ານ 02058812037
                          </v-card-text>
                        </v-col>
                        <v-col cols="3" class="px-0 text-center">
                          <v-btn fab text x-small>
                            <v-icon color="#fc8c03" size="25">mdi-pasta</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="2" class="px-0 text-left">
                          <v-btn fab text x-small>
                            <v-icon size="25">mdi-cog-outline</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-img>
        </v-col>
        <v-col>
          <v-card
            flat
            class="mt-1 rounded-0"
            height="84%"
            style="background-color: #a0aecd"
          >
            <v-row>
              <v-col cols="7" class="pa-0" style="height: 574px">
                <v-card
                  flat
                  class="rounded-0"
                  height="50%"
                  style="background-color: #a0aecd"
                >
                  <v-col>
                    <v-row>
                      <v-col
                        cols="1"
                        class="text-center vertical-text pa-2"
                        style="height: 287px"
                      >
                        <v-card-text
                          class="pa-0"
                          style="background-color: #f7cd46"
                        >
                          <h4>ໂຕະເຕັມແລ້ວ: 20</h4>
                        </v-card-text>
                      </v-col>
                      <v-col cols="11" class="pa-0 pt-2" style="height: 287px">
                        <v-card-text class="px-2 example" style="height: 275px">
                          <v-row>
                            <v-col class="pa-2" cols="3" v-for="i in 20" :key="i">
                              <v-card style="background-color: #6afc76">
                                <v-card-actions class="pa-1">
                                  <v-card-text
                                    class="pa-0"
                                    style="height: 100%; width: 50%"
                                  >
                                    <v-img
                                      src="https://5.imimg.com/data5/BE/TE/NA/SELLER-99865910/elora-hardy-ted-ideas-06a-500x500.jpg"
                                    />
                                  </v-card-text>
                                  <v-card-text class="pa-0 text-center">
                                    120
                                  </v-card-text>
                                </v-card-actions>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
                <v-card
                  flat
                  class="rounded-0"
                  height="50%"
                  style="background-color: #a0aecd"
                >
                  <v-col>
                    <v-row>
                      <v-col
                        cols="1"
                        class="text-center vertical-text pa-2"
                        style="height: 287px"
                        ><v-card-text
                          class="pa-0"
                          style="background-color: #f7cd46"
                        >
                          <h4>ໂຕະວ່າງ: 16</h4>
                        </v-card-text>
                      </v-col>
                      <v-col cols="11" class="pa-0 pt-1" style="height: 280px">
                        <v-card-text class="px-2 example" style="height: 280px">
                          <v-row>
                            <v-col class="pa-2" cols="3" v-for="i in 16" :key="i">
                              <v-card style="background-color: #d76f30">
                                <v-card-actions class="pa-1">
                                  <v-card-text
                                    class="pa-0"
                                    style="height: 100%; width: 50%"
                                  >
                                    <v-img
                                      src="https://5.imimg.com/data5/BE/TE/NA/SELLER-99865910/elora-hardy-ted-ideas-06a-500x500.jpg"
                                    />
                                  </v-card-text>
                                  <v-card-text class="pa-0 text-center">
                                    120
                                  </v-card-text>
                                </v-card-actions>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
              </v-col>
              <v-col cols="5" class="pa-0" style="height: 574px">
                <v-card
                  flat
                  class="rounded-0"
                  height="80%"
                  style="background-color: #a0aecd"
                >
                  <v-col>
                    <v-row>
                      <v-col
                        cols="1"
                        class="text-center vertical-text pa-1 m-0"
                        style="height: 458px"
                      >
                        <v-card-text
                          class="pa-0"
                          style="background-color: #f7cd46"
                        >
                          <h4>ຈໍານອນໃບບີນ: 20 ໃບບີນ</h4>
                        </v-card-text>
                      </v-col>
                      <v-col cols="11" class="pa-0 pt-2" style="height: 458px">
                        <v-card-text class="px-1 example" style="height: 450px">
                          <v-row>
                            <v-col cols="12" v-for="i in 20" :key="i">
                              <v-card
                                style="background-color: #5ebec4"
                                class="mt-1"
                              >
                                <v-col
                                  class="pa-0"
                                  style="height: 100%; width: 100%"
                                >
                                  <v-card-text class="py-0">
                                    <v-row>
                                      <v-col cols="3" class="pa-0 py-1">
                                        <v-img
                                          style="height: 100%; width: 80%"
                                          src="https://5.imimg.com/data5/BE/TE/NA/SELLER-99865910/elora-hardy-ted-ideas-06a-500x500.jpg"
                                        />
                                      </v-col>
                                      <v-col cols="4">
                                        <v-card-text class="pa-0">
                                          ອາຫານ:
                                        </v-card-text>
                                      </v-col>
                                      <v-col cols="4">
                                        <v-card-text class="pa-0">
                                          ນໍ້າ:
                                        </v-card-text>
                                      </v-col>
                                      
                                    </v-row>
                                  </v-card-text>
                                </v-col>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
                <v-card
                  flat
                  class="rounded-0"
                  height="20%"
                  style="background-color: #a0aecd"
                >
                  <v-col>
                    <v-row>
                      <v-col
                        cols="1"
                        class="pa-0 text-center vertical-text pa-1"
                        style="height: 115px"
                      >
                        <v-card-text
                          class="pa-0"
                          style="background-color: #f7cd46"
                        >
                          <h4>ປີ່ມບີນ</h4>
                        </v-card-text>
                      </v-col>
                      <v-col
                        cols="11"
                        class="pa-0 pt-1 pr-1"
                        style="height: 115px"
                      >
                        <v-card
                          class="rounded-0"
                          flat
                          style="background-color: #ffffff; height: 108px"
                        >
                          <v-col>
                            <v-row>
                              <v-col cols="6" style="height: 108px;"> 
                              <v-card-text>
                                ff
                              </v-card-text>
                              </v-col>
                              <v-col cols="6" style="height: 108px;">
                              <v-card-text>
                                gg
                              </v-card-text>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
                <v-card v-if="false"
                  flat
                  class="rounded-0"
                  height="20%"
                  style="background-color: #a0aecd"
                >
                  <v-col>
                    <v-row>
                      <v-col
                        cols="1"
                        class="pa-0 text-center vertical-text pa-1"
                        style="height: 115px"
                      >
                        <v-card-text
                          class="pa-0"
                          style="background-color: #f7cd46"
                        >
                          <h4>ປີ່ມບີນ</h4>
                        </v-card-text>
                      </v-col>
                      <v-col
                        cols="11"
                        class="pa-0 pt-1 pr-1"
                        style="height: 115px"
                      >
                        <v-card
                          class="rounded-0"
                          flat
                          style="background-color: #ffffff; height: 108px"
                        >
                          <v-col>
                            <v-row>
                              <v-col cols="6" style="height: 108px;"> 
                              <v-card-text>
                                ff
                              </v-card-text>
                              </v-col>
                              <v-col cols="6" style="height: 108px;">
                              <v-card-text>
                                gg
                              </v-card-text>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-card>
    </div>
  </template>
  <style scoped>
  .vertical-text {
    transform: rotate(180deg); /* Rotate text 90 degrees clockwise */
    transform-origin: bottom top; /* Set the rotation origin to the top-left corner */
    white-space: nowrap; /* Prevent text from wrapping to the next line */
    writing-mode: vertical-rl; /* Set the writing mode to vertical right-to-left */
  }
  .example {
    background-color: #fff;
    border: 1px dotted black;
    overflow-y: scroll; /* Add the ability to scroll */
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .example::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .example {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  </style>
  