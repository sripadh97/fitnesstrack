const sprint = [
    {exercise: "sprint"}
];
function removesprint(i)
{
    List.splice(i,1);
    return true;
};
function addexercise(newexercise) {
    List.push({workout:newexercise});
    return List;
};
module.exports = {
    sprint, remove, addexercise 
}