function GetDescription(blogName, target) {
    console.log("location: " + window.location.hostname);
    var fetchTarget = "https://" + window.location.hostname + '/blogs/' + blogName + '/resources/description';
    console.log("Fetching: " + fetchTarget);
    fetch(fetchTarget)
        .then(response => response.text())
        .then(data => document.getElementById(target).innerHTML = data)
        .catch(error => console.error('Error fetching data:', error));
}

function GetTitle(blogName, target) {
    console.log("location: " + window.location.hostname);
    var fetchTarget = "https://" + window.location.hostname + '/blogs/' + blogName + '/resources/headline';
    console.log("Fetching: " + fetchTarget);
    fetch(fetchTarget)
        .then(response => response.text())
        .then(data => document.getElementById(target).innerHTML = data)
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    MakeBigBlogDisplay('00_pricing');
});

function MakeBigBlogDisplay(blogName) {
    console.log("Creating blog: " + blogName);
    const anchor = document.createElement('a');
    anchor.className = 'stretchedContent';
    anchor.href = 'blogs/' + blogName + '/index.html';

    const div1 = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'blogs/' + blogName + '/resources/preview.png';
    div1.appendChild(img);

    const div2 = document.createElement('div');

    const div3 = document.createElement('div');
    div3.id = blogName + '_Title';

    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    div5.id = blogName + '_Description';
    div4.appendChild(div5);

    div2.appendChild(div3);
    div2.appendChild(div4);

    anchor.appendChild(div1);
    anchor.appendChild(div2);

    const targetDiv = document.getElementById(blogName);
    console.log(targetDiv)
    targetDiv.appendChild(div1);
    targetDiv.appendChild(div2);

    GetTitle(blogName, blogName + '_Title');
    GetDescription(blogName, blogName + '_Description');
}