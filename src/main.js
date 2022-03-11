import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

Vue.filter('filtroDecimal',function(precio){
  return precio.toFixed(2);
})

new Vue({
  render: h => h(App),
}).$mount('#app')
