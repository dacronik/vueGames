<template>
    <div>
        <div v-if="nombre == ''">
            <user-form @obtenerNombres="obtenerDataUser" />
        </div>
        <div v-else class="usuario-datos col-sm-2">
            <div class="usuario">
                <img src="../assets/img/usuario.png" alt="">
                <h2>Bienvenid@</h2>
                <h3>{{ nombre }} {{ apellido }}</h3>
            </div>
            <div class="cuenta container">
                <h1>Resumen de tu cuenta</h1>
                <h4>le diste me gusta al juego: <strong>{{ gameName }}</strong></h4>
                <div class="card">
                    <h5 class="card-title">¿Deseas comprar coins para este juego?</h5>
                    <div class="card-body text-center">
                        <button class="btn btn-warning" @click="counter"><v-icon name="gi-two-coins" fill="black"/> Agregar coins</button>
                        <hr>
                        <h5 class="text-start">Cantidad de coins comprados</h5>
                        <div class="progress">
                            <div class="progress-bar" 
                                role="progressbar" aria-label="Example with label" 
                                :style="{'width': contador*2 +'%'}" 
                                :class="color" 
                                aria-valuemin="0" 
                                aria-valuemax="50">$ {{ contador }}
                            </div>
                        </div>
                        <div v-if="contador == 50">
                            <p>Llegaste al maximo de tu credito</p>
                        </div>
                    </div>
                </div>
                <div class="card-premios col-12 mt-4 d-flex">
                    <card 
                    title="% de finalizacion del juego" 
                    clase="card col-4 bg-warning" 
                    subtitle="17%" 
                    :icon="{name:'fa-star-half', fill:'black', scale:'1.5'}"
                    />
                    <card 
                    title="Logros en el juego" 
                    clase="card col-4 bg-success" 
                    subtitle="116" 
                    :icon="{name:'bi-trophy-fill', fill:'white', scale:'1.5'}"
                    />
                    <card 
                    title="Recompensas" 
                    clase="card col-4 bg-info" 
                    subtitle="200" 
                    :icon="{name:'fa-medal', fill:'black', scale:'1.5'}
                    "/>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import Card from '@/components/Card.vue'
export default {
    name: 'administracion-comp',
    props: ['name'],
    data: function(){
        return {
            nombre:'',
            apellido:'',
            contador: 0,
        }
    },
    computed: {
        color(){
            return{
                'bg-success' : this.contador <= 20,
                'bg-warning' : this.contador > 20,
                'bg-danger' : this.contador >= 30
            }
        },
        gameName(){
            return this.$route.params.id
        }
    },
    methods: {
        obtenerDataUser(nombres){
            this.nombre = nombres.nombre;
            this.apellido = nombres.apellido;
        },
        counter(){
            if(this.contador <50){
                this.contador++
            }
        }
    },
    // watch: {},
    components: {
        'user-form': UserForm,
        'card': Card
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

    .usuario-datos{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .usuario{
        background: black;
        color: white;
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 92vh;
        padding-top: 25px;
    }
    .usuario img{
        width: 20%;
        background: #ccc;
        border-radius: 50%;
    }
</style>