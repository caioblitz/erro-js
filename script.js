function validaArray (arr, num) {
    try{
        if (!arr && !num) throw new ReferenceError("Erro throw, Envie os parâmetros");

        if(typeof arr !== 'object' )  
          throw new TypeError("Erro encontrado! seu array precis ser do tipo object");
    
        if(typeof arr !== 'number' )  
          throw new TypeError("Erro encontrado! seu array precis ser do tipo número");
    
          if (arr.length !== num) throw new RangeError('Tamano não reconhecido');
          
          return arr;

    }

    catch(e) {
        if (e instanceof ReferenceError) {
            console.log ("Erro encontrado Reference");
            console.log (e.message);
        }else if (e instanceof TypeError) {
            console.log ("Num Erro encontrado Type");
            console.log (e.message);
        }else if (e instanceof RangeError) {
            console.log ("Erro encontrado Range");
            console.log (e.message)
        }else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log (validaArray());
console.log (validaArray(5, 5));
console.log (validaArray([],'abc'));
console.log (validaArray([1, 2, 3, 4, 5], 5));
