<template>
  <div>
    <v-card flat class="table-container rounded-0" :height="heightPx">
      <v-card
        v-for="(items, index) in menu"
        :key="index"
        flat
        height="80px"
        class="rounded-0"
      >
        <Row>
          <Col :xs="7" :sm="5" :md="6" :lg="8" height="80">
            <div flat class="pa-1 height-menu d-flex align-center">
              <v-img max-height="100%" max-width="100%" :src="items.images" style="border-radius: 10px;" />
            </div>
          </Col>
          <Col :xs="9" :sm="16" :md="12" :lg="8" height="80">
            <div flat class="pa-0 rounded-0 height-menu d-flex align-center">
              <v-card-text class="pa-0 d-flex align-center">
                <div>
                  <h3>{{ items.name }}</h3>
                  <v-card-actions class="px-0 py-1">
                    <v-avatar class="my-0 pa-0" size="18">
                      <img
                        src="~/static/gold-coin-icon-png.jpg"
                        alt="John" /></v-avatar
                    >&nbsp;:&nbsp;
                    <h5>{{ formatResultDesc(items.price) }}</h5>
                    &nbsp;<span class="font_size_12">kip</span>
                  </v-card-actions>
                </div>
              </v-card-text>
            </div>
          </Col>
          <Col :xs="8" :sm="4" :md="6" :lg="8" height="80">
            <div flat class="rounded-0 height-menu d-flex align-center">
              <v-card-text class="pa-1 text-right">
                <InputNumber
                  :min="0"
                  v-model="form['value_' + index]"
                  :disabled="isInSelectedMenus(items.id) ? true : false"
                  :style="{ width: '50px' }"
                />
                <Button
                  v-if="isInSelectedMenus(items.id)"
                  type="info"
                  @click="toggleEdit(items.id)"
                >
                  Edit
                </Button>
                <Button
                  v-else
                  type="success"
                  @click="addMenu(index, items.id, form['value_' + index])"
                >
                  Add
                </Button>
              </v-card-text>
            </div>
          </Col>
        </Row>
        <v-divider style="background-color: rgb(242, 242, 242)"></v-divider>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}, // Initialize as an empty object
      heightPx: 0,
      menu: [
        {
          id: 1230,
          name: 'Heineken-1',
          price: 20000,
          images:
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg',
        },
        {
          id: 7860,
          name: 'Heineken-2',
          price: 35000,
          images:
            'https://www.eatthis.com/wp-content/uploads/sites/4/2021/04/salmon-salad-mediterranean-lunch-e1654646632895.jpg?quality=82&strip=1',
        },
        {
          id: 989,
          name: 'Heineken-3',
          price: 40000,
          images:
            'https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg',
        },
        {
          id: 240,
          name: 'Heineken-4',
          price: 20000,
          images:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574',
        },
        {
          id: 36853,
          name: 'Heineken-5',
          price: 25000,
          images:
            'https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg',
        },

        {
          id: 378544,
          name: 'Heineken-1',
          price: 20000,
          images:
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg',
        },
        {
          id: 22342,
          name: 'Heineken-2',
          price: 35000,
          images:
            'https://www.eatthis.com/wp-content/uploads/sites/4/2021/04/salmon-salad-mediterranean-lunch-e1654646632895.jpg?quality=82&strip=1',
        },
        {
          id: 7834,
          name: 'Heineken-3',
          price: 40000,
          images:
            'https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg',
        },
        {
          id: 234590,
          name: 'Heineken-4',
          price: 20000,
          images:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574',
        },
        {
          id: 45320,
          name: 'Heineken-5',
          price: 25000,
          images:
            'https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg',
        },
      ],
      // selectedMenus: [], // Initialize as an empty array
    }
  },
  computed: {
    catOder() {
      return this.$store.state.cart
    },
  },
  mounted() {
    // Dynamically assign keys to the form object
    this.menu.forEach((_, index) => {
      this.$set(this.form, `value_${index}`, 1)
    })
    this.setSheetHeight()
    window.addEventListener('resize', this.setSheetHeight)
  },
  methods: {
    addMenu(index, id, value) {
      console.log('add', index, id, value)
      if (value !== 0) {
        this.$store.commit('addToCat', { index, id, unit: value })
      }
      console.log(this.$store.state.cart)
    },
    isInSelectedMenus(id) {
      return this.$store.state.cart.some((item) => item.id === id)
    },
    toggleEdit(id) {
      this.$store.commit('removeFromCat', id)
      console.log(this.$store.state.cart)
    },
    setSheetHeight() {
      // Get the height of the computer screen
      this.heightPx = window.innerHeight - 166
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setSheetHeight)
    },
    formatResultDesc(value) {
      // Check if value is a valid number
      const num = Number(value)
      if (!isNaN(num)) {
        return new Intl.NumberFormat().format(num)
      }
      return value // Return the original value if it's not a valid number
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
.table-container {
  overflow-y: auto;
}
.table-container ::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.table-container ::-webkit-scrollbar-thumb {
  background-color: #ffff00;
  border-radius: 4px;
}
.table-container ::-webkit-scrollbar-corner {
  background-color: #ffff00;
  border-radius: 4px;
}
.height-menu {
  height: 80px;
}
.font_size_12 {
  font-size: 12px;
}
</style>
