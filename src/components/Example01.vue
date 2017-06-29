<template>
  <div id="#example-01">
    <button @click="addMessage">Add Message</button>
    <div class="row">
      <div class="col-md-6">
        <ul id="composer" ref="mComposer">
          <MessageComposer v-for="(message, index) in messages" :message="message" @remove="removeMessage" :key="index"/>
        </ul>
      </div>
      <div class="col-md-6">
        <ul id="preview" ref="mPreview">
          <MessagePreview v-for="(message, index) in messages" v-bind:message="message" :key="index"/>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import MessageComposer from './MessageComposer.vue'
  import MessagePreview from './MessagePreview.vue'
  export default {
    components: {
      MessageComposer,
      MessagePreview
    },
    data: () => {
      return {
        messages: []
      }
    },
    methods: {
      addMessage (e) {
        e.preventDefault()
        this.messages.push(this.createMessage())
      },
      removeMessage (message) {
        console.log(message)
        let index = this.messages.indexOf(message)
        if (index > -1) {
          this.messages.splice(index, 1)
        }
      },
      createMessage () {
        return {
          content: ''
        }
      }
    }
  }
</script>
<style>
  ul#composer, ul#preview {
    list-style: none;
  }
</style>
