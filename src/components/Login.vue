<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form id="loginForm">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" v-model="loginName">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="passwordName">
        </div>
        <div class="form-group">
          <button @click="handleLogin" class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { ref, onMounted, computed, provide } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

let loginName = ref("");
let passwordName = ref("");
let loading = ref(false);
let message = ref("");
const store = useStore();
const router = useRouter();
const content = ref("");
const schema = yup.object().shape({
  username: yup.string().required("Username is required!"),
  password: yup.string().required("Password is required!"),
});
provide('loginName', loginName.value);
const loggedIn = computed(() => store.state.auth.status.loggedIn);

function handleLogin() {
  loading.value = true;
  const user = {'username': loginName.value, 'password': passwordName.value};
  store.dispatch("auth/login", user).then(
    () => {
      router.push("/home");
    },
    (error) => {
      loading.value = false;
      message.value =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    }
  );
}

onMounted(() => {
  console.log(content);
  console.log(schema);
  if (loggedIn.value) {
    router.push("/profile");
  }
});
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.error-feedback {
  color: red;
}
</style>