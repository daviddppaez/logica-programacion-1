// Referencias (Funciones)
import { valNum1, valNum2, valNum3 } from "./function.js";

// Solicitud  de datos
console.log("")
console.log("========== Inicio ==========")
console.log('¡Vamos a determinar número mayor, menor e intermedio!');
let genNum1 = valNum1()
let genNum2 = valNum2()
let genNum3 = valNum3()

let genMayor;
let genInter;
let genMenor;

// Lógica
if (genNum1 > genNum2) {
    if (genNum1 > genNum3) {
        genMayor = genNum1;
        if (genNum2 > genNum3) {
            genInter = genNum2;
            genMenor = genNum3;
        } else if (genNum2 < genNum3) {
            genInter = genNum3;
            genMenor = genNum2;
        } else {
            console.log('Hay números iguales, no se puede determinar')
        }
    } else if (genNum1 < genNum3) {
        genMayor = genNum3;
        genInter = genNum1;
        genMenor = genNum2;
    } else {
        console.log('Hay números iguales, no se puede determinar')
    }
} else if (genNum1 < genNum2) {
    if (genNum2 > genNum3) {
        genMayor = genNum2;
        if (genNum1 > genNum3) {
            genInter = genNum1;
            genMenor = genNum3;
        } else if (genNum1 < genNum3) {
            genInter = genNum3;
            genMenor = genNum1;
        } else {
            console.log('Hay números iguales, no se puede determinar')
        }
    } else if (genNum2 < genNum3) {
        genMayor = genNum3;
        genInter = genNum2;
        genMenor = genNum1;
    } else {
        console.log('Hay números iguales, no se puede determinar')
    }
} else {
    console.log('Hay números iguales, no se puede determinar')
}

// Resultado
console.log("")
console.log("========== Resultados ==========")
if (genNum1 !== NaN) {
    if (genNum2 !== NaN) {
        if (genNum3 !== NaN) {
            console.log("Número mayor:", genMayor);
            console.log("Número intermedio:", genInter);
            console.log("Número menor:", genMenor);
        }
    }
}
