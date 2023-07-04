<template>
    <div class="container">
        <h1>Escribe tu opinion para el juego: {{ name }}</h1>
        <form-cometario @comentario="agregarComentario" :editarComentario="editarComentario" @actualizarComentario="actualizarComentario"/>
        <div>
            <div class="alert alert-danger" role="alert" v-if="comentarios == 0">
                <p>no existen opiniones para mostrar</p>
            </div>
            <div v-else>
                <game-comentario :comentarios="comentarios" @deleteOpinion="deleteComentario" @editarComentario="editar"/>
            </div>
        </div>
    </div>
</template>

<script>
import FormComentarios from '@/components/FormComentarios.vue'
import GameComentarios from '@/components/GameComentarios.vue'

export default {
    name: 'Comentarios',
    props: ['name'],
    data: function(){
        return {
            comentarios:[],
            editarComentario:null,
        }
    },
    // computed: {},
    methods: {
        agregarComentario(comentario){
            this.comentarios.push(comentario)
            console.log(this.comentarios)
        },
        deleteComentario(id){
            this.comentarios.splice(id, 1);
        },
        editar(index){
            let opinion = {
                index: index,
                opinion: this.comentarios[index]
            }
            this.editarComentario = opinion
            
        },
        actualizarComentario(comentario){
            this.comentarios.splice(comentario.index, 1, {
                nombre: comentario.nombre,
                opinion: comentario.opinion,
            })
        }
    },
    // watch: {},
    components: {
        'form-cometario': FormComentarios,
        'game-comentario':GameComentarios
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>