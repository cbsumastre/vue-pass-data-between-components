<template>
  <div class="container">
    <div v-if="childMessage">
      With props: <span class="message">{{ childMessage }}</span>
    </div>
    <div v-if="myTextInjected.text">
      With provide (parent) / inject (child):
      <span class="message">{{ myTextInjected.text }} </span>
    </div>
    <div v-if="getStoreMessage">
      With vuex:
      <span class="message">{{ getStoreMessage }}</span>
    </div>
    <div>
      With root/prototype:
    </div>
    <div>
      With $refs:
    </div>
    <div>
      Whit $parent:
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    childMessage: {
      type: String,
      required: true
    }
  },
  inject: ["myTextInjected"],
  computed: {
    ...mapGetters(["getStoreMessage"])
  }
};
</script>

<style scoped>
.message {
  color: #18ab29;
}
</style>
