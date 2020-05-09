import myFetch from "./myFetch";
export default {
    State: {},
    Init() {
        myFetch('/run')
          .then(x=> { 
            this.State = x;
                console.log(x);
     })
    },
    async addExercise(newexercise) {
        await myFetch("/run/addrun")
},
    
async remove(i) {
    await myFetch("/run/removerun")         
},

}