<template>
  <div id="app">
    <log-in />
    <registo-usu />
    <tabla-prods :titulo="titulo2" />
    <info-prod :producto="listaProductos[0]" />
    <carrito-compras :titulo="titulo" :miarray="listaProductos" />
  </div>
</template>

<script>
import CarritoCompras from './components/CarritoCompras.vue'
import InfoProd from './components/InfoProd.vue'
import LogIn from './components/LogIn.vue'
import RegistoUsu from './components/RegistoUsu.vue'
import TablaProds from './components/TablaProds.vue'

export default {
  name: 'App',
  components: {
    LogIn,
    RegistoUsu,
    TablaProds,
    InfoProd,
    CarritoCompras
  },
  data(){
    return{
      listaProductos:[
        {id:1, nombre:"Mouse DX110", marca:"GENIUS", precio:699, imagen:"https://driverspc.cl/wp-content/uploads/2017/10/Mouse-Genius-DX-110-Azul-180x180.jpg",info:"Posee conector USB"},
        {id:2, nombre:"Teclado K600", marca:"LOGITECH", precio:3900, imagen:"https://s3-sa-east-1.amazonaws.com/saasargentina/0wEqcesuQhUaM6bxvhmr/miniatura",info:"Wireless"},
        {id:3, nombre:"Aro de Luz led", marca:"NETMAK", precio:4000,imagen:"https://images-na.ssl-images-amazon.com/images/I/51KV5Mj1tNL._AC_UL160_SR160,160_.jpg",info:"3 tonos de luz"},
        {id:4, nombre:"Joystick PS4", marca:"SONY", precio:17000, imagen:"https://i5.walmartimages.com/asr/353d5b8c-b377-446c-bcbe-a762708a6bd5_1.abb35ef7d94acfb02f5660e9fb32aed3.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff",info:"Wireless negro"}
      ],
      titulo:"Productos en stock",
      titulo2:"Productos agregados al carro"
    }
  }
}
</script>
