<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="{ name: item.to }"
            exact
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
    <Overlay />
  </v-app>
</template>

<script>
import Overlay from "./components/Overlay";

export default {
  components: { Overlay },
  data: () => ({
    drawer: null,
    selectedItem: 0,
    items: [
      { text: "Home", icon: "home", to: "home" },
      { text: "About", icon: "info", to: "about" },
      { text: "Aspect ratios", icon: "mdi-star", to: "aspect_ratios" },
      { text: "Slot Test", icon: "mdi-history", to: "slot_test" },
      { text: "Offline", icon: "mdi-check-circle", to: "ccc" },
      { text: "Uploads", icon: "mdi-upload", to: "ddd" },
      { text: "Backups", icon: "mdi-cloud-upload", to: "eee" }
    ]
  })
};
</script>
