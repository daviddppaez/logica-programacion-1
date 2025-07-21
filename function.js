// Dependencias necesarias
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funciones de validación de datos
export function valNum1() {
    let genNum;
    do {
    genNum = prompt('Ingrese el primer número: ');
    if (isNaN(genNum) || genNum.trim() === '') {
        console.log('> Intente nuevamente, solo números')
    }
    } while (isNaN(genNum) || genNum.trim() === '');
    return genNum;
}

export function valNum2() {
    let genNum;
    do {
    genNum = prompt('Ingrese el segundo número: ');
    if (isNaN(genNum) || genNum.trim() === '') {
        console.log('> Intente nuevamente, solo números')
    }
    } while (isNaN(genNum) || genNum.trim() === '');
    return genNum;
}

export function valNum3() {
    let genNum;
    do {
    genNum = prompt('Ingrese el tercer número: ');
    if (isNaN(genNum) || genNum.trim() === '') {
        console.log('> Intente nuevamente, solo números')
    }
    } while (isNaN(genNum) || genNum.trim() === '');
    return genNum;
}

