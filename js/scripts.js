let pokemonList = [
  {name: "Blastoise", height: 1.6, type: ["water"], ability:["Rain-dish","Torrent"]},
  {name: "Venusaur", height: 2, type: ["grass", "poison"], ability: ["Chlorophyll", "Overgrow"]},
  {name: "Charizard", height: 1.7 , type: ["fire", "flying"], ability: ["Blaze", "Solar-power"]},
  {name: "Beedrill", height: 1, type: ["bug","poison"], ability: ["Swarm", "Sniper"]},
  ];

let pokemonApp = (() => {
  let getAll = () => {
    return pokemonList
}
 return {
   getAll
 }
})()

pokemonApp.getAll().forEach((pokemon, index, pokemonList) => {
  if(index === 1) document.write('<ul>');
  document.write ('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')');
  //Add a conditional to show big POKEMON
  if (pokemon.height >= 2) {
    document.write('- Wow That\'s big!');
    }
    document.write('</li>');
    if(index === pokemonList.length) document.write('</ul>');
})
