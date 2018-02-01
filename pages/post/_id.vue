<template>
    <v-layout>
        <v-flex text-xs-center>
            <img src="/v.png" alt="Vuetify.js" class="mb-5">
            <blockquote class="blockquote">
                &#8220;{{ post.title.rendered }}.&#8221;

                <img :src="post.better_featured_image.media_details.sizes.featured.source_url" :alt="post.title.rendered">

                <div v-html="post.content.rendered">
                </div>

                <footer>
                    <small>
                        <em>&mdash;John Johnson</em>
                    </small>
                </footer>
            </blockquote>
        </v-flex>
    </v-layout>
</template>
<script>
    import axios from 'axios'
    export default {
      async asyncData ({ req, params }) {
        return axios.get(`${process.env.baseUrlApi}/wp-json/wp/v2/posts/${params.id}`)
          .then((res) => {
            return { post: res.data }
          })
      },
      data () {
        return {
          category_name: 'Mon Ngon',
          posts: [],
          errors: []
        }
      },
      // Fetches posts when the component is created.
      created () {

      },
      methods: {
        getLink: function (post) {
          let postUrl = post.link.replace('http://local.bepgiadinh.com', 'category')
          postUrl = 'post/' + post.id
          return postUrl
        }
      }
    }
</script>