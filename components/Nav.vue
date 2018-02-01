<template>
<div>
  <v-navigation-drawer
          :mini-variant.sync="miniVariant"
          :clipped="clipped"
          :disable-route-watcher="disableRouteWatcher"
          v-model="drawer"
          fixed
          app
  >
    <v-list>
      <v-list-tile
              router
              :to="getLink(item)"
              :key="item.id"
              v-for="(item, i) in categories"
              exact
      >
        <!--<v-list-tile-action>-->
        <!--<v-icon v-html="item.icon"></v-icon>-->
        <!--</v-list-tile-action>-->
        <v-list-tile-content>
          <v-list-tile-title v-text="item.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar fixed app :clipped-left="clipped">
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    <router-link to="/" class="navbar-item">
      <img :src="logo_src" id="vwp-logo" :alt="title" exact/>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn
            icon
            @click.stop="rightDrawer = !rightDrawer"
    >
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
      data () {
        return {
          disableRouteWatcher: true,
          clipped: false,
          drawer: false,
          fixed: false,
          miniVariant: false,
          right: true,
          rightDrawer: false,
          title: 'BGD',
          logo_src: 'https://www.bepgiadinh.com/logo-noel.png',
          categories: {}
        }
      },
      created () {
        axios.get(`${process.env.baseUrlApi}/wp-json/wp/v2/categories`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.categories = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      methods: {
        getLink: function (cat) {
          let postUrl = '/category/' + cat.id
          return postUrl
        }
      }

    }
</script>