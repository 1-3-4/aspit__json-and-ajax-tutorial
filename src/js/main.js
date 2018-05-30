// Nået til 28:30 i video: https://www.youtube.com/watch?v=rJesac0_Ftw

// JSON variable (an array containing objects):
    // Java
    // Script
    // Object
    // Notation
var pets = [
    {
        "name": "Meowsalot",
        "species": "cat",
        "favFood": "tuna"
    },
    {
        "name": "Barky",
        "species": "dog",
        "favFood": "carrots"
    },
    {}
];
var url = 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json';
var btn = document.getElementById('btn');
var container = document.getElementById('animal-info');
var pageCounter = 1;

btn.addEventListener('click', function () {
    // Create an instance of a ajax request:
        // Asynchonous ('in the background', not requireing a page refresh)
        // Javascript
        // And
        // XML (replaced by JSON)
    var ajaxRequest = new XMLHttpRequest();
    // Open the ajax request, get data from url:
    ajaxRequest.open('GET', url);
    // What to do once the request is open/active:
    ajaxRequest.onload = function () {
        // console.log(ajaxRequest.responseText);
        var ajaxData = JSON.parse(ajaxRequest.responseText);
        // console.log(ajaxData[0]);
        renderHTML( ajaxData );
    };
    // Send request:
    ajaxRequest.send();
});
function renderHTML ( data ) {
    var htmlStr = '';

    for (var i = 0; i < data.length; i++) {
        htmlStr += '<p>' + data[i].name + ' is a ' + data[i].species + '.</p>'
    }

    container.insertAdjacentHTML('beforeend', htmlStr);
}
