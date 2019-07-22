// module.exports = function (string) {
    (function(){
        
        let string = 'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza';
        
        console.log("Input string is "+string);

        // let burger = /(burger)|(fries)|(chicken)|(pizza)+/gi;

        let burger = /(burger){1}/gi;
        let fries = /(fries)+/gi;
        let chicken = /(chicken)+/gi;
        let pizza = /(pizza){1}/gi;
        let sandwich = /(sandwich)+/gi;
        let onionrings = /(onionrings)+/gi;
        let milkshake = /(milkshake)+/gi;
        let coke = /(coke)+/gi;

        let array = [];

        //let b = string.replace(/^burger/gi,'1.Burger ');
       
            let b = string.match(burger);
            let f = string.match(fries);
            let c = string.match(chicken);
            let p = string.match(pizza);
            let s = string.match(sandwich);
            let o = string.match(onionrings);
            let m = string.match(milkshake);
            let c_coke = string.match(coke);
        
        if(b!=null) array.push(...b);
        if(f!=null) array.push(...f);
        if(c!=null) array.push(...c);
        if(p!=null) array.push(...p);
        if(s!=null) array.push(...s);
        if(o!=null) array.push(...o);
        if(m!=null) array.push(...m);
        if(c_coke!=null) array.push(...c_coke);

        // if(o!=null){
        //     array.push(...b, ...f, ...c, ...p, ...s, ...m, ...c_coke);
        // }
        // array.push(...b);
        // array.push(...m);

        //console.log("array after pushing "+array);

        let caps = array.map(str => {
            // return str.replace();
            //console.log("about to replace: small to big caps "+str);
            // return str;
            return str.charAt(0).toUpperCase() + str.slice(1);
        });

        let tempString = caps.join();

        let finalString = tempString.replace(/,/g, " ");
        
        console.log(`new list with caps ${finalString}`);

        //return finalString;
//}
}());

    

    