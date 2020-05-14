

<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-end">
      <router-link to="/" class="navbar-item" active-class="is-current">Home</router-link> 
      <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>
      <router-link to="/heartrate" class="navbar-item" active-class="is-current">Heart Rate</router-link>
      <router-link to="/jog" class="navbar-item" active-class="is-current">Jog</router-link>
      <router-link to="/run" class="navbar-item" active-class="is-current">Run</router-link>
      <router-link to="/SignIn" class="navbar-item" active-class="is-current">Sign In</router-link>
      <router-link to="/Search" class="navbar-item" active-class="is-current">Search</router-link>
    </div>
    <div class="navbar-start">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-success" href="/SignIn">
         SignIn
          </a>
        </div>
      </div>
    </div>
  </div>
  
</nav>
</template>

<script>
export default {
data: ()=>({
  isOpen: false 
 })
}
</script>

<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: blue($color: #000000);
      }
    }
  }
</style>