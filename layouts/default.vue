<template>
    <v-app light>
        <v-navigation-drawer
                :mini-variant.sync="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                fixed
                app
        >
            <v-list>
                <v-list-tile
                        router
                        :to="item.slug"
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
        <v-content>
            <v-container>
                <nuxt/>
            </v-container>
        </v-content>
        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
        >
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon light>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
      import axios from 'axios'
export default {
  async asyncData () {
    console.log('asyncData')
    return axios.get(`http://local.bepgiadinh.com/wp-json/wp/v2/categories`)
            .then((res) => {
              console.log(res.data)
              return {
                categories: res.data,
                title: 'BGD VIP',
                logo_src: 'http://www.marry.vn/wp-content/plugins/ringier-v1/app/Views/_assets/images/logo-noel.png'
              }
            })
  },
        data () {
          return {
            clipped: false,
            drawer: false,
            fixed: false,
            // categories: [
            //   {icon: 'apps', name: 'Welcome', slug: '/'},
            //   {icon: 'bubble_chart', name: 'Inspire', slug: '/inspire'},
            //   {icon: 'bubble_chart', name: 'About', slug: '/about'},
            //   {icon: 'bubble_chart', name: 'Category', slug: '/category'}
            // ],
            categories: [],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'BGD',
            logo_src: 'https://www.bepgiadinh.com/logo-noel.png'
          }
        }

}
</script>
<style>
    #vwp-logo {
        max-width: 350px;
        max-height: 3rem;
    }

    #app-header .nav-menu > span > a {
        vertical-align: middle;
    }
</style>