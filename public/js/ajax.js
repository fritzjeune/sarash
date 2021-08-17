function ajaxRequest(route) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if( xhr.readyState == 4 && xhr.status ) {
            
        }
    }

    xhr.open('POST', route, true);
    xhr.send();
}