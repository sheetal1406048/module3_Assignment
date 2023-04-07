//Find the book name by searching title

var book = [
    {title : "Junior Level BooksIntroduction to Computer", author : "Amit Garg", year :2021},
    {title : "Client Server Computing", author : "Lalit Kumar", year :2021},
    {title : "INDO-PAK WAR 1971- Reminiscences of Air Warrior", author : "Sharad Kumar Verma", year :1901},
    {title : "A Place client Called Home", author : "Preeti  Garg", year :3021}
    
]

//console.log(book[1].title)

function searchBook(titleName){
    titleName = titleName.toLowerCase();
    //console.log(titleName)
    var result = book.filter(function(bookTitle){
          if(bookTitle["title"].toLowerCase().includes(titleName)){
            //console.log(bookTitle["title"])
            console.log (bookTitle);
            }
        //console.log(bookTitle)
        }
    )
}

searchBook("home");