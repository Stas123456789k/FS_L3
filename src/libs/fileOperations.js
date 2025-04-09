const fs = require('fs');

// 1. Функция записи в файл  
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

// 2. Функция чтения из файла  
function readFromFile(fileName) {
    return fs.readFileSync(fileName, 'utf8');
}

// 3. Функция изменения информации в файле  
function overwriteFile(fileName, newData) {
    fs.writeFileSync(fileName, newData, 'utf8');
}

// 4. Функция удаления информации из файла  
function clearFile(fileName) {
    fs.writeFileSync(fileName, '', 'utf8');
}

// 5. Функция удаления шума из файла  
function cleanFile(fileName) {
    let content = readFromFile(fileName);
    content = content.replace(/[0-9]/g, '').toLowerCase();
    overwriteFile(fileName, content);
}

// 6. Функция копирования файла  
function copyFile(source, destination) {
    const content = readFromFile(source);
    writeToFile(destination, content);
}

module.exports = { writeToFile, readFromFile, overwriteFile, clearFile, cleanFile, copyFile };