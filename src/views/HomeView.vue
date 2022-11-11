<template>
  <HomepageHeader />
  <div class="home">
    <h1 id="pageTitle">Top 250 Films!</h1>
    <MoviesList />
  </div>
</template>

<script>
import HomepageHeader from '@/components/HomepageHeader.vue'
import MoviesList from '@/components/MoviesList.vue'

export default {
  name: 'HomeView',
  components: {
    HomepageHeader,
    MoviesList
  }
}
</script>

<style>
#pageTitle {
  background: linear-gradient(to right, #ff8302, #cdef10);
  background-clip: text; 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  text-align: center;
  padding: 50px 0;
}
</style>