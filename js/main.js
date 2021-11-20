var pokemons = [
  {
    id: 1,
    num: "001",
    name: "Bulbasaur",
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: "20:00",
    multipliers: [1.58],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "002",
        name: "Ivysaur",
      },
      {
        num: "003",
        name: "Venusaur",
      },
    ],
  },
  {
    id: 2,
    num: "002",
    name: "Ivysaur",
    img: "http://www.serebii.net/pokemongo/pokemon/002.png",
    type: ["Grass", "Poison"],
    height: "0.99 m",
    weight: "13.0 kg",
    candy: "Bulbasaur Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.042,
    avg_spawns: 4.2,
    spawn_time: "07:00",
    multipliers: [1.2, 1.6],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    prev_evolution: [
      {
        num: "001",
        name: "Bulbasaur",
      },
    ],
    next_evolution: [
      {
        num: "003",
        name: "Venusaur",
      },
    ],
  },
  {
    id: 3,
    num: "003",
    name: "Venusaur",
    img: "http://www.serebii.net/pokemongo/pokemon/003.png",
    type: ["Grass", "Poison"],
    height: "2.01 m",
    weight: "100.0 kg",
    candy: "Bulbasaur Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: "11:30",
    multipliers: null,
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    prev_evolution: [
      {
        num: "001",
        name: "Bulbasaur",
      },
      {
        num: "002",
        name: "Ivysaur",
      },
    ],
  },
  {
    id: 4,
    num: "004",
    name: "Charmander",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    type: ["Fire"],
    height: "0.61 m",
    weight: "8.5 kg",
    candy: "Charmander Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.253,
    avg_spawns: 25.3,
    spawn_time: "08:45",
    multipliers: [1.65],
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "005",
        name: "Charmeleon",
      },
      {
        num: "006",
        name: "Charizard",
      },
    ],
  },
  {
    id: 5,
    num: "005",
    name: "Charmeleon",
    img: "http://www.serebii.net/pokemongo/pokemon/005.png",
    type: ["Fire"],
    height: "1.09 m",
    weight: "19.0 kg",
    candy: "Charmander Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: "19:00",
    multipliers: [1.79],
    weaknesses: ["Water", "Ground", "Rock"],
    prev_evolution: [
      {
        num: "004",
        name: "Charmander",
      },
    ],
    next_evolution: [
      {
        num: "006",
        name: "Charizard",
      },
    ],
  },
  {
    id: 6,
    num: "006",
    name: "Charizard",
    img: "http://www.serebii.net/pokemongo/pokemon/006.png",
    type: ["Fire", "Flying"],
    height: "1.70 m",
    weight: "90.5 kg",
    candy: "Charmander Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.0031,
    avg_spawns: 0.31,
    spawn_time: "13:34",
    multipliers: null,
    weaknesses: ["Water", "Electric", "Rock"],
    prev_evolution: [
      {
        num: "004",
        name: "Charmander",
      },
      {
        num: "005",
        name: "Charmeleon",
      },
    ],
  },
  {
    id: 7,
    num: "007",
    name: "Squirtle",
    img: "http://www.serebii.net/pokemongo/pokemon/007.png",
    type: ["Water"],
    height: "0.51 m",
    weight: "9.0 kg",
    candy: "Squirtle Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.58,
    avg_spawns: 58,
    spawn_time: "04:25",
    multipliers: [2.1],
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "008",
        name: "Wartortle",
      },
      {
        num: "009",
        name: "Blastoise",
      },
    ],
  },
  {
    id: 8,
    num: "008",
    name: "Wartortle",
    img: "http://www.serebii.net/pokemongo/pokemon/008.png",
    type: ["Water"],
    height: "0.99 m",
    weight: "22.5 kg",
    candy: "Squirtle Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.034,
    avg_spawns: 3.4,
    spawn_time: "07:02",
    multipliers: [1.4],
    weaknesses: ["Electric", "Grass"],
    prev_evolution: [
      {
        num: "007",
        name: "Squirtle",
      },
    ],
    next_evolution: [
      {
        num: "009",
        name: "Blastoise",
      },
    ],
  },
  {
    id: 9,
    num: "009",
    name: "Blastoise",
    img: "http://www.serebii.net/pokemongo/pokemon/009.png",
    type: ["Water"],
    height: "1.60 m",
    weight: "85.5 kg",
    candy: "Squirtle Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.0067,
    avg_spawns: 0.67,
    spawn_time: "00:06",
    multipliers: null,
    weaknesses: ["Electric", "Grass"],
    prev_evolution: [
      {
        num: "007",
        name: "Squirtle",
      },
      {
        num: "008",
        name: "Wartortle",
      },
    ],
  },
  {
    id: 10,
    num: "010",
    name: "Caterpie",
    img: "http://www.serebii.net/pokemongo/pokemon/010.png",
    type: ["Bug"],
    height: "0.30 m",
    weight: "2.9 kg",
    candy: "Caterpie Candy",
    candy_count: 12,
    egg: "2 km",
    spawn_chance: 3.032,
    avg_spawns: 303.2,
    spawn_time: "16:35",
    multipliers: [1.05],
    weaknesses: ["Fire", "Flying", "Rock"],
    next_evolution: [
      {
        num: "011",
        name: "Metapod",
      },
      {
        num: "012",
        name: "Butterfree",
      },
    ],
  },
  {
    id: 11,
    num: "011",
    name: "Metapod",
    img: "http://www.serebii.net/pokemongo/pokemon/011.png",
    type: ["Bug"],
    height: "0.71 m",
    weight: "9.9 kg",
    candy: "Caterpie Candy",
    candy_count: 50,
    egg: "Not in Eggs",
    spawn_chance: 0.187,
    avg_spawns: 18.7,
    spawn_time: "02:11",
    multipliers: [3.55, 3.79],
    weaknesses: ["Fire", "Flying", "Rock"],
    prev_evolution: [
      {
        num: "010",
        name: "Caterpie",
      },
    ],
    next_evolution: [
      {
        num: "012",
        name: "Butterfree",
      },
    ],
  },
  {
    id: 12,
    num: "012",
    name: "Butterfree",
    img: "http://www.serebii.net/pokemongo/pokemon/012.png",
    type: ["Bug", "Flying"],
    height: "1.09 m",
    weight: "32.0 kg",
    candy: "Caterpie Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.022,
    avg_spawns: 2.2,
    spawn_time: "05:23",
    multipliers: null,
    weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
    prev_evolution: [
      {
        num: "010",
        name: "Caterpie",
      },
      {
        num: "011",
        name: "Metapod",
      },
    ],
  },

  {
    id: 24,
    num: "024",
    name: "Arbok",
    img: "http://www.serebii.net/pokemongo/pokemon/024.png",
    type: ["Poison"],
    height: "3.51 m",
    weight: "65.0 kg",
    candy: "Ekans Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.072,
    avg_spawns: 7.2,
    spawn_time: "01:50",
    multipliers: null,
    weaknesses: ["Ground", "Psychic"],
    prev_evolution: [
      {
        num: "023",
        name: "Ekans",
      },
    ],
  },
  {
    id: 25,
    num: "025",
    name: "Pikachu",
    img: "http://www.serebii.net/pokemongo/pokemon/025.png",
    type: ["Electric"],
    height: "0.41 m",
    weight: "6.0 kg",
    candy: "Pikachu Candy",
    candy_count: 50,
    egg: "2 km",
    spawn_chance: 0.21,
    avg_spawns: 21,
    spawn_time: "04:00",
    multipliers: [2.34],
    weaknesses: ["Ground"],
    next_evolution: [
      {
        num: "026",
        name: "Raichu",
      },
    ],
  },
  {
    id: 26,
    num: "026",
    name: "Raichu",
    img: "http://www.serebii.net/pokemongo/pokemon/026.png",
    type: ["Electric"],
    height: "0.79 m",
    weight: "30.0 kg",
    candy: "Pikachu Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.0076,
    avg_spawns: 0.76,
    spawn_time: "23:58",
    multipliers: null,
    weaknesses: ["Ground"],
    prev_evolution: [
      {
        num: "025",
        name: "Pikachu",
      },
    ],
  },
  {
    id: 27,
    num: "027",
    name: "Sandshrew",
    img: "http://www.serebii.net/pokemongo/pokemon/027.png",
    type: ["Ground"],
    height: "0.61 m",
    weight: "12.0 kg",
    candy: "Sandshrew Candy",
    candy_count: 50,
    egg: "5 km",
    spawn_chance: 1.11,
    avg_spawns: 111,
    spawn_time: "01:58",
    multipliers: [2.45],
    weaknesses: ["Water", "Grass", "Ice"],
    next_evolution: [
      {
        num: "028",
        name: "Sandslash",
      },
    ],
  },

  {
    id: 32,
    num: "032",
    name: "Nidoran ♂",
    img: "http://www.serebii.net/pokemongo/pokemon/032.png",
    type: ["Poison"],
    height: "0.51 m",
    weight: "9.0 kg",
    candy: "Nidoran ♂ (Male) Candy",
    candy_count: 25,
    egg: "5 km",
    spawn_chance: 1.31,
    avg_spawns: 131,
    spawn_time: "01:12",
    multipliers: [1.64, 1.7],
    weaknesses: ["Ground", "Psychic"],
    next_evolution: [
      {
        num: "033",
        name: "Nidorino",
      },
      {
        num: "034",
        name: "Nidoking",
      },
    ],
  },
  {
    id: 33,
    num: "033",
    name: "Nidorino",
    img: "http://www.serebii.net/pokemongo/pokemon/033.png",
    type: ["Poison"],
    height: "0.89 m",
    weight: "19.5 kg",
    candy: "Nidoran ♂ (Male) Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.083,
    avg_spawns: 8.3,
    spawn_time: "09:02",
    multipliers: [1.83],
    weaknesses: ["Ground", "Psychic"],
    prev_evolution: [
      {
        num: "032",
        name: "Nidoran(Male)",
      },
    ],
    next_evolution: [
      {
        num: "034",
        name: "Nidoking",
      },
    ],
  },
  {
    id: 34,
    num: "034",
    name: "Nidoking",
    img: "http://www.serebii.net/pokemongo/pokemon/034.png",
    type: ["Poison", "Ground"],
    height: "1.40 m",
    weight: "62.0 kg",
    candy: "Nidoran ♂ (Male) Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: "12:16",
    multipliers: null,
    weaknesses: ["Water", "Ice", "Ground", "Psychic"],
    prev_evolution: [
      {
        num: "032",
        name: "Nidoran(Male)",
      },
      {
        num: "033",
        name: "Nidorino",
      },
    ],
  },
  {
    id: 1,
    num: "001",
    name: "Bulbasaur",
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: "20:00",
    multipliers: [1.58],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "002",
        name: "Ivysaur",
      },
      {
        num: "003",
        name: "Venusaur",
      },
    ],
  },
];

var elBlock = document.querySelector("#pokemon_block");

elBlock.innerHTML = null;

for (var item in pokemons) {
  var newOrder = document.createElement("ol");
  var newList = document.createElement("li");
  var newImage = document.createElement("img");
  var newHeader = document.createElement("h2");
  var newParagraph = document.createElement("p");

  elBlock.appendChild(newList);

  elBlock.classList.add("block__ordered");
  newList.classList.add("block__list");

  newImage.classList.add("block__image");
  newImage.setAttribute("src", pokemons[item].img);
  newImage.setAttribute("alt", "pokemon image");
  newImage.setAttribute("width", "200");
  newImage.setAttribute("height", "auto");

  newHeader.classList.add("block__header2");
  newParagraph.classList.add("block__paragraph");

  newHeader.textContent = "Name: " + pokemons[item].name;
  newParagraph.textContent = "Type: " + pokemons[item].type;

  newList.appendChild(newImage);
  newList.appendChild(newHeader);
  newList.appendChild(newParagraph);

  elBlock.appendChild(newList);
}