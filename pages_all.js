document
  .querySelectorAll('li.nav-item a[href="/iserv/custom/858/vertretungsplan"]')
  .forEach((e) => {
    e.querySelector(".item-label").innerHTML = "Vertretungsplan";

    const old_icon = e.querySelector(".navigation-menu-icon");
    if (old_icon) {
      const img = document.createElement("img");
      img.className = "nav-svg-icon";
      img.src = browser.runtime.getURL("images/icon.svg");
      img.alt = "";
      e.replaceChild(img, old_icon);
    }
  });
