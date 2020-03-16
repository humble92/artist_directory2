let db = require('../util/database.pg');

// Add a single individual to the database
function addArtist(data) {
    let sql = "Insert into artist (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.imageURL + "')";
    db.query(sql);
}

// Gets all the individuals in the database
function getAllArtist() {
    return db.query('Select * from artist');
}

// Gets a specific individual from the database
function getArtist(id) {
    return db.query("Select * from artist where id = " + id);
}

// Gets artists list including specific characters from the database
function searchArtist(ch) {
    return db.query("Select * from artist where lower(name) like '%" + ch + "%'");
}

// Gets a specific individual from the database
function deleteArtist(id) {
    db.query("delete from artist where id = " + id);
}

module.exports = {
    add : addArtist,
    getall : getAllArtist,
    getartist: getArtist,
    deleteartist: deleteArtist,
    searchartist: searchArtist
}