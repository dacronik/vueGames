<template>
    <form>
        <div class="mb-3">
            <label for="" class="form-label">Nombre:</label>
            <input type="text" class="form-control" v-model="nombre" placeholder="Nombre">
            <div class="mb-3">
                <label for="" class="form-label">Opinión:</label>
                <textarea class="form-control" v-model="opinion" rows="3" placeholder="Tú opinion debe ir aqui"></textarea>
            </div>
            <button type="submit" class="btn btn-info" v-if="edit==false"  @click.prevent="agregarComentario">Agregar</button>
            <button type="submit" class="btn btn-info" v-else  @click.prevent="actualizarOpinion">Actualizar</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        editarComentario:{
            type: Object,
            default: null,
        }
    },
    data: function(){
        return {
            nombre: '',
            opinion: '',
            edit: false,
            indexEdit: null,
        }
    },
    //computed: {},
    methods: {
        agregarComentario(){
            const comentario ={
                nombre:this.nombre,
                opinion:this.opinion
            };
            this.$emit('comentario',comentario);
            // limpiar datos del formulario
            this.nombre= '';
            this.opinion='';
        },
        actualizarOpinion(){
            const comentario ={
                nombre:this.nombre,
                opinion:this.opinion,
                index:this.indexEdit,
            };
            this.$emit('actualizarComentario',comentario);
            // limpiar datos del formulario
            this.nombre= '';
            this.opinion='';
            this.edit= false;
        }
    },
    watch: {
        editarComentario(newValue){
            console.log(newValue)
            this.nombre = newValue.opinion.nombre;
            this.opinion = newValue.opinion.opinion;
            this.edit= true;
            this.indexEdit = newValue.index
        }
    },
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>