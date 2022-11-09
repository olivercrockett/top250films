<template>
  <HomepageHeader />
  <div class="home">
    <h2>Top 250 Films!</h2>
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
