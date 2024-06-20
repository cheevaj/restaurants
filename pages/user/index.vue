<template>
  <div>
    <v-card flat height="350" class="d-flex align-center justify-center">
      <v-card class="text-center" height="250" flat>
        <transition name="move-right">
          <form @submit.prevent="handleSearch">
            <v-card-actions>
              <div class="custom-input">
                <Input
                  v-model="numberID"
                  placeholder="Enter your ID"
                  clearable
                  style="
                    width: 200px;
                    height: 34px;
                    margin-top: 1px;
                    border: none;
                  "
                  @keydown.enter="handleSearch"
                  class="no-spinner"
                />
              </div>
              <div class="custom-input">
                <span><h3>(</h3></span>
                <Input
                  v-model="classID"
                  placeholder="XXXX"
                  style="
                    width: 50px;
                    margin-top: 1px;
                    margin-left: 2px;
                    margin-right: 2px;
                    height: 34px;
                    border: none;
                  "
                  @keydown.enter="openLinkInNewTab"
                  class="no-spinner custom-border"
                />
                <span><h3>)</h3></span>
              </div>
            </v-card-actions>
          </form>
        </transition>
        <!-- <v-card-text>
          <v-btn outlined @click="openLinkInNewTab">Search</v-btn>
        </v-card-text> -->
        <v-card-text>
          <v-btn outlined @click="oderPage">Login</v-btn>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberID: '',
      classID: '',
    }
  },
  methods: {
    openLinkInNewTab() {
      window.open(this.numberID, '_blank')
    },
    oderPage() {
      this.$router.push('../user/oder_menu'); // ../user/oder_menu
    },
  },
}
</script>

<style scoped>
/* Additional styling if needed */
.text-center {
  text-align: center;
}

.custom-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 2px;
}

.custom-input span {
  padding: 0 2px;
  color: #333;
}
.custom-border {
  border: 0px solid #ccc;
}
</style>
