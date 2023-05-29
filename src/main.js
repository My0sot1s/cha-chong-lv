import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NoticeBar,
  Divider,
  DropdownMenu,
  DropdownItem,
  List,
  Tag,
  Cell,
  CellGroup,
  Circle
} from 'vant'

Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(NoticeBar)
Vue.use(Divider)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(List)
Vue.use(Tag)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Circle)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
