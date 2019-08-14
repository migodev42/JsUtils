
function initWebGL(selector) {
  return new Promise((resolve, reject) => {
    const canvas = document.querySelector(selector);
    const gl = canvas.getContext("webgl");

    if (gl === null) {
      alert("Unable to init WebGL,\n 您的浏览器可能不支持WebgL");
      reject();
    } else {
      resolve(gl)
    }
  })
}

