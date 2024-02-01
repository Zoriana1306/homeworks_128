const playlist = ['"LED ZEPPELIN" - "STAIRWAY TO HEAVEN"', '"QUEEN" - "BOHEMIAN RHAPSODY"', '"LYNYRD SKYNYRD" - "FREE BIRD"', '"DEEP PURPLE" - "SMOKE ON THE WATER"', '"JIMI HENDRIX" - "ALL ALONG THE WATCHTOWER"', '"AC/DC"- "BACK IN BLACK"', '"QUEEN" - "WE WILL ROCK YOU"', '"METALLICA" - "ENTER SANDMAN"'];

const root = document.createElement('div');
root.id = 'root';
root.className = 'container';

const ol = document.createElement('ol');

const liTemplate = document.createElement('li');
liTemplate.classList.add('playlist-item');

playlist.forEach((item) => {
    const li = liTemplate.cloneNode();
    li.innerText = item;
    ol.append(li)
})

root.append(ol)

document.body.prepend(root);

console.log(root);