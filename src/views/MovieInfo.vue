<template>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
    </svg>
    <div id="movieInfo">
        <img id="poster" v-bind:src="movie.image" />
        <span id="details">
            <h2>{{ movie.title }}</h2>
            <span>
                <p id="year">{{ movie.year }}</p>
                <p id="rating">{{ movie.imDbRating }}/10</p>
                <p id="ratingCount">{{ movie.imDbRatingCount }} reviews</p>
            </span>
            <img v-bind:src="movie.imageOne" />
        </span>
    </div>
    <span id="images">
        <img v-bind:src="movie.imageTwo" />
        <img v-bind:src="movie.imageThree" />
    </span>
    <Cast :cast="movie.cast" />
    <Reviews :reviews="movie.reviews" />
</template>

<script>
import Cast from '@/components/MovieCast.vue'
import Reviews from '@/components/MovieReviews.vue'

export default {
    name: 'MovieInfo',
    components: {
        Cast,
        Reviews
    },
    data() {
        return {
            movie: this.$store.state.movie
        }
    },
    mounted() {
        fetch(`https://imdb-api.com/en/API/Images/pk_tkset0jkjlt6y6xiz/${this.movie.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.movie.imageOne = data.items[0].image;
                this.movie.imageTwo = data.items[1].image;
                this.movie.imageThree = data.items[2].image;
            })
        fetch(`https://imdb-api.com/en/API/FullCast/pk_tkset0jkjlt6y6xiz/${this.movie.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let cast = [];
                for (const member of data.actors) {
                    cast.push(member);
                }
                for (const job of data.others) {
                    for (const member of job.items) {
                        cast.push(member);
                    }
                }
                for (const member of data.writers.items) {
                    cast.unshift(member);
                }
                for (const member of data.directors.items) {
                    cast.shift(member);
                }
                this.movie.cast = cast;
            })
        fetch(`https://imdb-api.com/en/API/Reviews/pk_tkset0jkjlt6y6xiz/${this.movie.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.movie.reviews = data.items;
            })
    }
}
</script>

<style scoped>
#images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1100px;
    margin: auto;
}

#images img {
    max-width: calc(50% - 20px);
    max-height: calc(50vh - 20px);
    margin: 10px;
    object-fit: cover;
}

svg {
    position: absolute;
    height: 70vw;
    fill: #fbecab;
    top: -20vw;
    left: -5vw;
    z-index: -1;
}

#movieInfo {
    display: flex;
    justify-content: space-evenly;
    max-width: 900px;
    margin: auto;
}

#poster {
    height: 60vh;
    float: left;
    margin: 20px 10px;
}

#details {
    text-align: center;
    padding: 10px;
    height: 60vh;
    position: relative;
    min-width: calc(100% - 60vh - 20px);
    color: white;
    text-shadow: 1px 1px 5px black;
}

#details h1 {
    margin: 80px 0;
}

#details span {
    display: flex;
    justify-content: space-evenly;
}

#details img {
    max-width: 400px;
    max-height: 40vh    ;
    position: relative;
    top: 30px;
    left: 0px;
}

@media only screen and (max-width: 850px) {
    svg {
        height: 185vw;
        left: -70vw;
    }

    #movieInfo {
        flex-direction: column-reverse;
    }

    #details img {
        max-width: 90vw;
        max-height: 350px;
    }
}
</style>