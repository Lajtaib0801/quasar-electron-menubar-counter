<template>
  <q-page class="q-pa-md">
    <q-btn
      @click="increaseCounter"
      color="primary"
      :label="counter"
      size="xl"
      class="full-width q-mb-md"
    />
    <div class="row">
      <div class="col">
        <q-btn
          @click="decreaseCounter"
          color="negative"
          icon="remove"
          flat
          round
          size="lg"
        />
      </div>
      <div class="col text-center">
        <q-btn @click="resetCounter" icon="restart_alt" flat round size="lg" />
      </div>
      <div class="col text-right">
        <q-btn
          @click="increaseCounter"
          color="positive"
          icon="add"
          flat
          round
          size="lg"
        />
      </div>
      <q-btn
        @click="quitApp"
        icon="power_settings_new"
        flat
        round
        size="sm"
        class="absolute-bottom-right"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
let counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};
const resetCounter = () => {
  counter.value = 0;
};
const quitApp = () => {
  window.myAPI.quitApp()
};
</script>
