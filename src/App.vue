<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-card rounded color="yellow" class="text-h5"
          ><span style="font-size: 32px; margin: 10px">Rush Hour </span></v-card
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn color="yellow" rounded @click="helpDialog = true"
        ><span>How To Play</span></v-btn
      >
    </v-app-bar>

    <v-main>
      <HelloWorld @closeHelpDialog="closeHelpDialog" :helpDialog="helpDialog" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    helpDialog: false, //
  }),
  methods: {
    // close the dialog caused by emit from child
    closeHelpDialog: function () {
      this.helpDialog = false;
    },
  },
};
</script>

<style scoped>
span {
  color: blue;
}
</style>
