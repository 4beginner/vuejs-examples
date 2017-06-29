<template>
  <li>
    <output>{{message.content}}</output>
  </li>
</template>
<script>
  export default {
    props: {
      message: {
        required: true
      }
    }
  }
</script>
<style>
  ul#preview li {
    background-color: #ccc;
    width: 100%;
    mix-height: 1em;
    margin-bottom: 5px;
    text-align: left;
  }
</style>
