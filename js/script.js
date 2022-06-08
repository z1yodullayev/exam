const elResult = document.querySelector(".pokemon-list");


for (let pokemon of pokemons) {
     //CREATE ELEMENT
  let pokemonLi = document.createElement("li");
  let pokemonImg = document.createElement("img");
  let pokemonDiv = document.createElement("div");
  let pokemonTitle = document.createElement("h5");
  let pokemonText = document.createElement("p");
  let pokemonBox = document.createElement("div");
  let pokemonSpan1 = document.createElement("span");
  let pokemonSpan = document.createElement("span");

  //SET ATTTIBUTE
  pokemonLi.setAttribute("class", "card mb-3 border border-3 border-dark rounded-4");
  pokemonLi.style.width = "15rem";
  pokemonDiv.style.padding = "10px"
  pokemonImg.setAttribute( "src", pokemon.img);
  pokemonDiv.setAttribute("class", "border-top border-dark")
  pokemonImg.classList.add ("card-img-top");
  pokemonDiv.classList.add("card-body");
  pokemonTitle.classList.add("card-title");
  pokemonText.classList.add("card-text");
  pokemonSpan.classList.add("card-text", "inline-block");
  pokemonSpan1.classList.add("card-text");
  pokemonTitle.textContent = pokemon.name;
  pokemonText.textContent = pokemon.type;
  pokemonSpan.textContent = pokemon.weight;
  pokemonSpan.setAttribute("class", "ms-3")
  pokemonSpan1.textContent = pokemon.height;

 //APPEND
  elResult.appendChild(pokemonLi);
  pokemonLi.appendChild(pokemonImg);
  pokemonLi.appendChild(pokemonDiv);
  pokemonDiv.append(pokemonTitle, pokemonText, pokemonBox);
  pokemonBox.append(pokemonSpan1, pokemonSpan)
}