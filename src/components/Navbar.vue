<template>
  <div>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a @click="$router.push('/')">Sailor</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto"><img src="/assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" :class="[!state.mobileOpen ? 'navbar' : 'navbar navbar-mobile']">
            <ul>
              <li><RouterLink to="/">Home</RouterLink></li>

              <li class="dropdown"><RouterLink to="/about">About</RouterLink></li>
              <li class="dropdown"><RouterLink to="/track">Track</RouterLink></li>

              <li><RouterLink to="/contact" class="">Contact</RouterLink></li>
              <li><RouterLink to="/login" class="">Login</RouterLink></li>
              <li><RouterLink to="/track" class="getstarted">Get Started</RouterLink></li>
            </ul>
            <i @click="!state.mobileOpen ? state.mobileOpen = true : state.mobileOpen = false" :class="[!state.mobileOpen ? 'bi bi-list mobile-nav-toggle' : 'bi bi-x mobile-nav-toggle' ]"></i>
          </nav><!-- .navbar -->

        </div>
      </header><!-- End Header -->
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const state = reactive({
  mobileOpen: false
})
</script>

<style lang="scss" scoped>

</style>