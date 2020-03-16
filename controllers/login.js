exports.loginForm = (req,res,next) => {
    let session = req.session;
    res.render('loginform', {loginCSS: true, loginJS: true, session : session, logInOut: "Login"});
}

exports.login = (req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;

    if((username == "A01031516" || username == "a01031516") && password == "password") {
        req.session.username = username;
        res.redirect(301, '/artists');
    } else {
        res.render('loginform', {loginCSS: true, loginJS: true, logInOut: "Login", loginFailed: true});
    }
}

