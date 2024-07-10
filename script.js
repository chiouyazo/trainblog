function GetDescription(blogName, target) {
    var fetchTarget = window.location.href.replace("/index.html", "") + '/blogs/' + blogName + '/resources/description';
    console.log("Fetching: " + fetchTarget);
    fetch(fetchTarget)
        .then(response => response.text())
        .then(data => document.getElementById(target).innerHTML = data)
        .catch(error => console.error('Error fetching data:', error));
}