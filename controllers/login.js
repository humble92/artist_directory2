exports.loginForm = (req,res,next) => {
    res.render('loginform', {loginCSS: true, loginJS: true, logInOut: "Login"});
}

exports.login = (req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;

    if((username == "A01031516" || username == "a01031516") && password == "password") {
        res.redirect(301, '/artists');
    } else {
        res.render('loginform', {loginCSS: true, loginJS: true, logInOut: "Login", loginFailed: true});
    }
}

