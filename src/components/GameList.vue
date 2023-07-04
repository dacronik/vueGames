<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="src" alt="Card image cap" style="object-fit: cover; height: 200px;">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rating: {{ rating }}</li>
        <li class="list-group-item">Release: {{ release }}</li>
        <li class="list-group-item">Update: {{ update }}</li>
      </ul>
      <div class="buttons">
        <button @click="redirectTo(redirect)" class="btn btn-primary">Opinar</button>
        <v-icon name="fa-heart" fill="red" @click="redirectAdmin(name)" class="icon-heart"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards-componet',
  props: {
    id:{
      type: Number,
      required: true
    },
    src:{
      type: String,
      required: true
    },
    name:{
      type: String,
      required: true
    },
    rating:{
      type: Number,
      required: true
    },
    release:{
      type: String,
      required: true
    },
    update:{
      type: String,
      required: true
    },
    redirect:{
      type: String,
      required: true
    },
    
  },
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
    redirectTo(redirect){
            this.$router.push(`/Opiniones/${redirect}`)
        },
    redirectAdmin(name){
      this.$emit('viewAdmin', name);
      
    },
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
  
  .buttons{
    display: flex;
    padding: 20px;
    align-items: center;
    gap: 18px;
  }
  .icon-heart{
    cursor: pointer;
  }
</style>