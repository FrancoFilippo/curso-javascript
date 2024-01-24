alert("Bienvenido a la casa de cambio! Esta pagina solo maneja su entrada en ARS$")

let respuesta;

do{
    function convertir (moneda, cantidad){
        let dolar = 1215;
        let euro = 1405;
        let bitcoin = 5340;
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
            return "seria un total de " + cantidad * dolar + " pesos";
        }
        if(moneda === "euro" || moneda === "euros"){
            return "seria un total de " +  cantidad * euro + " pesos";
        }
        if(moneda === "bitcoin" || moneda === "bitcoins"){
            return "seria un total de " +  cantidad * bitcoin + " pesos";
        }
        if(moneda === "real" || moneda === "reales"){
            return "seria un total de " +  cantidad * real + " pesos";
        }
        if(moneda === "libra" || moneda === "libras" || moneda === "libras esterlinas" || moneda === "libra esterlina"){
            return "seria un total de " +  cantidad * libras + " pesos";
        }
        if(moneda === "franco" || moneda === "francos" || moneda === "francos suizos" || moneda == "franco suizo"){
            return "seria un total de " +  cantidad * franco + " pesos";
        }
        if(moneda === "yen" || moneda === "yenes"){
            return "seria un total de " +  cantidad * yen + " pesos";
        }                                                                                                           //  por si alguien llega a equivocarse en escribirlo.
        if(moneda === "dolar canadiense" || moneda === "dolares canadienses" || moneda === "dolares canadiences" || moneda === "dolar canadience" || moneda === "dolar canada" ){
            return "seria un total de " +  cantidad * bitcoin + " pesos";
        }
        else{
            return " no existe tal moneda"
        }
    }


console.log (convertir(prompt("¿Que tipo de moneda desea intercambiar?"), parseInt(prompt("¿Cuanto desea intercambiar?"))));


respuesta = prompt("Perfecto. El resultado se mostrará en la consola. ¿Desea realizar otra conversión? Ingrese 'si' para continuar.") ;

} while( respuesta === "si" || respuesta === "si");




