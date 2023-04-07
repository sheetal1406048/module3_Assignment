//console.log(12)
//5 Even Numbers
const num = [1,2,3,4,5,6,7,8];

const result = num.filter(
    function(numbers){
        if(numbers%2 == 0){
            return numbers;
        }
    }
)

console.log("(5) All even Numbers = ",result)