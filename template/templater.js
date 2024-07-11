var iframe;

document.addEventListener('DOMContentLoaded', function() {
    var bodyTag = document.querySelector('body');
    var headTag = document.querySelector('head');

    var src = "";
    var templates = document.head.querySelectorAll('template');
    if(templates.length == 1) {
        src = templates[0].innerHTML;
    }
    else {
        src = 'template/template.html';
    }
    fetch(src)
        .then(response => response.text())
        .then(html => {
            console.log("Evaluating template at: " + src);
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');

            var templateBody = doc.body;
            var templateHead = doc.head;
            
            templateBody.querySelector('#CustomBody').innerHTML = bodyTag.innerHTML;
            if(bodyTag.hasAttributes) {
                templateBody.querySelector('#CustomBody').setAttribute('style', bodyTag.getAttribute('style'));
                bodyTag.setAttribute('style', "");
            }

            templateHead.innerHTML = headTag.innerHTML += templateHead.innerHTML;

            bodyTag.innerHTML = templateBody.innerHTML;
            headTag.innerHTML = templateHead.innerHTML;
    });
});