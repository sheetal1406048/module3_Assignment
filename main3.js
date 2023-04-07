//15
var post = [
    
    {
        id : 1,
        author : "author 1",
        content : "content 1",
        like :20,
        share :210,
        haha :30
    },
    {
        id : 22,
        author : "author 22",
        content : "content 22",
        like :201,
        share :2110,
        haha :302
    },
    {
        id : 333,
        author : "author 333",
        content : "content 333",
        like :2033,
        share :21330,
        haha :3330
    }
    
]



function reactionCounter(userId,reactionType){
    for(let i = 0 ; i < post.length ; i++){
        var objKeyOfUser = Object.keys(post[i]);
        //console.log(objKey)
          if(post[i]["id"] == userId){
            // console.log(post[i]["id"])
            for(let j = 0; j < objKeyOfUser.length ;j++){
                if(objKeyOfUser[j] == reactionType){
                    //console.log(objKeyOfUser[j])
                    post[i][objKeyOfUser[j]]++;
                    //console.log("====>",post[i][objKeyOfUser[j]])
                    break;
                }
            }
            console.log("Author:" ,post[i]["author"] ,",", "Content : ",post[i]["content"] ,",", "Like : ", post[i]["like"] ,",","Share : " , post[i]["share"], ",","haha : ", post[i]["haha"])
       
        }
    }
    
}

 reactionCounter(22,"share")
 reactionCounter(1,"haha")
 
// // var post1 = [1,2,3]
//  console.log(post[1]["like"])

//console.log(post)




