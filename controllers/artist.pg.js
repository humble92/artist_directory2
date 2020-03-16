let artistModel = require('../models/artistData.pg');

exports.getAllArtist = function(req,res,next) {
    let session = req.session;
    let Artists = artistModel.getall();
    Artists.then((data) => {
        res.render('artists', { artist: data.rows, artistsCSS: true, artistJS: true, session : session, logInOut: "Logout" });
    });
}

exports.searchArtist = (req,res,next) => {
    let session = req.session;
    let searchName = req.body.searchName;
    let Artists = artistModel.searchartist(searchName);
    Artists.then( (data) => {
         res.render('artists', { artist: data.rows, artistsCSS: true, artistJS: true, session : session, logInOut: "Logout" });
    });
};

exports.getAddArtist = (req,res,next) => {
    let session = req.session;
    res.render('artistadd', {formsCSS: true, artistJS: true, session : session, logInOut: "Logout"});
};

exports.getArtist = function(req,res,next) {
    let session = req.session;
    let id = req.params.id;
    let Artist = artistModel.getartist(id);
    Artist.then( (data) => {
        res.render('artist', {artist: data.rows[0], artistCSS: true, artistJS: true, session : session, logInOut: "Logout"});
    });
}

exports.deleteArtist = (req,res,next) => {
    let id = req.params.id;
    artistModel.deleteartist(id);
    res.redirect(301, '/artists');
}

exports.postAddArtist = function(req,res,next) {
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
    req.session.username = null;
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect(301, '/login');
    });
}
