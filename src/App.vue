<template>
  <div id="app">
    <nav>
      <ul class="nav justify-content-between">
        <li class="nav-item">
            <a class="nav-link disable"><v-icon name="fa-xbox" fill="white"/>Games opinion</a>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/"><v-icon name="hi-solid-home" /> Home</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
