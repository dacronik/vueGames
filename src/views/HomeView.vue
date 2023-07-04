<template>
  <div class="container game-grid">
    <div class="" v-for="(juego,index) in juegos" :key="index">
      <game-list 
        :id="index" 
        :name="juego.name" 
        :src="juego.background_image" 
        :rating="juego.rating" 
        :release="juego.released" 
        :update="juego.updated"
        :redirect="juego.name"
        @viewAdmin="adminView(juego.name)">
      </game-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GameList from "@/components/GameList.vue";
export default {
  
  name: 'home-view',
  // props: {},
  data: function(){
    return {
      key: '1508f707af624718bd051c1d9ed7e251',
      juegos:[],
    }
  },
  // computed: {},
  methods: {
    async consulta(){
      try{
        const response = await axios.get(`https://api.rawg.io/api/games?key=${this.key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`);
        this.juegos= response.data.results
      }
      catch(error){
        console.log(error)
      }
    },

    adminView(name){
      //alert(name);
      this.$router.push({name: 'administracion', params: {id: name}});
    }

    
  },
  // watch: {},
  components: {
    'game-list': GameList
  },
  // mixins: [],
  // filters: {},
  //-- Lifecycle Methods
  created(){
    return this.consulta();
  }
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  .game-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    gap: 18px;
  }
</style>
