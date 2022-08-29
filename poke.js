let grid = document.querySelector("#grid");
// let btn = document.getElementById("btn")
const couleur = {
  grass: '#78c850',
ground: '#E2BF65',
dragon: '#6F35FC',
fire: '#F58271',
electric: '#F7D02C',
fairy: '#D685AD',
poison: '#966DA3',
bug: '#B3F594',
water: '#6390F0',
normal: '#D9D5D8',
psychic: '#F95587',
flying: '#A98FF3',
fighting: '#C25956',
  rock: '#B6A136',
  ghost: '#735797',
  ice: '#96D9D6'
};



let dataPokemon = [];
// let pokemonId = []




  for (let i = 1; i < 152; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((reponse) => reponse.json())
      .then((datapoke) => {
        dataPokemon.push(datapoke)
        // pokemonId.push(datapoke.id)
        let divi = document.createElement("div");
        divi.setAttribute("class", " col-sm-3 d-flex justify-content-center flex-column text-center");
        let nomPoke = document.createElement("h2");
        // nomPoke.setAttribute("class", "titreRecherche");
        let imagePoke = document.createElement("img");
        let typePoke = document.createElement("p");
        let pvPoke = document.createElement("p");
        let heightPoke = document.createElement("p");
        let weightPoke = document.createElement("p");

        nomPoke.innerHTML =" "+ datapoke.name               // "#id" + datapoke.id 
        imagePoke.src = datapoke.sprites.front_default;
        typePoke.innerHTML ="type : "+ datapoke.types[0].type.name;
        pvPoke.innerHTML = "PV : " + datapoke.stats[0].base_stat;
        heightPoke.innerHTML = "taille : " + datapoke.height + " cm";
        weightPoke.innerHTML = "poids : " + datapoke.weight + " kg";
        
        
        
        divi.style.background = couleur[datapoke.types[0].type.name];  // met la couleur en fonction du pokemon en recuperant dans la constante
        
        
        
        divi.appendChild(nomPoke);
        divi.appendChild(imagePoke);
        divi.appendChild(typePoke);
        divi.appendChild(pvPoke);
        divi.appendChild(heightPoke);
        divi.appendChild(weightPoke);

        grid.appendChild(divi);
      });

    
}


// // function trie
// // function qui compare les nombres
// function compareNombres(a, b) {
//   return a - b;
// }
// //fonction qui trie de facon a avoir 1-2-10 et pas 1-10-2 grace a l'argument function compare
// function trieIdPokemon() {

//   pokemonId.sort(compareNombres);
//   console.log(pokemonId)

// }

// let btnTrie = document.getElementById("trie")

// btnTrie.addEventListener("click", () =>{

//   trieIdPokemon();
//   console.log(dataPokemon)
  

// })





// partie recherche compliqué mais réussite 
const searchInput = document.querySelector('.recherche-poke input');  // cible l'input 

searchInput.addEventListener('keyup', function(){


let divRecherche = document.querySelectorAll("#grid div")   // cible les div creer
let titreRecherche = document.querySelectorAll("h2") // cible les titre creer
let titleValue;
// console.log(divRecherche)
// console.log(titreRecherche)
const input = searchInput.value

for (let i = 0; i < divRecherche.length; i++) {
  
  titleValue = titreRecherche[i].innerText;
  console.log(titleValue)
  
  if(titleValue.indexOf(input) > -1) {
      divRecherche[i].classList.remove("d-none");
  } else {
      divRecherche[i].classList.add("d-none");
  }
  
}

})


// petit effet de l'ecriture qui se leve

searchInput.addEventListener('input', function(e) {

  if(e.target.value !== "") {
      e.target.parentNode.classList.add('active-input');
  } else if (e.target.value === "") {
      e.target.parentNode.classList.remove('active-input');
  }

})
  

