let db = require('../util/database');

// Add a single individual to the database
function addArtist(data) {
    let sql = "Insert into artist (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.imageURL + "')";
    return db.execute(sql);
}

// Gets all the individuals in the database
function getAllArtist() {
    return db.execute('Select * from artist');
}

// Gets a specific individual from the database
function getArtist(id) {
    return db.execute("Select * from artist where id = " + id);
}

// Gets artists list including specific characters from the database
function searchArtist(ch) {
    return db.execute("Select * from artist where name like '%" + ch + "%'");
}

// Gets a specific individual from the database
function deleteArtist(id) {
    return db.execute("delete from artist where id = " + id);
}

module.exports = {
    add : addArtist,
    getall : getAllArtist,
    getartist: getArtist,
    deleteartist: deleteArtist,
    searchartist: searchArtist
}