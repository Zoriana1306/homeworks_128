"use strict";

var playlist = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var root = document.createElement('div');
root.id = 'root';
root.className = 'container';
var ol = document.createElement('ol');
var liTemplate = document.createElement('li');
liTemplate.classList.add('playlist-item');
playlist.forEach(function (item) {
  var li = liTemplate.cloneNode();
  li.innerText = item;
  ol.append(li);
});
root.append(ol);
document.body.prepend(root);
console.log(root);