var names = [];
var likes = [];

if(names!==0){
    console.log("no one like the post");
}
let count = names.map(name => {
    if(names.length>=2)
        console.log(+names[0],+names[1]+"must be like this");
    
    elseif(names.length>=3)
        console.log(+names[0],+names[1]+name[2]+"must be like this");
    
   


});