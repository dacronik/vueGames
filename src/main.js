import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidHome, FaXbox, FaHeart, GiTwoCoins, FaStarHalf,BiTrophyFill,FaMedal} from "oh-vue-icons/icons";

addIcons(HiSolidHome, FaXbox, FaHeart, GiTwoCoins, FaStarHalf, BiTrophyFill,FaMedal);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router)
app.mount('#app')
