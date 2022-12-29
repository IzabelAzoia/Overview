
    (function(){
        function calcularMedia(){
            var total = 0;
            var qualquer = arguments.length;
            var x = 0;
            // while(arguments[x]){
            while(typeof arguments[x] === 'number'){
                total += arguments[x];
                x++
            }

            return total / qualquer;
        } 
    })