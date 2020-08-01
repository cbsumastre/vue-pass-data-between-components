<template>
  <div class="container">
    <div v-if="childMessage">
      With props: <span class="message">{{ childMessage }}</span>
    </div>
    <div>
      With inject/provide:
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
