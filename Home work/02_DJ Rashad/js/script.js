/* практика  js «Работа c документом ➡️ практика (3.9) */

let body = document.querySelector('body');
body.style['background-color'] = "#696969";

let page = document.querySelector('.page');
body.style['color'] = "ghostwhite";

let name = document.querySelector('.name');
name.innerHTML = "<p>DJ Rashad</p>";

let image = document.querySelector('img');
image.setAttribute('src', 'https://www.rokolectiv.ro/archive/2012/content/6.Day4/0.DJRashad/djSpinn.jpg');

let bio = document.querySelector('.short-bio');
bio.className += ' animated';