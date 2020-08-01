<template>
  <div class="container">
    <h1 class="title">Pass data between components</h1>
    <textarea
      class="parent"
      v-model="parentMessage"
      placeholder="Enter new message in parent"
    ></textarea>
    <button v-on:click="send" class="myButton">Send message to child</button>
    <Child :childMessage="childMessage" class="child" />
  </div>
</template>

<script>
import Child from "@/components/Child";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Child
  },
  data: function() {
    return {
      parentMessage: "",
      childMessage: ""
    };
  },
  methods: {
    ...mapActions(["storeMessage"]),
    send() {
      this.childMessage = this.parentMessage;
      this.storeMessage(this.parentMessage);
      //clear parent message
      this.parentMessage = "";
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 20px 0;
  min-height: 200px;
}
.title {
  width: 50%;
  color: #18ab29;
}
.parent {
  width: 50%;
  min-height: 150px;
  background-color: orange;
  margin-top: 25px;
  margin-bottom: 25px;
}
.myButton {
  box-shadow: 0px 0px 0px 0px #3dc21b;
  background-color: #44c767;
  border-radius: 10px;
  border: 2px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  padding: 19px 31px;
  text-decoration: none;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}

.child {
  width: 100%;
  min-height: 150px;
  margin-top: 25px;
}
</style>
