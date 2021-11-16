// ==UserScript==
// @name         reddit expand all comments button
// @namespace    http://www.reddit.com/
// @version      1.7
// @description  when you've collapsed a lot of comments on a reddit thread and don't want to uncollapse them all one by one
// @author       Antonio Lima
// @match        http://www.reddit.com/r/*/comments/*
// @match        https://www.reddit.com/r/*/comments/*
// @match        http://old.reddit.com/r/*/comments/*
// @match        https://old.reddit.com/r/*/comments/*
// @grant        none
// ==/UserScript==

$('div.panestack-title span.title').append('<style> #expand-all-comments { background-color: lightblue; cursor: pointer; } #expand-all-comments.clicked { background-color: darkorange; cursor: not-allowed; } </style><a href="#" id="expander" class="pretty-button">expand all comments</a>');

$('#expander').click(function(e){
    if($('.comment').hasClass("collapsed")) {
        $('.comment').removeClass("collapsed");
        $('.comment').addClass("noncollapsed");
        $('.expand').html("[–]");
    }
    //hides back deleted comments and comments with score below threshold
    $('.collapsed-for-reason').removeClass("noncollapsed");
    $('.collapsed-for-reason').addClass("collapsed");
    $('.deleted').removeClass("noncollapsed");
    $('.deleted').addClass("collapsed");
    //prevents jump to the top of the page
    e.preventDefault();
});
