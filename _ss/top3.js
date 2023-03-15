function minCSS(css) {
  css = css.replace(/\/\*[\s\S]*?\*\/|\/\/.*?$/gm, '');
  css = css.replace(/\s+/g, ' ').replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
  css = css.replace(/\{\s*/g, '{');
  css = css.replace(/\}\s*/g, '}');
  css = css.replace(/\:\s*/g, ':');
  css = css.replace(/\,\s*/g, ',');
  return css;
}
function minJS(code) {
  let minifiedCode = code.replace(/(?<=\s)(`|\$\{)/g, " $1"); // tambahkan spasi sebelum template literal atau variable yang memiliki spasi sebelumnya
  minifiedCode = minifiedCode.replace(/\s+/g, " "); // hapus spasi berlebih
  minifiedCode = minifiedCode.replace(/(\r\n|\n|\r)/gm, ""); // hapus karakter baris baru
  minifiedCode = minifiedCode.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, ""); // hapus komentar
  return minifiedCode.trim(); // hapus spasi di awal dan akhir
}
