<template>
  <div ref="container" class="draggable-container">
    <v-btn
      width="50"
      height="50"
      ref="draggableBtn"
      fab
      :style="{
        backgroundColor: '#e6e6e6',
        bottom: initialBottom + 'px',
        right: initialRight + 'px',
      }"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
      @click="handleClick"
    >
      <v-badge v-if="catOder.length !== 0" class="pa-0" color="green" left>
        <template v-slot:badge>
          <span style="color: #ff0000">{{ catOder.length }}</span>
        </template>
        <v-icon size="25">mdi-cart-variant</v-icon>
      </v-badge>
      <v-icon v-else size="25">mdi-cart-variant</v-icon>
    </v-btn>

    <div class="text-center">
      <!-- <v-row></v-row> -->
      <v-bottom-sheet v-model="boxCart">
        <v-card
          class="text-center mx-auto rounded-0"
          :height="heightPx - 160"
          width="100%"
        >
          <v-card-actions class="pa-0" style="height: 40px">
            <div style="width: 20%; height: 100%"></div>
            <div style="width: 60%; height: 100%; left: 20%">
              <h1>Question</h1>
            </div>
            <div class="text-right" style="width: 20%; height: 100%; left: 80%">
              <v-card
                flat
                class="mouse_senter"
                style="
                  position: fixed;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  right: 0px;
                  border: 1px solid #808080;
                "
                fab
                @click="boxCart = false"
              >
                <v-icon color="rgb(999, 75,106)" class="text-center" size="40"
                  >mdi-close-circle</v-icon
                >
              </v-card>
            </div>
          </v-card-actions>
          <v-card-text class="pt-0 blue">
            <div>hi</div>
          </v-card-text>
          <v-card
            class="yellow"
            style="position: fixed; height: 80px; width: 100%; bottom: 0px"
          >
            <v-btn
              class="button-menu"
              text
              style="height: 100%; width: 25%"
              :style="{
                backgroundColor:
                  active === 'food' ? '#fff' : 'rgb(219, 219, 219)',
              }"
              @click="active = active !== 'food' ? 'food' : 'food'"
            >
              <div>
                <v-col class="py-0 text-center">
                  <v-icon size="25" color="#e0dc63">mdi-bowl-mix</v-icon>
                </v-col>
                <v-col class="py-0 text-center">ອາຫານ</v-col>
              </div>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="button-menu"
              text
              style="height: 100%; width: 25%; left: 25%"
              :style="{
                backgroundColor:
                  active === 'water' ? '#fff' : 'rgb(219, 219, 219)',
              }"
              @click="active = active !== 'water' ? 'water' : 'water'"
            >
              <div>
                <v-col class="py-0 text-center">
                  <v-icon size="25" color="#1abced"
                    >mdi-bottle-soda-classic</v-icon
                  >
                </v-col>
                <v-col class="py-0 text-center">ເຄື່ອງດື່ມ</v-col>
              </div>
            </v-btn>
            <v-btn
              class="button-menu"
              text
              style="height: 100%; width: 25%; left: 50%"
              :style="{
                backgroundColor:
                  active === 'salad' ? '#fff' : 'rgb(219, 219, 219)',
              }"
              @click="active = active !== 'salad' ? 'salad' : 'salad'"
            >
              <div>
                <v-col class="py-0 text-center">
                  <v-icon size="25" color="rgb(128, 128, 128)"
                    >mdi-pot-mix</v-icon
                  >
                </v-col>
                <v-col class="py-0 text-center">ຕໍາ</v-col>
              </div>
            </v-btn>
            <v-btn
              class="button-menu"
              text
              style="height: 100%; width: 25%; left: 75%"
              :style="{
                backgroundColor:
                  active === 'food_fast' ? '#fff' : 'rgb(219, 219, 219)',
              }"
              @click="
                active = active !== 'food_fast' ? 'food_fast' : 'food_fast'
              "
            >
              <div>
                <v-col class="py-0 text-center">
                  <v-icon size="25" color="#e0cc70">mdi-noodles</v-icon>
                </v-col>
                <v-col class="py-0 text-center">ອາຫານດ່ອນ</v-col>
              </div>
            </v-btn>
          </v-card>
        </v-card>
      </v-bottom-sheet>
    </div>
    <v-card flat width="100%" height="100%">
      <v-card flat height="38%">
        <v-card flat height="40%" class="rounded-0" style="position: relative">
          <v-img
            style="padding-top: 1px; height: 100%"
            class="pa-0"
            src="https://popmenucloud.com/usfzricy/4000d1c1-a311-4b56-806c-cb94773b3c51.jpg"
          >
            <v-card-title height="60%">
              <h5><span style="background-color: #fff"> Food 1 </span></h5>
            </v-card-title>
            <v-card
              flat
              width="100%"
              height="40%"
              class="rounded-0"
              style="
                background-color: transparent;
                position: absolute;
                bottom: 0;
              "
            >
              <v-btn
                class="button-menu"
                text
                style="height: 100%; width: 25%"
                :style="{
                  backgroundColor:
                    active === 'food' ? '#fff' : 'rgb(219, 219, 219)',
                }"
                @click="active = active !== 'food' ? 'food' : 'food'"
              >
                <div>
                  <v-col class="py-0 text-center">
                    <v-icon size="25" color="#e0dc63">mdi-bowl-mix</v-icon>
                  </v-col>
                  <v-col class="py-0 text-center">ອາຫານ</v-col>
                </div>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="button-menu"
                text
                style="height: 100%; width: 25%; left: 25%"
                :style="{
                  backgroundColor:
                    active === 'water' ? '#fff' : 'rgb(219, 219, 219)',
                }"
                @click="active = active !== 'water' ? 'water' : 'water'"
              >
                <div>
                  <v-col class="py-0 text-center">
                    <v-icon size="25" color="#1abced"
                      >mdi-bottle-soda-classic</v-icon
                    >
                  </v-col>
                  <v-col class="py-0 text-center">ເຄື່ອງດື່ມ</v-col>
                </div>
              </v-btn>
              <v-btn
                class="button-menu"
                text
                style="height: 100%; width: 25%; left: 50%"
                :style="{
                  backgroundColor:
                    active === 'salad' ? '#fff' : 'rgb(219, 219, 219)',
                }"
                @click="active = active !== 'salad' ? 'salad' : 'salad'"
              >
                <div>
                  <v-col class="py-0 text-center">
                    <v-icon size="25" color="rgb(128, 128, 128)"
                      >mdi-pot-mix</v-icon
                    >
                  </v-col>
                  <v-col class="py-0 text-center">ຕໍາ</v-col>
                </div>
              </v-btn>
              <v-btn
                class="button-menu"
                text
                style="height: 100%; width: 25%; left: 75%"
                :style="{
                  backgroundColor:
                    active === 'food_fast' ? '#fff' : 'rgb(219, 219, 219)',
                }"
                @click="
                  active = active !== 'food_fast' ? 'food_fast' : 'food_fast'
                "
              >
                <div>
                  <v-col class="py-0 text-center">
                    <v-icon size="25" color="#e0cc70">mdi-noodles</v-icon>
                  </v-col>
                  <v-col class="py-0 text-center">ອາຫານດ່ອນ</v-col>
                </div>
              </v-btn>
            </v-card>
          </v-img>
        </v-card>
        <v-col class="pa-0" style="height: 100%; background-color: #a0aecd">
          <v-card flat style="border-radius: 0%; height: 100%; width: 100%">
            <v-card-text
              class="pa-0"
              :height="heightPx"
              style="background-color: rgb(242, 242, 242)"
            >
              <h4 class="px-4">Menu</h4>
              <div>
                <food v-if="active === 'food'" />
                <water v-if="active === 'water'" />
                <salad v-if="active === 'salad'" />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-card>
    </v-card>
  </div>
