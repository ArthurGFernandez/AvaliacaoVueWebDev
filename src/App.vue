<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/register" class="nav-link">Register</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 100%;
}

.nav-link {
  margin: 0 10px;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

.router-link-exact-active {
  font-weight: bold;
  color: #007BFF;
}
</style>
