<template>
    <div v-if="posts && posts.length" >
        <v-flex xs12 sm6 md3 v-for="post of posts" :key="post.id">
            <v-card>
                <div v-if="post.better_featured_image && post.better_featured_image.media_details.sizes.featured.source_url">
                    <v-card-media :src="post.better_featured_image.media_details.sizes.featured.source_url" height="200px">
                    </v-card-media>
                </div>
                <v-card-title primary-title>
                    <div>
                        <nuxt-link :to="getLink(post)">
                            <h3 class="headline mb-0" v-html="post.title.rendered"></h3>
                        </nuxt-link>
                        <div v-html="post.excerpt.rendered"></div>
                    </div>
                </v-card-title>

            </v-card>
        </v-flex>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          posts: []
        }
      }
    }
</script>