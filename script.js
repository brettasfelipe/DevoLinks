function toggleMode() {
  const html = document.documentElement // documentElement = html e body = body / document = representacao do documento em forma de objeto JS

  // if(html.classList.contains("light")) {
  //   html.classList.remove("light")
  // }
  // else {
  //   html.classList.add("light")
  // }

  // ou
  html.classList.toggle("light") // exerce a mesma funcao desse if else, funciona como um "interruptor"

  const img = document.querySelector("#profile img") // funcao query selector pesquisa pelo seletor, o argumento sera o seletor CSS

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Anakin.png")
  } else {
    img.setAttribute("src", "./assets/Vader.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Anakin Skywalker")
  } else {
    img.setAttribute("alt", "Foto de Darth Vader")
  }
}
