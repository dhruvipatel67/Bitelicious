var randomBackground = Math.ceil(Math.random() * 30);

var backgroundimg = "ProjectImages/background" + randomBackground + ".jpg";

var style = document.createElement('style');

style.innerHTML = `
  .top::before {
    background: url('${backgroundimg}') no-repeat center center/cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 118%;
    z-index: -1;
    opacity: 0.3;
  }
`;

document.head.appendChild(style);


// var randomBackground = Math.ceil(Math.random() * 30);
// var backgroundimg = "background" + randomBackground + ".jpg"
// getComputedStyle(document.querySelector('.top','::before')).setProperty('background') = backgroundimg;
// getComputedStyle(document.querySelector('.top','::before')).backgroundImage = backgroundimg;