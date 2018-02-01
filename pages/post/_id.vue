<template>
    <v-layout>
        <v-flex>
                <h1 v-html="post.title.rendered" class="post-title"></h1>
                <!--<img :src="post.better_featured_image.media_details.sizes.featured.source_url" :alt="post.title.rendered">-->

                <div v-html="post.content.rendered" class="post-content">
                </div>
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
<style>
    .post-title{
        text-align: center;
        margin-bottom: 20px;
    }
    .post-content{
        font-size: 18px;
    }
    .post-content img{
        max-width: 100%;
        height: auto;
    }
    .post-content ul{
        margin-left: 25px;
    }
</style>