function GetDescription(blogName, target) {
    console.log(window.location.hostname);
    var fetchTarget = new  window.location.hostname + '/blogs/' + blogName + '/resources/description';
    console.log("Fetching: " + fetchTarget);
    fetch(fetchTarget)
        .then(response => response.text())
        .then(data => document.getElementById(target).innerHTML = data)
        .catch(error => console.error('Error fetching data:', error));
}

function GetTitle(blogName, target) {
    var fetchTarget = window.location.href.replace("/index.html", "") + '/blogs/' + blogName + '/resources/headline';
    console.log("Fetching: " + fetchTarget);
    fetch(fetchTarget)
        .then(response => response.text())
        .then(data => document.getElementById(target).innerHTML = data)
        .catch(error => console.error('Error fetching data:', error));
}