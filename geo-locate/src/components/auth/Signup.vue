<template>
<div class="sign">
    <div class="container">
        <div class="card-panel">
            <h2 class="center teal-text lighten-2">Sign Up</h2>
            <form @submit.prevent="signup">
                <p class="red-text">{{feedback}}</p>
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
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    Name: 'Signup',
    data(){
        return{
          email:null,
          password:null,
          alias:null,
          feedback:null
        }
    },
    methods:{
        signup(){
          if (this.alias && this.email && this.password) {
              // This slugifies the alias inputted in the form
              this.slug = slugify(this.alias,{
                  replacement:'-',
                  remove:/[$_*+~.()'"!\-:@]/g,
                  lower:true
              })
              //To authenticate the user and check if the alias already exist
              let ref = db.collection('users').doc(this.slug)
              ref.get().then(doc => {
                  if (doc.exists) {
                      this.feedback = 'This alias already exist'
                  } else {
                      //Firebase function for authentication
                      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then(user => {
                            ref.set({
                                alias:this.alias,
                                geolocation: null, 
                              //  user_id :user.UID
                            })
                        }).then(()=> {
                            this.$router.push({ name : 'Gmap'})
                        })
                      .catch(err =>{
                          console.log(err)
                          this.feedback = err.message;
                      })
                      this.feedback = 'This alias is free to use'
                  }
              })
              console.log(this.slug)
          } else {
              this.feedback = "You must enter an alias "
          }
        }
    }
}
</script>

<style scoped>
.sign .card-panel{
    max-width: 700px;
    max-height: 1000px;
    margin: 0 auto;
    margin-top: 50px;
}
.btn{
    margin-top:20px;

}

</style>