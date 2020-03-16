
function loginout() {
    let url = window.location.protocol + '//' 
            + window.location.hostname + ':' 
            + window.location.port + '/login';
    window.location.replace(url);
}
