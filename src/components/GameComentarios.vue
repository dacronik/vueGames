<template>
    <div v-for="(comentario,index) in comentarios" :key="index">
        <div class="acordeon" id="{{ index + 1 }}">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Opinión creada por: {{ comentario.nombre }}
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Opinión:</strong> {{ comentario.opinion }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button class="btn btn-danger" @click="$emit('deleteOpinion', index)">Eliminar</button>
                <button class="btn btn-warning" @click="editarOpinion(index)">Editar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'game-comentario',
    props: {
        comentarios:{
            type: Array,
            required: true
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        eliminarOpinion(index){
            this.$emit('deleteOpinion', index)
        },
        editarOpinion(index){
            this.$emit('editarComentario', index)
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

    .acordeon{
        margin-bottom: 20px;
    }
    .buttons{
        display: flex;
        gap: 2.1875rem;
    }
</style>