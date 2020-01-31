<template>
    <div class="navbar">
        <nav class="teal lighten-2">
            <div class="container">
                <a href="" class="brand-logo left">GeoLocate</a>
                    <ul class="right">
                        <li><router-link :to="{path: '/SignUp'}">Signup</router-link></li>
                        <li><router-link :to="{path: '/Login'}">Login</router-link></li>
                    </ul>
                
            </div>

        </nav>
    </div>
</template>

<script>
export default {
    Name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>

<style>
 
</style>