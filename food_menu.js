(function(){
    let r = /(burger)+|(fries)+|(chicken)+/gi;
    let s = 'milkshakepizzachickenfriescokeburger';
    //let result;
    var result;
    while(result = r.exec(s)){
        console.log(result);
    }
    
}());
