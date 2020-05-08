const foodlimitList = [
    {foodname:"tomato" , quantity:100}
    {foodname:"spinach" , quantity:110}
    {foodname:"Meat" , quantity:50}
];
function addFoddlimit(foodlimit,quantity) {
    dietList.push({foodlimit:foodlimit,quantity:quantity});
    return foodlimitList;
};
function removefoodlimit(i){
    this.foodlimitList.splice(i,1);
    return true;
    };
module.exports = {
    foodlimitList,
    addfoodlimit,
    removefoodlimit,
}
    
