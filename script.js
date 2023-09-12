const container = document.querySelector('board');
console.log(container)

let pixs = "";
for (let i=256; i>0; i--) {
    pixs += '<div class="box"></div>';
};
container.innerHTML+= pixs;

