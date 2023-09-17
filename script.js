const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');
const liveServer = document.querySelector('.live-server');

const htmlContainer = document.querySelector('.html-container');
const cssContainer = document.querySelector('.css-container');
const jsContainer = document.querySelector('.js-container');
const liveLoad = document.getElementById('live');
const liveLoadContainer = document.querySelector('.live-load');

html.onclick = () => {
    htmlContainer.style.display = 'block';
    cssContainer.style.display = 'none';
    jsContainer.style.display = 'none';

    html.classList.add('active');
    css.classList.remove('active');
    js.classList.remove('active');

    liveLoadContainer.style.opacity = '0';
    liveLoad.style.opacity = '1';
    liveServer.classList.remove('active');
}
css.onclick = () => {
    htmlContainer.style.display = 'none';
    cssContainer.style.display = 'block';
    jsContainer.style.display = 'none';

    html.classList.remove('active');
    css.classList.add('active');
    js.classList.remove('active');

    liveLoadContainer.style.opacity = '0';
    liveLoad.style.display = 'none';
    liveServer.classList.remove('active');
}
js.onclick = () => {
    htmlContainer.style.display = 'none';
    cssContainer.style.display = 'none';
    jsContainer.style.display = 'block';

    html.classList.remove('active');
    css.classList.remove('active');
    js.classList.add('active');

    liveLoadContainer.style.opacity = '0';
    liveLoad.style.display = 'none';
    liveServer.classList.remove('active');
}
liveServer.onclick = () => {
    liveLoadContainer.style.opacity = '1';
    liveLoad.style.display = 'block';
    liveServer.classList.add('active');

    htmlContainer.style.display = 'none';
    cssContainer.style.display = 'none';
    jsContainer.style.display = 'none';

    html.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active');
}


// liveServer toggle buttons activate
const liveClose = document.querySelector('.close');

liveClose.onclick = () => {
    liveLoadContainer.style.opacity = '0';
    liveLoad.style.display = 'none';
    liveServer.classList.remove('active');

    // liveServer closed and open HTML page 
    html.classList.add('active');
    htmlContainer.style.display = 'block';
}

// Run The code Editor
function run(){
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const liveCode = document.getElementById('live');

    liveCode.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode +"</style>";
    liveCode.contentWindow.eval(jsCode);
}


// Welcome page auto hide and closing
const autoHide = document.querySelector('.welcome-container');
const closeBtn = document.querySelector('.closing');

closeBtn.onclick = () => {
    autoHide.style.display = 'none';
    html.classList.add('active');
    htmlContainer.style.display = 'block';
}

setTimeout(() => {
    autoHide.style.display = 'none';
    html.classList.add('active');
    css.classList.remove('active');
    js.classList.remove('active');
    liveServer.classList.remove('active');

    // liveLoadContainer.style.opacity = '0';
    // liveLoad.style.display = 'none';

    htmlContainer.style.display = 'block';
},10000);



