const fileOps = require('./libs/fileOperations');
const folderOps = require('./modules/folderOperations');

// Примеры использования функций  
fileOps.writeToFile('example.txt', 'Hello, World!');
console.log(fileOps.readFromFile('example.txt'));

folderOps.createFolder('testFolder');
console.log(folderOps.listFiles('.'));
folderOps.deleteAll('.'); // Удаляет все, кроме служебных