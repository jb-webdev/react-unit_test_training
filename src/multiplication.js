/**
 * 
 * @param {number} a premier parametre de la multiplication
 * @param {number} b deuxième parametre de la multiplication
 * @returns 
 */

function multiplication(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Error('Number expected as parameter');
    } 
    return a * b;
}

export default multiplication;