// redaction de test methode TDD
// 1 : on crée un test qui echoue
// 2 : le test fonctionnne 
// 3 : on refactorise le code
import multiplication from './multiplication'


test ('multiplication de number', () =>{
    expect(multiplication(2,3)).toBe(6);
    expect(typeof multiplication(2,3)).toBe('number');
    expect(multiplication(2,3)).toEqual(6);
    expect(multiplication("toto","tata")).toEqual(Error('Number expected as parameter'));
})
