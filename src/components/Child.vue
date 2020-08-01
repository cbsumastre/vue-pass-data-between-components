<template>
  <div class="container">
    <div v-if="childMessage">
      Message with props: <span class="message">{{ childMessage }}</span>
    </div>
    <div v-if="myTextInjected.text">
      Message with provide (parent) / inject (child):
      <span class="message">{{ myTextInjected.text }} </span>
    </div>
    <div v-if="getStoreMessage">
      Message with vuex:
      <span class="message">{{ getStoreMessage }}</span>
    </div>
    <div v-if="refMessage">
      Message with root/prototype:
      <span class="message"> {{ refMessage }}</span>
    </div>
    <div v-if="refMessage">
      Message with $refs: <span class="message"> {{ refMessage }}</span>
    </div>
    <div v-if="parentMessage">
      Message with $parent: <span class="message"> {{ parentMessage }}</span>
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
  data() {
    return {
      refMessage: this.$refMessage
    };
  },
  inject: ["myTextInjected"],
  computed: {
    ...mapGetters(["getStoreMessage"]),
    parentMessage() {
      return this.$parent.childMessageParent;
    }
  }
};
</script>

<style scoped>
.message {
  color: #18ab29;
}
</style>
