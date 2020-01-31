<template>
    <div class="login">
          <div class="container">
        <div class="card-panel">
            <h2 class="center teal-text lighten-2">Login</h2>
            <form @submit.prevent="signup">
            <div class="field">
                <label for="email">Enter Email: </label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="Password">Password</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="alias">Alias: </label>
                <input type="text" name="alias" v-model="alias">
            </div>
             <p class="red-text">{{feedback}}</p>
            <div class="field center">
           <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
            </button>
        </div>

        </form>
        </div>

        </div>
</div>
    
</template>

<script>
export default {
    Name:'Login',
    data(){
        return{
          email:null,
          password:null,
          alias:null,
          feedback:null
        }
    }
}
</script>



<style scoped>
.login .card-panel{
    max-width: 700px;
    max-height: 1000px;
    margin: 0 auto;
    margin-top: 50px;
}
.btn{
    margin-top:20px;

}

</style>