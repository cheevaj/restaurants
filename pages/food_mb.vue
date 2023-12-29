<template>
  <div>
    <v-card color="grey-lighten-4" flat height="200px" rounded="0" text>
      <v-toolbar extended>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      add: true,
    };
  },
  methods: {
    Addmenu() {
      this.add = false;
    },
  },
};
</script>
  
  
  
  
  