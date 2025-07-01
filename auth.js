const imageUrls = [
  "https://fsg-preetz.de/wp-content/uploads/2023/10/slide-fsg01.jpg",
  "https://fsg-preetz.de/wp-content/uploads/2023/10/slide-fsg02.jpg",
  "https://fsg-preetz.de/wp-content/uploads/2023/10/slide-fsg03.jpg",
  "https://fsg-preetz.de/wp-content/uploads/2023/10/slide-fsg04.jpg",
];

document.querySelector("header").style.backgroundImage = `url(${
  imageUrls[Math.floor(Math.random() * imageUrls.length)]
})`;
