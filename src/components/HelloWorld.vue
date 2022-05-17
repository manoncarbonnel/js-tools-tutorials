<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello World'
    }
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    sky () {
      return this.count > 6 ? 'You have reached the sky!' : ''
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VS Code</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    class="count"
    @click="count++"
  >
    count is: {{ count }}
    <span
      v-if="sky"
      class="sky"
    >{{ sky }}</span>
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="css">
a {
  color: #42b983;
}

.sky {
  color: #3a33d1;
}
</style>
