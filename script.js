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
            console.log ("Erro encontrado")
            console.log (e.menssage)
        }

    }
   
}