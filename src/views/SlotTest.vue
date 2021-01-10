<!-- TabContainer.vue -->
<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-subheader>slot</v-subheader>
        <div>
          <ButtonTab>
            <!-- slot 영역 -->
            <h1>First Header</h1>
          </ButtonTab>
          <ButtonTab>
            <!-- slot 영역 -->
            <h1>Second Header</h1>
          </ButtonTab>
          <ButtonTab>
            <!-- slot 영역 -->
            <h1>Third Header</h1>
          </ButtonTab>
        </div>
      </v-col>
      <v-col cols="4">
        <v-subheader>named slot</v-subheader>
        <div>
          <ButtonTab2>
            <!-- slot 영역 -->
            <h1 slot="header">First Header</h1>
            <div slot="content" class="content">Tab Contents #1</div>
          </ButtonTab2>
          <ButtonTab2>
            <!-- slot 영역 -->
            <h1 slot="header">Second Header</h1>
            <div slot="content" class="content">Tab Contents #2</div>
          </ButtonTab2>
          <ButtonTab2>
            <!-- slot 영역 -->
            <h1 slot="header">Third Header</h1>
            <div slot="content" class="content">Tab Contents #3</div>
          </ButtonTab2>
        </div>
      </v-col>
      <v-col cols="4">
        <v-subheader>v slot</v-subheader>
        <div>
          <BaseModal>
            <template v-slot:header>
              <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
              <p>Here's some contact info</p>
            </template>
          </BaseModal>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-btn class="white--text" color="teal" @click="openOverlay">
          Show Overlay
        </v-btn>
      </v-col>
      <v-col cols="6">
        <div class="text-center">
          <BaseBottomSheet>
            <template v-slot:default>
              This is a bottom sheet using the inset prop
              aaaaaaaaaaaaaaaaaaaaaaaaaa
            </template>
          </BaseBottomSheet>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ButtonTab from "../components/ButtonTab";
import ButtonTab2 from "../components/ButtonTab2";
import BaseModal from "../components/BaseModal";
import BaseBottomSheet from "../components/BaseBottomSheet";
import EventBus from "../plugins/EventBus";

export default {
  components: {
    ButtonTab,
    ButtonTab2,
    BaseModal,
    BaseBottomSheet
  },
  data: () => ({ sheet: false }),
  methods: {
    openOverlay() {
      EventBus.$emit("openOverlay");
    }
  }
};
</script>
