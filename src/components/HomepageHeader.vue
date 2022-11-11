<template>
    <div id="header" v-if="this.banner == true">
        <a v-if="this.banner == true" @click="toggleBanner" id="bannerToggle">▲</a>
        <br /><i>Coming soon...</i>
        <div id="headerPost">
            <img v-bind:src="movie.image" />
            <h4>{{ movie.title }}</h4>
            <p>{{ movie.plot }}</p>
            <iframe v-if="movie.trailer" v-bind:src="movie.trailer + '?autoplay=false&width=240'" height="180" width="300"></iframe>
            <div v-else id="noTrailer">
                <p>No trailer available</p>
            </div>
        </div>
    </div>
    <a v-if="this.banner == false" @click="toggleBanner" id="bannerToggleCollapsed">▼</a>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'HomepageHeader',
    computed: {
        ...mapState({
            banner: state => state.banner
        })
    },
    data() {
        return {
            movie: {},
        }
    },
    methods: {
        toggleBanner() {
            this.$store.commit('setBanner')
        }
    },
    mounted() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        fetch(`https://imdb-api.com/en/API/ComingSoon/pk_tkset0jkjlt6y6xiz`)
            .then(response => response.json())
            .then(data => data.items[getRandomInt(1, data.items.length)])
            .then(data => {
                this.movie = data
                fetch(`https://imdb-api.com/en/API/Trailer/pk_tkset0jkjlt6y6xiz/${data.id}`)
                    .then(response => response.json())
                    .then(data => {
                        this.movie.trailer = data.linkEmbed
                        this.movie.plot = data.videoDescription
                    })
            })
    }
}
</script>

<style scoped>
#header {
    position: relative;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    max-width: 1000px;
    margin: auto;
    height: 300px;
    background-color: #fbecab;
    overflow: hidden;
    color: #000000;
}

#headerPost {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#bannerToggle,
#bannerToggleCollapsed {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: black;
    font-size: 15px;
    height: 40px;
    width: 40px;
    padding-top: 10px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0 10px 0 0;
    z-index: 2;
    color: white;
    cursor: pointer;
}

#bannerToggleCollapsed {
    top: 0;
}

.collapsed {
    height: 0px;
}

img {
    height: 200px;
    max-width: 150px;
    position: absolute;
    top: 50px;
    left: 5vw;
}

iframe {
    height: 180px;
    position: absolute;
    top: 60px;
    right: 5vw;
}

#noTrailer {
    height: 180px;
    position: absolute;
    top: 60px;
    right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #222222;
}

h4,
p {
    position: absolute;
    top: 50px;
    left: 240px;
    width: calc(80vw - 450px);
    max-width: 350px;
    max-height: 50px;
    overflow-y: auto;
}

p {
    height: 100px;
    top: 160px;
}

@media only screen and (max-width: 850px) {
    #header {
        display: block;
        height: 750px;
    }

    #headerPost {
        flex-direction: column;
    }

    img,
    iframe,
    #noTrailer,
    h4,
    p {
        position: relative;
    }

    img {
        top: 20px;
        left: 0;
    }

    h4, p {
        top: 0;
        left: 0;
        padding: 20px;
        width: calc(100% - 40px);
    }

    p {
        max-height: 175px;
        top: -50px;
        left: 0;
    }

    iframe {
        right: 0;
        top: -50px;
    }

    #noTrailer {
        top: -50px;
        right: 0;
    }
}
</style>