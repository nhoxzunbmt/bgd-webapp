<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex v-if="posts && posts.length" xs12 sm6 md3 v-for="post of posts" :key="post.id">
            <v-card>
                <div v-if="post.better_featured_image">
                    <v-card-media :src="getFeaturedImage(post)" height="200px">
                    </v-card-media>
                </div>
                <v-card-title primary-title>
                    <div>
                        <h3 class="post-title">
                        <nuxt-link :to="getLink(post)" v-html="post.title.rendered">
                        </nuxt-link>
                        </h3>
                        <div v-html="getExcerpt(post)"></div>
                    </div>
                </v-card-title>

            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
    import axios from 'axios'
    import _ from 'lodash'
    export default {
      async asyncData ({ req, params }) {
        return axios.get(`${process.env.baseUrlApi}/wp-json/wp/v2/posts/?page=1&categories=${params.id}`)
          .then((res) => {
            return { posts: res.data }
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
          postUrl = '/post/' + post.id
          return postUrl
        },
        getFeaturedImage: function (post) {
          if (_.isUndefined(post.better_featured_image.media_details.sizes.featured)) return ''
          return post.better_featured_image.media_details.sizes.featured.source_url
        },
        getExcerpt: function (post) {
          return _.truncate(post.excerpt.rendered, {
            'length': 120
          })
        }
      }
    }
</script>
<style>
    .post-title a{
        text-align: center;
        font-size: 18px;
        color: #a92929;
        text-decoration: none;
        margin-bottom: 10px;
        display: block;
    }
</style>