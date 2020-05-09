<template>
    <section>
    <h1 class="title">Check your heart rate..!</h1> 
    <div class = "container">
        <h3 class="control">Check your heart rate often!</h3>
        <h4 class="control">Stay Safe..Stay Healthy</h4>       
        <p> Your heart rate offers a more objective look at exercise intensity. In general, the higher your heart rate during physical activity, the higher the exercise intensity.   
         Perceived exertion may not always be similar to your heart rate level, and it depends on the individual. 
         But it can be a general guide to measure your exertion level. 
         If you think you're working hard, your heart rate is probably higher than usual.  
         </p>
         </div>            
    </container>
    </section> 
</template>   
<script>
import heartrate from "../models/heartrate";
export default{
  data:()=> 
  ({
    heartrate: heartrate,
    isAdmin: "true"
  }),
  methods: {
    async remove(i){
        try {
            await heartrate.remove(i)
        } 
        catch (error)
         {
            this.error = error
        }
        }
    },
    async addExercise(newexercise){
        try {
            await heartrate.add(newexercise)
        } 
        catch (error)
         {
            this.error = error;
        }
    },
    created(){
        heartrate.Init()
    }
  }
</script>