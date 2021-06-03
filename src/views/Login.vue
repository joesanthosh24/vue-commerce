<template>
  <app-container>
    <vee-form @submit.prevent="submit" :validation-schema="schema">
      <div class="input-container">
        <label for="email">Email: </label>
        <vee-field id="email" type="email" name="email" />
      </div>
      <error-message class="error" name="email" />
      <div class="input-container">
        <label for="password">Password: </label>
        <vee-field id="password" type="password" name="password" />
      </div>
      <error-message class="error" name="password" />
      <app-button
        type="submit"
        width="3"
        pt="10"
        pb="10"
        :primary="true"
        br="30"
        >Login</app-button
      >
    </vee-form>
  </app-container>
</template>

<script>
import Container from "../components/Container.vue";
import Button from "../components/Button.vue";

export default {
  name: "Login",
  components: {
    appContainer: Container,
    appButton: Button,
  },
  data() {
    return {
      schema: {
        email: "required|email",
        password: "required|min:3|max:100",
      },
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style scoped>
form {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding-top: 140px;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-bottom: 10px;
}

input {
  width: 80%;
  background-color: 1px solid rgb(153, 149, 149);
  outline: none;
  border: 1px solid rgba(214, 209, 209, 0.644);
  border-radius: 30px;
  padding: 10px 15px;
}
</style>