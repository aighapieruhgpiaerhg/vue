<template>
  <div>
    <h1>Login</h1>

    <form class="login" @submit.prevent="login">
      <label>Email</label>
      <div>
        <input v-model="email" type="text">
      </div>
      <label>Password</label>
      <div>
        <input v-model="password" type="password">
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {}
};
</script>