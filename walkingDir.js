(function(){

  let walk = ['w','e','w','e','w','e','w','e','n','n'];
  let x = 10;

  console.log("x values"+x)
  
  console.log("Input array",+walk);

  var occurrences = walk.reduce(function(obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {}); // why we need {} here??

  var north = occurrences['n'];
  var south = occurrences['s'];
  var west = occurrences['w'];
  var east = occurrences['e'];
 
  console.log("North"+north);
  console.log("south"+south);
  console.log("East",+east);
  console.log("west",+west);

  if((north === south) && (north !== NaN) && (south !== NaN) && (east) ){
    console.log("should retrun true");
  } else if((east === west) && (east !== NaN) && (west !== NaN)){
    console.log("should retrun true");
  }else{
  console.log("should retrun false");
  } 

});



