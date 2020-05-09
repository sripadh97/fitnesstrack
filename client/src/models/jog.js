import myFetch from "./myFetch";
export default {
    State: {},
    Init() {
        myFetch('/jog')
          .then(x=> { 
            this.State = x;
                console.log(x);
     })
    },
    async addExercise(newexercise) {
        await myFetch("/jog/addjog")
},
    
async remove(i) {
    await myFetch("/jog/removejog")         
},

}