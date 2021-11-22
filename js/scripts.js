let pokemonList = [
  {name: "Blastoise", height: 1.6, type: ["water"], ability:["Rain-dish","Torrent"]},
  {name: "Venusaur", height: 2, type: ["grass", "poison"], ability: ["Chlorophyll", "Overgrow"]},
  {name: "Charizard", height: 1.7 , type: ["fire", "flying"], ability: ["Blaze", "Solar-power"]},
  {name: "Beedrill", height: 1, type: ["bug","poison"], ability: ["Swarm", "Sniper"]},
  ];
// FOR LOOP TO DISPLAY POKEMON LIST
let text = " ";
for (let i = 0; i < pokemonList.length; i++){

  if(pokemonList[i].height <7 && pokemonList[i].height >1)
  {
  text = pokemonList[i];
  console.log ('pokemonList[i]' ,pokemonList[i]);
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height +")" +"<br>" + "<br>");
}
};
document.write('<ul>');
//Create a FOR loop to show Pokemon list
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
  //Add a conditional to show big Pokemon
  if (pokemonList[i].height >= 1) {
    document.write(' - Wow! That\'s big!');
  }
  document.write('</li>');
}
document.write('</ul>');
