<template>
  <form class="container">
      <div class="field">
        <p class="has-text-centered"> </p>
            <input class="input" type="text" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>

            </div>
            <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span> </p>
            </div>
            <div class="field">
            <p class="control">
            <button class="button is-success">
                SignIn
            </button>
        </p>
    </div>
  </form>
</template>

<script>
    import { Login } from "../models/Users";
        export default {
            data()
            {
                return
                 {
                    email: '',
                    password: '',
                    error: ''
        }
    },
    methods:
     {
        login()
        {
            try {
                Login(this.email, this.password);
                this.$router.push('/MyPage');
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>