<template>
    <section>
    <h1 class="title">This is Jogging Page!</h1> 
    <container>
      <input class="input" type="text" placeholder="add excercise" v-model="newjog" v-if="isAdmin">
            <input class="button" type="submit" value="add other exercise" @click="addheartrate(newjog)">           
    </container>
    </section> 
</template>   
<script>
import jog from "../models/jog";
export default{
  data:()=>
  ({
    newjog: " ",
    jog: jogs.jog.jogs,
    isAdmin: "true"
  }),
  methods:
   {
    async remove(i){
        try 
        {
            await jogs.jog.jogs.jog(i)
        } catch (error) {
            this.error = error
        } }
    },
    async addexercise(newjog){
        try {
            await jog.addjog(newjog)
        } catch (error) {
            this.error = error;
        }
    },
     async removeexercise(i){
        try {
            await jog.removejog(i)
        } catch (error) {
            this.error = error;
        }
    }
    created(){
        jog.Init()
    }
  }
</script>