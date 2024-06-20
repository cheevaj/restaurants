<template>
  <div ref="container" class="draggable-container" style="position: fixed; z-index: 100; background-color: blue;">
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
      <v-icon size="25">mdi-cart-variant</v-icon>
    </v-btn>
    <v-card v-if="boxCart"> hi </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialBottom: 120,
      initialRight: 0,
      isDragging: true,
      boxCart: false,
    }
  },
  methods: {
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
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId) // Clear the interval when the component is destroyed
    }
  },
}
</script>

<style>
.draggable-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
}

.v-btn {
  position: absolute;
  cursor: grab;
}
</style>
