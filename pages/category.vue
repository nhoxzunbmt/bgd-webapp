<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;{{ category_name }}.&#8221;

        <ul v-if="posts && posts.length">
          <li v-for="post of posts">
            <p><strong>{{post.title}}</strong></p>
            <p>{{post.body}}</p>
          </li>
        </ul>

        <ul v-if="errors && errors.length">
          <li v-for="error of errors">
            {{error.message}}
          </li>
        </ul>

      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        category_name: 'Mon Ngon',
        posts: [],
        errors: []
      }
    },
    // Fetches posts when the component is created.
    created () {
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  }
</script>