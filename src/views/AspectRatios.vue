<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-responsive :aspect-ratio="16 / 9">
            <v-card-text>
              This card will always be 16:9 (unless you put more stuff in it)
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="6">
        <div>
          <v-checkbox v-model="v0" label="Visible"></v-checkbox>
          <v-banner v-model="v0" single-line transition="slide-y-transition">
            No Internet connection
            <template v-slot:actions="{ dismiss }">
              <v-btn text color="primary" @click="dismiss">
                Dismiss
              </v-btn>
              <v-btn text color="primary">
                Retry
              </v-btn>
            </template>
          </v-banner>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    v0: true
  })
};
</script>
