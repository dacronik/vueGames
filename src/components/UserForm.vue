<template>
    <div>
        <div class="container">
            <h1>Para ver información ingresa tus datos</h1>
            <button class="btn btn-success" @click="obtenerNombres">Ingresar datos</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
        }
    },
    // computed: {},
    methods: {
        obtenerNombres(){
            let nombres= {
                nombre: prompt('Ingrese su nombre: '),
                apellido: prompt('Ingrese su apellido: '),
            }
            this.$emit('obtenerNombres',nombres)
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>