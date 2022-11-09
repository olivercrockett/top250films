<template>
  <h3 style="margin-top: 100px">Cast</h3>
  <div id="cast">
    <div class="cast" v-for="member in cast" :key="member.id">
      <h3>{{ member.name }}</h3>
      <p v-if="member.description">{{ member.description }}</p>
      <img v-else v-bind:src="member.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCast',
  props: {
    cast: Array
  }
}
</script>

<style scoped>
#cast {
  display: flex;
  flex-direction: row;
  height: 300px;
  background-color: #222222;
  overflow-x: auto;
}

.cast {
  margin: 10px;
  padding: 20px 40px;
  border: 1px solid #e9e9e9;
}

.cast img {
  height: 130px;
  max-width: 100px;
}

.cast p {
  color: white;
}
</style>