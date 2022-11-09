<template>
  <button id="rank" @click="sortRank()">Sort by Rank</button>
  <button id="alphabet" @click="sortAlphabetical()">Sort A-Z</button>
  <div id="sliderBar" @click="(event) => jumpScroll(event)">
    <span id="slider"></span>
  </div>
  <div id="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id" @click="routeMovie(movie)">
      <span class="details">
        <h2 class="rank">{{ movie.rank }}</h2>
        <h2 class="title">{{ movie.title }}</h2>
        <p class="rating">{{ movie.imDbRating }}/10</p>
      </span>
      <img class="image" v-bind:src="movie.image" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MoviesList',
  computed: {
    ...mapState({
      movies: state => state.movies
    })
  },
  methods: {
    routeMovie(movie) {
      this.$store.commit('setMovie', movie)
      this.$router.push({ name: 'movie' })
    },
    sortRank() {
      this.movies.sort((a, b) => {
        return a.rank - b.rank
      })
    },
    sortAlphabetical() {
      this.movies.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        } else if (a.title > b.title) {
          return 1
        } else {
          return 0
        }
      })
    },
    jumpScroll(event) {
      const barY = event.clientY - 50;
      document.getElementById('slider').style.top = barY + 'px';
      const height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
      const scrollY = (barY / 500) * height;
      window.scrollTo(0, scrollY);
    },
    handleScroll() {
      const height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
      const scrollY = window.scrollY;
      const barY = (scrollY / height) * 500;
      document.getElementById('slider').style.top = barY + 'px';
    }
  },
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    fetch(`https://imdb-api.com/en/API/Top250Movies/pk_tkset0jkjlt6y6xiz`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.movies = data.items
      }).catch(err => {
        console.log(err);
        alert('Error: ' + err.message);
      })

    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
#sliderBar {
  position: fixed;
  display: block;
  top: 50px;
  left: 0;
  width: 3vw;
  max-width: 20px;
  height: 500px;
  background: repeating-linear-gradient(0deg,
      #555555,
      #ffffff 1px,
      #ffffff 5px,
      #555555 5px);
  z-index: 3;
  cursor: pointer;
}

#slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 3vw;
  max-width: 20px;
  height: 5px;
  background-color: #555555;
  z-index: 4;
}

#slider:hover {
  cursor: pointer;
  max-width: 30px;
  width: 30px;
  height: 10px;
  transition: width 0.2s, height 0.2s;
}

#rank,
#alphabet {
  position: fixed;
  bottom: 80px;
  left: 0;
  width: 70px;
  height: 40px;
  background-color: #fece22;
  color: black;
  border: none;
  border-radius: 0 100px 100px 0;
  z-index: 5;
  cursor: pointer;
}

#alphabet {
  bottom: 20px;
}

#movies {
  width: calc(100vw - 100px);
  margin-left: 10vw;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  display: block;
  position: relative;
}

.movie {
  position: relative;
  min-height: 400px;
  width: 100%;
}

.movie:nth-of-type(odd) {
  background-color: #222222;
}

.details {
  position: absolute;
  text-align: center;
  top: 20px;
  left: 20px;
  width: calc(100% - 300px);
}

.image {
  position: absolute;
  text-align: center;
  top: 20px;
  right: 20px;
  height: 360px;
}

@media only screen and (max-width: 850px) {
  #movies {
    width: calc(100vw - 60px);
  }

  .movie {
    padding: 10px 0;
  }

  .details, .image {
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>