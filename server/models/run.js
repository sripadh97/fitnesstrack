const run = [
    {exercise: "run"}
];
function removerun(i)
{
    List.splice(i,1);
    return true;
};
function addexercise(newexercise) {
    List.push({workout:newexercise});
    return List;
};
module.exports = {
    run, remove, addexercise 
}