import myFetch from "./myFetch";
export default {
    State: {},
    Init() {
        myFetch('/heartrate')
            .then(x=> { 
                this.State = x;
                    console.log(x);
     })
    },
    async addExercise(newexercise) {
        await myFetch("/heartrate/addheartrate")
},
    
async remove(i) {
    await myFetch("/heartrate/removeheartrate")         
},

}