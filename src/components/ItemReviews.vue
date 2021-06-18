<template>
  <div class="reviews">
    <base-alert-box
      v-if="show_alert"
      @closeBox="show_alert = false"
      :color="alert_color"
      :msg="review_alert"
    />
    <vee-form
      v-if="isLoggedIn"
      class="review__form"
      :validation-schema="schema"
      @submit="addReview"
    >
      <div class="rating">
        <label>Rating (1-5): </label>
        <vee-field
          type="number"
          name="rating"
          class="review__rating"
        ></vee-field>
      </div>
      <error-message class="error" name="rating"></error-message>
      <vee-field
        as="textarea"
        cols="10"
        rows="10"
        class="review__text"
        placeholder="Type Review here"
        name="review"
      >
      </vee-field>
      <error-message class="error" name="review" />
      <base-button
        :disabled="comment_in_submission"
        pt="15"
        pb="15"
        pr="10"
        pl="10"
        width="1"
        mt="10"
        mb="10"
        :secondary="true"
        type="submit"
        >Submit Review</base-button
      >
    </vee-form>
    <p>{{ reviews.length }} Review<span v-if="reviews.length !== 1">s</span></p>
    <p class="review_content" v-for="review in sortedReviews" :key="review.id">
      {{ review.rating }} - {{ review.review }}
      <span>By {{ review.name }}</span>
      <span>Posted on {{ review.datePosted }}</span>
    </p>
  </div>
</template>

<script>
import { auth, reviewsCollection } from "@/includes/firebase";
import { mapState } from "vuex";

export default {
  name: "Itemreviews",
  data() {
    return {
      schema: {
        review: "required|min:3",
        rating: "required|integer|min_value:1|max_value:5",
      },
      show_alert: false,
      review_alert: "",
      alert_color: "rgba(5, 116, 33, 0.7)",
      comment_in_submission: false,
      reviews: [],
      userAlreadyReviewed: false,
    };
  },
  methods: {
    async addReview(values, { resetForm }) {
      this.comment_in_submission = true;
      this.show_alert = true;
      this.alert_color = "rgba(5, 116, 33, 0.7)";
      this.review_alert = "Please Wait! Your review is being submitted";

      if (this.userAlreadyReviewed) {
        this.alert_color = "rgb(223, 7, 7)";
        this.review_alert =
          "You have already written a review, edit/delete your review if you want to write a new one";
        this.comment_in_submission = false;

        resetForm();

        return;
      }

      const review = {
        review: values.review,
        rating: values.rating,
        datePosted: new Date().toString(),
        itemId: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      };

      await reviewsCollection.add(review);

      this.getReviews();

      this.comment_in_submission = false;
      this.review_alert = "Your review has been added";

      resetForm();
    },
    async getReviews() {
      const snapshots = await reviewsCollection
        .where("itemId", "==", this.$route.params.id)
        .get();

      this.reviews = [];

      snapshots.forEach((doc) => {
        if (doc.data().name === auth.currentUser.displayName) {
          this.userAlreadyReviewed = true;
        }
        this.reviews.push({ ...doc.data(), id: doc.id });
      });
    },
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.userLoggedIn,
    }),
    sortedReviews() {
      return this.reviews.slice().sort((reviewA, reviewB) => {
        return new Date(reviewB.datePosted) - new Date(reviewA.datePosted);
      });
    },
  },
  async created() {
    this.getReviews();
  },
};
</script>

<style scoped>
.review__form {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 75%;
}

.rating {
  margin-bottom: 15px;
}

.review__text {
  resize: none;
  height: 55px;
  outline-width: 0;
}
</style>