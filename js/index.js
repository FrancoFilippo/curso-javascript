alert("Bienvenido a la casa de cambio!")

function convertir (cantidad, moneda){
    let dolar = 1215;
    let euro = 1405;
    let bitcoin = 5340;

    if( moneda === "dolar" || moneda === "dolares"){
        return cantidad * dolar + " pesos";
    }
    if(moneda === "euro" || moneda === "euros"){
        return cantidad * euro + " pesos";
    }
    if(moneda === "bitcoin" || moneda === "bitcoins"){
        return cantidad * bitcoin + " pesos";
    }else{
        return " no existe tal moneda"
    }
}
console.log (convertir( parseInt(prompt("Ingrese cantidad a convertir")), prompt("Ingrese moneda")));



