function loadcss() {
    let css = '/local/fonts.css?v=0.005'

    let link = document.createElement('link');
    let head = document.getElementsByTagName('head')[0];
    let tmp;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    tmp = link.cloneNode(true);
    tmp.href = css;
    head.appendChild(tmp);
    console.info('%c Font Style sheet loaded', 'color: white; background: #000; font-weight: 700;');
}
loadcss();