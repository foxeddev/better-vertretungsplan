document
  .querySelectorAll('style, link[rel="stylesheet"]')
  .forEach((e) => e.remove());

const loading_img = document.createElement("img");
loading_img.src = browser.runtime.getURL("images/loading_animation.gif");
document.body.appendChild(loading_img);
