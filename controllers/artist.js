let artistModel = require('../models/artistData');

exports.getAllArtist = (req,res,next) => {
   let Artists = artistModel.getall();
   Artists.then( ([rows, fieldData]) => {
        res.render('artists', { artist: rows, artistsCSS: true, artistJS: true, logInOut: "Logout" });
   });
};

exports.searchArtist = (req,res,next) => {
    let searchName = req.body.searchName;
    let Artists = artistModel.searchartist(searchName);
    Artists.then( ([rows, fieldData]) => {
         res.render('artists', { artist: rows, artistsCSS: true, artistJS: true, logInOut: "Logout" });
    });
 };
 
exports.getAddArtist = (req,res,next) => {
    res.render('artistadd', {formsCSS: true, artistJS: true, logInOut: "Logout"});
};

exports.getArtist = (req,res,next) => {
    let id = req.params.id;
    let Artist = artistModel.getartist(id);
    Artist.then( ([data,metadata]) => {
        res.render('artist', {artist: data[0], artistCSS: true, artistJS: true, logInOut: "Logout"});
    });
}

exports.deleteArtist = (req,res,next) => {
    let id = req.params.id;
    artistModel.deleteartist(id);
    res.redirect(301, '/artists');
}

exports.postAddArtist = (req,res,next) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;
    
    let pOject = {
       name: p_name,
       about: p_about,
       imageURL: p_imageURL
    }
 
    artistModel.add(pOject);
    res.redirect(301, '/artists');
}

exports.logout = (req,res,next) => {
    res.redirect(301, '/login');
}
