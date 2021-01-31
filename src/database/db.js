//importando o sqlite
const Database = require("sqlite-async")
//criando as identificacões string
function execute(db){
    return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        about TEXT,
        whatsapp TEXT,
        images TEXT,
        instructions TEXT,
        opening_hours TEXT,
        open_on_weekends TEXT 
    );
    `) 
}

//exportando as configuracões (db)
module.exports = Database.open(__dirname + "/database.sqlite").then(execute)