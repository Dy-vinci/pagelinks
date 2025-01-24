function toggleMode() {
  const html = document.body
  html.classList.toggle("light")

  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  //}

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // se tiver light mode, adicionar imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, mander a imagem normal.
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// substituir a imagem
