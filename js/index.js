alert("¡Bienvenido a la casa de cambio! En este sitio, solo se presenta el valor en pesos argentinos (ARS$).")

let respuesta;

do{
    function convertir (moneda, cantidad){
        let dolar = 1215;
        let euro = 1405;
        let bitcoin = 4000000;
        let real = 280;
        let libras = 1046;
        let franco = 952;
        let yen = 5.50;                                                         // NO TODOS LOS VALORES SON REALES, SABIENDO LA SITUACION ARGENTINA ESTOS PUEDEN VARIAR DIA A DIA. 
        let DCND = 608;
        let yuan = 115;
        let DAUS = 541;
        let rublo = 9.27;
        let PMEX = 47.80;
        let corona = 78.81;
        let rupia = 9.89;
        let won = 0.62; 
    
        if( moneda === "dolar" || moneda === "dolares"){
            return "seria un total de " + cantidad * dolar + " pesos (1 Dolar = 1215 ARS$)";
        }
        if(moneda === "euro" || moneda === "euros"){
            return "seria un total de " +  cantidad * euro + " pesos (1 Euro = 1405 ARS$)";
        }
        if(moneda === "bitcoin" || moneda === "bitcoins"){
            return "seria un total de " +  cantidad * bitcoin + " pesos ( 1 Bitcoin = 4000000)";
        }
        if(moneda === "real" || moneda === "reales"){
            return "seria un total de " +  cantidad * real + " pesos (1 Real = 280 ARS$)";
        }
        if(moneda === "libra" || moneda === "libras" || moneda === "libras esterlinas" || moneda === "libra esterlina"){
            return "seria un total de " +  cantidad * libras + " pesos (1 Libra = 1046 ARS$)";
        }
        if(moneda === "franco" || moneda === "francos" || moneda === "francos suizos" || moneda == "franco suizo"){
            return "seria un total de " +  cantidad * franco + " pesos ( 1 Franco Suizo = 952 ARS$)";
        }
        if(moneda === "yen" || moneda === "yenes"){
            return "seria un total de " +  cantidad * yen + " pesos  (1 Yen = 5.50 ARS$)";
        }                                                                                                           //  por si alguien llega a equivocarse en escribirlo.
        if(moneda === "dolar canadiense" || moneda === "dolares canadienses" || moneda === "dolares canadiences" || moneda === "dolar canadience" || moneda === "dolar canada" ){
            return "seria un total de " +  cantidad * DCND + " pesos ( 1 Dolar Canadiense = 608 ARS$";
        }
        if(moneda === "yuan" || moneda === "yuanes"){
            return "seria un total de " +  cantidad * yuan + " pesos (1 Yuan = 115 ARS$)";
        }                                                               
        if(moneda === "rublo" || moneda === "rublos" || moneda === "rublas"){
            return "seria un total de " +  cantidad * rublo + " pesos (1 Rublo = 9.27 ARS$)";
        }
        if(moneda === "peso mexicano" || moneda === "pesos mexicanos" || moneda === "pesos mexico"){
            return "seria un total de " +  cantidad * PMEX + " pesos (1 Peso Mexicano = 47.80 ARS$)";
        }
        if(moneda === "corona sueca" || moneda === "coronas suecas" || moneda === "corona suecia" || moneda === "coronas suecias" || moneda === "corona" || moneda == "corona" || moneda === "coronas"){
            return "seria un total de " +  cantidad * corona + " pesos (1 Corona Sueca = 78.81 ARS$)";
        }
        if(moneda === "rupia" || moneda === "rupias" || moneda === "rupia india"){
            return "seria un total de " +  cantidad * rupia + " pesos (1 Rupia = 9.89 ARS$)";
        }
        if(moneda === "won" || moneda === "wones" || moneda === "won surcorea" || moneda === "wones surcoreanos"){
            return "seria un total de " +  cantidad * won + " pesos (1 Won = 0.62 ARS$)";
        } 
        if(moneda === "dolar australiano" || moneda === "dolar australia" || moneda === "dolares australianos" || moneda === "dolares australia"){
            return "seria un total de " +  cantidad * DAUS + " pesos (1 Dolar Australiano = 541 ARS$)";
        }                                                            
        else if(respuesta !== moneda ){
            return "Moneda o cantidad incorrecta, por favor ingrese los datos correctamente."
        }
    }


console.log (convertir(prompt("¿Que tipo de moneda desea intercambiar?"), parseInt(prompt("¿Cuanta cantidad de la moneda seleccionada desea intercambiar?"))));


respuesta = prompt("El resultado se mostrará en la consola. ¿Desea realizar otra conversión? Ingrese 'si' para continuar.");

} while( respuesta === "si" || respuesta === "Si" || respuesta === "sI" || respuesta === "SI");




