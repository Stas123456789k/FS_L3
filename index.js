const fileOps = require('./src/libs/fileOperations');
const folderOps = require('./src/modules/folderOperations');

// 1. Тестирование записи и чтения файла  
fileOps.writeToFile('test.txt', 'Hello, Test!');
console.log(fileOps.readFromFile('test.txt'));

// 2. Тестирование очистки файла  
fileOps.clearFile('test.txt');
console.log(fileOps.readFromFile('test.txt'));

// 3. Тестирование записи и последующей очистки  
fileOps.writeToFile('test.txt', 'Data to be cleaned!');
fileOps.cleanFile('test.txt');
console.log(fileOps.readFromFile('test.txt'));

// 4. Тестирование создания и удаления папки  
folderOps.createFolder('testFolder');
console.log(folderOps.listFiles('.'));
folderOps.deleteFolder('testFolder');
console.log(folderOps.listFiles('.'));

// 5. Тестирование удаления всех файлов и папок  
folderOps.createFolder('toDeleteFolder');
fileOps.writeToFile('toDeleteFolder/testFile.txt', 'File to be deleted');
folderOps.deleteAll('toDeleteFolder');
console.log(folderOps.listFiles('toDeleteFolder'));