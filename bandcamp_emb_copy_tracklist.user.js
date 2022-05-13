// ==UserScript==
// @name        Copy Bandcamp embedded player tracklist
// @description Copy Bandcamp embedded player tracklist to clipboard (on load)
// @version     2022.5.12.1
// @namespace   zas/various_userscripts
// @downloadURL https://raw.github.com/zas/various_userscripts/main/bandcamp_emb_copy_tracklist.user.js
// @updateURL   https://raw.github.com/zas/various_userscripts/main/bandcamp_emb_copy_tracklist.user.js
// @match       https://bandcamp.com/EmbeddedPlayer*
// @grant       GM_setClipboard
// @author      zas
// ==/UserScript==

(function() {
    'use strict';

    var text = ""
    var ul = document.getElementById("tracklist_ul");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        var tracknum = items[i].getElementsByClassName("tracknum")[0].innerText;
        var title = items[i].getElementsByClassName("tracktitle")[0].innerText;
        var tracktime = items[i].getElementsByClassName("tracktime")[0].innerText;
        text += tracknum + " " + title + " (" + tracktime + ")\n";
    }
    if (text != "") {
        console.log(text);
        GM_setClipboard(text);
    }
})();
