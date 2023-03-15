function minCSS(css) {
  css = css.replace(/\/\*[\s\S]*?\*\/|\/\/.*?$/gm, '');
  css = css.replace(/\s+/g, ' ').replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
  css = css.replace(/\{\s*/g, '{');
  css = css.replace(/\}\s*/g, '}');
  css = css.replace(/\:\s*/g, ':');
  css = css.replace(/\,\s*/g, ',');
  return css;
}
function minJS(js) {
  js = js.replace(/\/\*[\s\S]*?\*\/|\/\/.*?$/gm, '');
  js = js.replace(/\s+/g, ' ');
  js = js.replace(/\s*([\=\+\-\*\/\%\&\|\^\!\~\?\<\>\,\;\:\{\}\(\)\[\]])\s*/g, '$1');
  js = js.replace(/(?<=\${[^}]+}) /g, '');
  return js;
}
