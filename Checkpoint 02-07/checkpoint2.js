
const microondas=(prato, tempo) =>{
    if (typeof prato != 'string' || typeof tempo != 'number') {
        return "Digite o nome de um prato e um número"
    }
    else if(prato == "pipoca" && tempo == 10){
        return "Prato pronto, bom apetite"
    }
    else if(prato == "pipoca" && tempo < 10){
        return "Tempo insuficiente"
    }
    else if(prato == "pipoca" && tempo == 20){
        return "Seu prato queimou"
    }         
    else if(prato == "pipoca" && tempo >= 30){
        return "Kabummmm!!!"
    }
    else if(prato == "pipoca" && tempo > 10 && tempo < 20){
        return "Vai queimar hein!?"
    }
    else if(prato == "pipoca" && tempo > 20 && tempo < 30){
        return "Vai explodir!!!"
    }

    // macarrão
    else if(prato == "macarrao" && tempo == 8){
        return "Prato pronto, bom apetite"
    }
    else if(prato == "macarrao" && tempo <= 7){
        return "Tempo insuficiente"
    }
    else if(prato == "macarrao" && tempo == 16){
        return "Seu prato queimou"
    }         
    else if(prato == "macarrao" && tempo >= 24){
        return "Kabummm!!!"
    }
    else if(prato == "macarrao" && tempo > 8  && tempo <16){
        return "Vai queimar hein?!"
    }
    else if(prato == "macarrao" && tempo > 16 && tempo < 24){
        return "Vai explodir!!!"
    }

    // Carne
        else if(prato == "carne" && tempo == 15){
            return "Prato pronto, bom apetite"
        }
        else if(prato == "carne" && tempo <= 14){
            return "Tempo insuficiente"
        }
        else if(prato == "carne" && tempo == 30){
            return "Seu prato queimou"
        }         
        else if(prato == "carne" && tempo >= 45){
            return "Kabummmm!!!"
        }
        else if(prato == "carne" && tempo > 15  && tempo <30){
            return "Vai queimar hein?!"
        }
        else if(prato == "carne" && tempo > 30 && tempo < 45){
            return "Vai explodir!!!"
        }

        // Feijão
        else if(prato == "feijao" && tempo == 12){
            return "Prato pronto, bom apetite"
        }
        else if(prato == "feijao" && tempo <= 6){
            return "Tempo insuficiente"
        }
        else if(prato == "feijao" && tempo == 24){
            return "Seu prato queimou"
        }         
        else if(prato == "feijao" && tempo >= 36){
            return "Kabummmm!"
        }
        else if(prato == "feijao" && tempo > 12  && tempo <24){
            return "Vai queimar hein?!"
        }
        else if(prato == "feijao" && tempo > 24 && tempo < 36){
            return "Vai explodir!!!"
        }
        // Brigadeiro
        else if(prato == "Brigadeiro" && tempo == 8){
            return "Prato pronto, bom apetite"
        }
        else if(prato == "Brigadeiro" && tempo <= 7){
            return "Tempo insuficiente"
        }
        else if(prato == "Brigadeiro" && tempo == 16){
            return "Seu prato queimou"
        }         
        else if(prato == "Brigadeiro" && tempo >= 24){
            return "Kabummmm!!!"
        }
        else if(prato == "Brigadeiro" && tempo > 8  && tempo <16){
            return "Vai queimar hein?!"
        }
        else if(prato == "Brigadeiro" && tempo > 16 && tempo < 24){
            return "Vai explodir!!!"
        }

        else if(prato != "pipoca" || prato!= "macarrão" || prato != "carne" || prato !="feijao" || prato !="brigadeiro"){

        }
}

console.log(microondas("pipoca", 10))
console.log(microondas("pipoca", 5))
console.log(microondas("pipoca", 15))
console.log(microondas("pipoca", 20))
console.log(microondas("pipoca", 25))
console.log(microondas("pipoca", 30))
console.log(microondas("pipoca", 35))