const fs = require('fs');

// 7. Функция создания папки  
function createFolder(folderName) {
    fs.mkdirSync(folderName);
}

// 8. Функция удаления папки  
function deleteFolder(folderName) {
    fs.rmdirSync(folderName);
}

// 9. Функция вывода путей к файлам  
function listFiles(directory) {
    return fs.readdirSync(directory).filter(file => !file.startsWith('.'));
}

// 10. Функция удаления всех файлов и папок  
function deleteAll(directory) {
    const files = listFiles(directory);
    files.forEach(file => {
        const filePath = `${directory}/${file}`;
        if (fs.lstatSync(filePath).isDirectory()) {
            deleteFolder(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    });
}

// Экспорт функций  
module.exports = { createFolder, deleteFolder, listFiles, deleteAll };