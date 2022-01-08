function getAdmins(map) {
    //criando uma variável, que é uma array, para mostrar os nomes de quem são Admin
    let admins = [];
    //estrutura para varrer as chaves e os valores
    for ([key, value] of map) {
        if (value === 'Admin') {
            //com o push irá mostrar as chaves do map 'usuarios'
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalha', 'Admin');

console.log(getAdmins(usuarios));