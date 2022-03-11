<template>
    <section class="inner-block-grande">
        <h4>{{titulo}}</h4>
        <article class="row card-deck">
            <div class="col-sm-3 card" v-for="item of miarray" :key="item.id">
                <img class="card-img-top" :src="item.imagen" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">{{item.nombre}}</h6>
                    <p class="card-text">Marca: {{item.marca}}</p>
                    <p class="card-text">Precio $ {{item.precio | filtroDecimal}}</p>
                    <button class="btn btn-dark" @click="agregar(item)">Comprar</button>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    export default ({
        name:'CarritoCompras',
        data(){
            return{
                agregados:JSON.parse(localStorage.getItem("carro"))||[]
            }
        },
        props:{
            titulo: String,
            miarray: Array
        },
        mounted(){
            console.info(`mis props son ${JSON.stringify(this.$props)}`);
        },
        methods:{
            agregar(item){
                this.agregados.push(item);
                console.table(this.agregados);
                localStorage.setItem("carro",JSON.stringify(this.agregados));
            }
        }
    })
</script>

// no utilizo estilos aqui porque estoy usando bootstrap