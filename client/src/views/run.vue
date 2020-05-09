<template>
    <section>
    <h1 class="title">This is Jogging Page!</h1> 
    <container>
      <input class="input" type="text" placeholder="add excercise" v-model="newrun" v-if="isAdmin">
            <input class="button" type="submit" value="add other exercise" @click="addheartrate(newrun)">           
    </container>
    </section> 
</template>   
<script>
import run from "../models/run";
export default{
  data:()=>
  ({
    newrun: " ",
    run: run.runs,
    isAdmin: "true"
  }),
  methods:
   {
    async remove(i){
        try 
        {
            await runs.run.runs.run(i)
        } catch (error) {
            this.error = error
        } }
    },
    async addexercise(newrun){
        try {
            await run.addrun(newrun)
        } catch (error) {
            this.error = error;
        }
    },
     async removeexercise(i){
        try {
            await jog.removerun(i)
        } catch (error) {
            this.error = error;
        }
    }
    created(){
        run.Init()
    }
  }
</script>