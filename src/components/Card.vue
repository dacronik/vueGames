<template>
    <div :class="clase">
        <div class="card-title m-2">
            <h5 class="fw-semibold text-center">{{title}}</h5>
        </div>
        <hr>
        <div class="card-body d-flex justify-content-center">
            <h4>{{ subtitle }}</h4><v-icon :name="icon.name" :fill="icon.fill" :scale="icon.scale"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        title:{
            type: String,
            required: true,
        },
        subtitle:{
            type: String,
            required: true,
        },
        clase:{
            type: String,
            required: true,
        },
        icon:{
            type: Object,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
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