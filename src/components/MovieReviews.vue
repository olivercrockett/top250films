<template>
  <div id="reviews">
    <h3>Reviews</h3>
    <div v-for="review in reviews" class="review" :key="review.id">
      <h3>{{ review.title }}</h3>
      <p v-if="review.rate">{{ review.rate }}/10</p>
      <i v-else>No rating</i>
      <p class="reviewContent" v-if="review.content !== ''">{{ review.content }}</p>
      <i class="reviewContent" v-else>No review</i>
      <p>-- {{ review.username }}</p>
      <p>{{ review.helpful }}</p>
      <b v-if="review.warningSpoilers" class="warning">Warning: Spoilers</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieReviews',
  props: {
    reviews: Array
  }
}
</script>

<style scoped>
#reviews {
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
  margin-top: 100px;
}

.review {
  position: relative;
  min-height: 400px;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  border: none;
  color: white;
}

.review:nth-of-type(odd) {
  background-color: #222222;
}

.reviewContent {
  max-height: 200px;
  overflow-y: auto;
}

.warning {
  color: #ff6962;
}
</style>