let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'

let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
`
listaOrdenada.innerHTML = `
  <li><a href="https://www.google.com.br/">GOOGLE</a></li>
  <li><a href="https://www.google.com.br/maps/preview">GOOGLE MAPS</a></li>
  <li><a href="https://scholar.google.com.br/">GOOGLE ACADÊMINO</a></li>
`