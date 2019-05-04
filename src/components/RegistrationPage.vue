<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="givenName">Given name</label>
      <div>
        <input id="givenName" type="text" v-model="givenName">
        <span v-if="!$v.givenName.required">is required</span>
        <span v-if="!$v.givenName.minLength">too short</span>
      </div>

      <label for="familyName">Family name</label>
      <div>
        <input id="familyName" type="text" v-model="familyName">
        <span v-if="!$v.familyName.required">is required</span>
        <span v-if="!$v.familyName.minLength">too short</span>
      </div>

      <label for="email">Email</label>
      <div>
        <input id="email" type="text" v-model="email">
        <span v-if="!$v.email.required">is required</span>
        <span v-if="!$v.email.email">no email</span>
      </div>

      <label for="newsletter">Newsletter</label>
      <div>
        <input id="newsletter" type="checkbox" v-model="newsletter">
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password">
        <span v-if="!$v.password.required">is required</span>
        <span v-if="!$v.password.minLength">too short</span>
      </div>

      <label for="passwordRepeat">Password repeat</label>
      <div>
        <input id="passwordRepeat" type="password" v-model="passwordRepeat">
        <span v-if="!$v.passwordRepeat.passwordSameAs">imust be same</span>
      </div>
      <div>
        <button :disabled="$v.$invalid" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      givenName: "",
      familyName: "",
      email: "",
      newsletter: "",
      password: "",
      passwordRepeat: ""
    };
  },
  methods: {
    register: function() {
      this.$store
        .dispatch("register", this.data)
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => console.log(err));
    }
  },
  validations: {
    givenName: {
      required,
      minLength: minLength(3)
    },
    familyName: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    passwordRepeat: {
      passwordSameAs: sameAs("password")
    }
  }
};
</script>
