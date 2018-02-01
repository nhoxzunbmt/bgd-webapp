<template>
    <v-app light>
        <Nav />
        <v-content>
            <v-container>
                <nuxt/>
            </v-container>
        </v-content>
        <!--<v-navigation-drawer-->
                <!--temporary-->
                <!--:right="right"-->
                <!--v-model="rightDrawer"-->
                <!--fixed-->
        <!--&gt;-->
            <!--<v-list>-->
                <!--<v-list-tile @click.native="right = !right">-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon light>compare_arrows</v-icon>-->
                    <!--</v-list-tile-action>-->
                    <!--<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>-->
                <!--</v-list-tile>-->
            <!--</v-list>-->
        <!--</v-navigation-drawer>-->

        <v-footer :fixed="fixed" app>
            <span>&copy; 2017. Make by Lợi Trần</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Nav from '../components/Nav.vue'
    import axios from 'axios'

    export default {
      components: {
        Nav
      },
      async asyncData () {
        axios.get(`http://local.bepgiadinh.com/wp-json/wp/v2/categories`)
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