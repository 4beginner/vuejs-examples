<template>
  <li class="message-composer">
    <input v-model="message.content"/> <button @click="close">x</button>
  </li>
</template>
<script>
  export default {
    props: {
      message: {
        required: true
      }
    },
    methods: {
      close (e) {
        e.preventDefault()
        // TODO: message delete
        this.$emit('remove', this.message)
      }
    }
  }
</script>
