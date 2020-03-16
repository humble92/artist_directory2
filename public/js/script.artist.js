//go to add form
function openAddArtistForm() {
    let url = window.location.protocol + '//' 
            + window.location.hostname + ':' 
            + window.location.port + '/artist/add';
    window.location.replace(url);
}

//go to list page
function listArtist() {
    let url = window.location.protocol + '//' 
            + window.location.hostname + ':' 
            + window.location.port + '/artists';
    window.location.replace(url);
}

function loginout() {
    let url = window.location.protocol + '//' 
            + window.location.hostname + ':' 
            + window.location.port + '/login';
    window.location.replace(url);
}

//check if image exists
function imageExists(image_url, good, bad){
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = image_url;
}

//add artist to database
function addArtist() {
    let artistInfo = new Object();
    artistInfo.name = document.getElementById("name").value;
    artistInfo.desc = document.getElementById("desc").value;
    artistInfo.imgUrl = document.getElementById("imgUrl").value;
    
	//verifying input values
	if(artistInfo.name.trim() == "") {
		alert("Please type: artist name");
		return;
	}
	if(artistInfo.desc.trim() == "") {
		alert("Please type: about artist");
		return;
	}
	if(artistInfo.imgUrl.trim() == "") {
		alert("Please type: url of artist's image");
		return;
	}

    //before adding artist, check if image exists
    imageExists(artistInfo.imgUrl,function() {
        document.getElementById("fAddArtist").submit();
    },function() {
        alert("Please type: correct url of artist's image.\nThe image url you typed does not exist.");
        return;
    });

}

//delete artist from database
function deleteArtist(btn) {
    var uid = btn.parentNode.id;
    var form = document.createElement("form");
    form.setAttribute("method", 'post');
    form.setAttribute("action", '/artist/' + uid);

    document.body.appendChild(form);
    form.submit();
}