<template>
  <v-overlay :z-index="zIndex" :value="overlay">
    <v-btn class="white--text" color="teal" @click="overlay = false">
      Hide Overlay
    </v-btn>
  </v-overlay>
</template>

<script>
import EventBus from "../plugins/EventBus";
export default {
  data: () => ({
    overlay: false,
    zIndex: 0
  }),
  created() {
    EventBus.$on("openOverlay", () => {
      this.overlay = !this.overlay;
    });
  }
};
</script>

<style></style>
