<template>
    <div>
      <v-card flat height="350" class="d-flex align-center justify-center">
        <v-card v-if="staticQR === 'scan'" width="250" height="250" outlined>
          <canvas ref="qrcodeCanvas" width="250" height="250" v-if="qrCodeData"></canvas>
          <v-card-text v-if="qrCodeData" class="text-center">
            <a :href="qrCodeLink" target="_blank">{{ qrCodeLink }}</a>
          </v-card-text>
        </v-card>
        <v-card v-else class="text-center" width="250" height="250" flat>
          <transition name="move-right">
            <form @submit.prevent="handleSearch">
              <Input
                v-model="numberID"
                placeholder="Enter your ID"
                clearable
                style="width: 250px; height: 34px; margin-top: 1px"
                @keydown.enter="handleSearch"
                class="no-spinner"
              />
            </form>
          </transition>
          <v-card-text>
            <v-btn outlined @click="handleSearch">Search</v-btn>
          </v-card-text>
        </v-card>
      </v-card>
      <v-card-text class="text-center red">
        <v-btn @click="staticQR = 'scan'">Scan QR</v-btn>
        <v-btn @click="staticQR = 'id'">Input ID</v-btn>
        <v-btn @click="loopNumber">Generate Links</v-btn>
      </v-card-text>
      <v-card-text class="text-center">
        <v-card v-for="item in table" :key="item.link" class="mb-4" outlined>
            <v-card-text class="text-center py-0">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </v-card-text>
          <img :src="item.qrCodeData" :alt="`QR Code for ${item.name}`" width="150" height="150" />
          <v-card-text class="text-center py-0">
            <a :href="item.link" target="_blank">{{ item.ip }} <span>({{ item.id }})</span></a>
          </v-card-text>
        </v-card>
      </v-card-text>
    </div>
  </template>
  
  <script>
  import QRCode from 'qrcode'
  
  export default {
    data() {
      return {
        staticQR: 'id',
        numberID: '',
        qrCodeData: '',
        qrCodeLink: '',
        ip: 4455667788,
        unit: 10,
        table: [],
      }
    },
    watch: {
      staticQR(newVal) {
        if (newVal === 'scan') {
          this.generateQRCode('https://example.com') // Change this to the URL you want to convert
        }
      },
    },
    methods: {
      handleSearch() {
        this.generateQRCode(`${this.numberID}`)
      },
      generateQRCode(url) {
        this.qrCodeLink = url
        QRCode.toDataURL(url, { errorCorrectionLevel: 'H' })
          .then((dataUrl) => {
            this.qrCodeData = dataUrl
          })
          .catch((err) => {
            console.error(err)
          })
      },
      async loopNumber() {
        const baseURL = `http://172.28.17.102:3333/${this.ip}/`
        this.table = []
        for (let i = 1; i <= this.unit; i++) {
          const link = `${baseURL}${i}`
          const qrCodeData = await QRCode.toDataURL(link, { errorCorrectionLevel: 'H' })
          this.table.push({
            link,
            name: `table-${i}`,
            ip: this.ip,
            id: i,
            qrCodeData
          })
        }
        console.log(this.table)
      },
      openLinkInNewTab(link) {
        window.open(link, '_blank')
      },
    },
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  .text-center {
    text-align: center;
  }
  .red {
    color: red;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  </style>
  