<template>

  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    <v-flex v-if="posts && posts.length" xs12 sm6 md3 v-for="post of posts" :key="post.id">
      <v-card>
        <div v-if="post.better_featured_image && post.better_featured_image.media_details.sizes.featured.source_url">
          <v-card-media :src="post.better_featured_image.media_details.sizes.featured.source_url" height="200px">
          </v-card-media>
        </div>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-html="post.title.rendered"></h3>
            <div v-html="post.excerpt.rendered"></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>

  </v-layout>
  </v-container>


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
      axios.get(`http://local.bepgiadinh.com/wp-json/wp/v2/posts?page=1&fields=id,title,slug,date,better_featured_image,excerpt`)
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