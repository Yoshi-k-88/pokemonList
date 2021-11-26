let pokemonList = [
  {name: "Blastoise", height: 1.6, type: ["water"], ability:["Rain-dish","Torrent"]},
  {name: "Venusaur", height: 2, type: ["grass", "poison"], ability: ["Chlorophyll", "Overgrow"]},
  {name: "Charizard", height: 1.7 , type: ["fire", "flying"], ability: ["Blaze", "Solar-power"]},
  {name: "Beedrill", height: 1, type: ["bug","poison"], ability: ["Swarm", "Sniper"]},
  ];

function addListItem(pokemon) {
  let pokemonListing = document.querySelector('.polemonList');
}
  let listItem = document.createElement('li');
  let button =document.createElement('button')
  button.innerText = pokemon.name;
  button.classList.add('pokemonButton','show-modal');
  listItem.appendChild(button);
  pokemonListing.appendChild(listItem);

  //add Event Listener to button
  button.addEventListener('click', function(event)){
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
   });
   }
