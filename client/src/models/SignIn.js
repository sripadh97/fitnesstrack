import myFetch from "./myFetch";
export default {
    State: {},
    Init() {
        myFetch('/SignIn')
            .then(x=> { 
                this.State = x;
                    console.log(x);
     })
    },
    async addExercise(newexercise) {
        await myFetch("/SignIn/addSignIn")
},
    
async remove(i) {
    await myFetch("/SignIn/removeSignIn")         
},

}