<template>
  <div class="container">
    <div v-if="childMessage">
      With props: <span class="message">{{ childMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childMessage: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.message {
  color: #18ab29;
}
</style>
