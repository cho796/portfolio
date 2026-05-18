const mvImg = ['img/mv1.jpeg','img/mv2.png','img/mv3.jpg']

const imgNum = Math.floor( Math.random() * mvImg.length);
document.getElementById('mvDom').src = mvImg[imgNum];