$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.get(appendUrl, function (result) {
        var appendElm = $('#append');

        for (var i = 0; i < result.length; i++) {
            var post = result[i];
            //<li>Index: [index] Title: [object title]</li>
            var html = '<li>Index ' + i + ' Title: ' + post.title + '</li>';

            appendElm.append(html);

        }
    });

    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    $.get(prependUrl, function (result) {
        var prependElm = $('#prepend');

        for (var i = 0; i < result.length; i++) {
            var post = result[i];
            //<li>Index: [index] Title: [object title]</li>
            var html = '<li>Index ' + i + ' Title: ' + post.title + '</li>';

            prependElm.prepend(html);

        }
    });
});