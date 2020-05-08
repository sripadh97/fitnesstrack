const jog = [
    {exercise: "jog"}
];
function removejog(i)
{
    List.splice(i,1);
    return true;
};
function addexercise(newexercise) {
    List.push({workout:newexercise});
    return List;
};
module.exports = {
    jog, removejog, addexercise 
}