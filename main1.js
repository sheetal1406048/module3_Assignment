//problem 11 :sorting menu 

var menuItem = [
    {foodName: "A", price : 20},
    {foodName: "B", price : 200},
    {foodName: "C", price : 2},
    {foodName: "D", price : 30},
]

menuItem.sort(
    function(a,b){
        return a.price-b.price;
    }
)

console.log(menuItem)