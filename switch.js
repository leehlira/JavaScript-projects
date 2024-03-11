let mes = "Janeiro";

switch(mes){
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão")
        break;
    case "Abril":
    case "Maio": 
    case "Junho":
        console.log("Outono");
        break;   
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
                
}