</template>
<script>
import food from '../menu/food_user.vue'
import water from '../menu/water_user.vue'
import salad from '../menu/salad_user.vue'
export default {
  name: 'IndexPage',
  components: {
    food,
    water,
    salad,
  },
  data() {
    return {
      active: 'food',
      heightPx: 0,
      item: {},
      initialBottom: 120,
      initialRight: 0,
      isDragging: true,
      boxCart: true,
    }
  },
  computed: {
    catOder() {
      return this.$store.state.cart
    },
  },
  mounted() {
    this.setSheetHeight()
    window.addEventListener('resize', this.setSheetHeight)
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId) // Clear the interval when the component is destroyed
    }
  },
  methods: {
    async datas() {
      const config = {
        headers: {
          'ngrok-skip-browser-warning': 'true', // Include the custom header
        },
      }
      const res = await this.$axios.$get(
        'https://220f-183-182-110-230.ngrok-free.app/users/object',
        config
      )
      console.log(res)
      this.item = res
    },
    setSheetHeight() {
      // Get the height of the computer screen
      this.heightPx = window.innerHeight - 166
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setSheetHeight)
    },
    showMenu() {
      this.boxCart = !this.boxCart
    },
    handleClick() {
      if (this.isDragging) {
        this.showMenu()
      }
    },
    onMouseDown(event) {
      event.stopPropagation() // Stop the click event from bubbling up
      this.isDragging = false

      const button = this.$refs.draggableBtn.$el // Access the DOM element
      const container = this.$refs.container

      if (!button || !container) return

      const shiftX = event.clientX - button.getBoundingClientRect().left
      const shiftY = event.clientY - button.getBoundingClientRect().top

      const moveAt = (pageX, pageY) => {
        const containerRect = container.getBoundingClientRect()
        let newLeft = pageX - shiftX - containerRect.left
        let newTop = pageY - shiftY - containerRect.top

        // Ensure the button stays within the container bounds
        newLeft = Math.max(
          0,
          Math.min(newLeft, containerRect.width - button.offsetWidth)
        )
        newTop = Math.max(
          0,
          Math.min(newTop, containerRect.height - button.offsetHeight)
        )

        button.style.left = `${newLeft}px`
        button.style.top = `${newTop}px`
      }

      const onMouseMove = (event) => {
        this.isDragging = false
        moveAt(event.pageX, event.pageY)
      }

      document.addEventListener('mousemove', onMouseMove)

      document.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove)
        document.onmouseup = null
      }

      button.ondragstart = () => {
        return false
      }
    },
    onMouseUp() {
      this.isDragging = true
    },
    onTouchStart(event) {
      event.stopPropagation() // Stop the click event from bubbling up
      this.isDragging = false

      const button = this.$refs.draggableBtn.$el // Access the DOM element
      const container = this.$refs.container

      if (!button || !container) return

      const touch = event.touches[0]
      const shiftX = touch.clientX - button.getBoundingClientRect().left
      const shiftY = touch.clientY - button.getBoundingClientRect().top

      const moveAt = (pageX, pageY) => {
        const containerRect = container.getBoundingClientRect()
        let newLeft = pageX - shiftX - containerRect.left
        let newTop = pageY - shiftY - containerRect.top

        // Ensure the button stays within the container bounds
        newLeft = Math.max(
          0,
          Math.min(newLeft, containerRect.width - button.offsetWidth)
        )
        newTop = Math.max(
          0,
          Math.min(newTop, containerRect.height - button.offsetHeight)
        )

        button.style.left = `${newLeft}px`
        button.style.top = `${newTop}px`
      }

      const onTouchMove = (event) => {
        const touch = event.touches[0]
        this.isDragging = false
        moveAt(touch.pageX, touch.pageY)
      }

      document.addEventListener('touchmove', onTouchMove)

      document.ontouchend = () => {
        document.removeEventListener('touchmove', onTouchMove)
        document.ontouchend = null
      }

      button.ondragstart = () => {
        return false
      }
    },
    onTouchEnd() {
      this.isDragging = true
    },
  },
}
</script>

<style>
.draggable-container {
  position: relative;
  height: 100vh; /* Adjust the height as needed */
}

.v-btn {
  position: absolute;
  cursor: grab;
  z-index: 100;
}
.button-menu {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 0px solid #808080;
}
.mouse_senter {
  cursor: pointer;
}
</style>
