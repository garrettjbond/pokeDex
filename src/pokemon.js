const pokemon = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png"
    },
    {
      id: 2,
      name: "Ivysaur",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/002.png"
    },
    {
      id: 3,
      name: "Venasaur",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/003.png"
    },
    {
      id: 4,
      name: "Charmander",
      type: "fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png"
    },
    {
      id: 5,
      name: "Charmeleon",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/005.png"
    },
    {
      id: 6,
      name: "Charizard",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/006.png"
    },
    {
      id: 7,
      name: "Squirtle",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png"
    },
    {
      id: 8,
      name: "Wartortle",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/008.png"
    },
    {
      id: 9,
      name: "Blastoise",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/009.png"
    },
    {
      id: 10,
      name: "Caterpie",
      type: "Bug",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/010.png"
    },
    {
      id: 11,
      name: "Metapod",
      type: "Bug",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/011.png"
    },
    {
      id: 12,
      name: "Butterfree",
      type: "Bug/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/012.png"
    },
    {
      id: 13,
      name: "Weedle",
      type: "Bug/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/013.png"
    },
    {
      id: 14,
      name: "Kakuna",
      type: "Bug/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/014.png"
    },
    {
      id: 15,
      name: "Beedrill",
      type: "Bug/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/015.png"
    },
    {
      id: 16,
      name: "Pidgey",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/016.png"
    },
    {
      id: 17,
      name: "Pidgeotoo",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/017.png"
    },
    {
      id: 18,
      name: "Pidgeot",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/018.png"
    },
    {
      id: 19,
      name: "Rattata",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/019.png"
    },
    {
      id: 20,
      name: "Raticate",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/020.png"
    },
    {
      id: 21,
      name: "Spearow",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/021.png"
    },
    {
      id: 22,
      name: "Fearow",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/022.png"
    },
    {
      id: 23,
      name: "Ekans",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/023.png"
    },
    {
      id: 24,
      name: "Arbok",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/024.png"
    },
    {
      id: 25,
      name: "Pikachu",
      type: "Electric",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/025.png"
    },
    {
      id: 26,
      name: "Raichu",
      type: "Electric",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/026.png"
    },
    {
      id: 27,
      name: "Sandshrew",
      type: "Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/027.png"
    },
    {
      id: 28,
      name: "Sandslash",
      type: "Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/028.png"
    },
    {
      id: 29,
      name: "Nidoran♀",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/029.png"
    },
    {
      id: 30,
      name: "Nidorina",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/030.png"
    },
    {
      id: 31,
      name: "Nidoqueen",
      type: "Poison/Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/031.png"
    },
    {
      id: 32,
      name: "Nidoran♂",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/032.png"
    },
    {
      id: 33,
      name: "Nidorino",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/033.png"
    },
    {
      id: 34,
      name: "Nidoking",
      type: "Poison/Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/034.png"
    },
    {
      id: 35,
      name: "Clefairy",
      type: "Fairy",
      imgURL1: "https://www.dittobase.com/images/type-icons/fairy.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/035.png"
    },
    {
      id: 36,
      name: "Clefable",
      type: "Fair",
      imgURL1: "https://www.dittobase.com/images/type-icons/fairy.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/036.png"
    },
    {
      id: 37,
      name: "Vulpix",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/037.png"
    },
    {
      id: 38,
      name: "Ninetales",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/038.png"
    },
    {
      id: 39,
      name: "Jigglypuff",
      type: "Normal/Fairy",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/039.png"
    },
    {
      id: 40,
      name: "Wigglytuff",
      type: "Normal/Fairy",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/040.png"
    },
    {
      id: 41,
      name: "Zubat",
      type: "Poison/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/041.png"
    },
    {
      id: 42,
      name: "Golbat",
      type: "Poison/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/042.png"
    },
    {
      id: 43,
      name: "Oddish",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/043.png"
    },
    {
      id: 44,
      name: "Gloom",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/044.png"
    },
    {
      id: 45,
      name: "Vileplume",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/045.png"
    },
    {
      id: 46,
      name: "Paras",
      type: "Bug/Grass",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/046.png"
    },
    {
      id: 47,
      name: "Parasect",
      type: "Bug/Grass",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/047.png"
    },
    {
      id: 48,
      name: "Venonat",
      type: "Bug/poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/048.png"
    },
    {
      id: 49,
      name: "Venomoth",
      type: "Bug/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/049.png"
    },
    {
      id: 50,
      name: "Diglett",
      type: "Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/050.png"
    },
    {
      id: 51,
      name: "Dugtrio",
      type: "Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/051.png"
    },
    {
      id: 52,
      name: "Meowth",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/052.png"
    },
    {
      id: 53,
      name: "Persian",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/053.png"
    },
    {
      id: 54,
      name: "Psyduck",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/054.png"
    },
    {
      id: 55,
      name: "Golduck",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/055.png"
    },
    {
      id: 56,
      name: "Mankey",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/056.png"
    },
    {
      id: 57,
      name: "Primeape",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/057.png"
    },
    {
      id: 58,
      name: "Growlithe",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/058.png"
    },
    {
      id: 59,
      name: "Arcanine",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/059.png"
    },
    {
      id: 60,
      name: "Poliwage",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/060.png"
    },
    {
      id: 61,
      name: "Poliwhirl",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/061.png"
    },
    {
      id: 62,
      name: "Poliwrath",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/062.png"
    },
    {
      id: 63,
      name: "Abra",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/063.png"
    },
    {
      id: 64,
      name: "Kadabra",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/064.png"
    },
    {
      id: 65,
      name: "Alakazam",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/065.png"
    },
    {
      id: 66,
      name: "Machop",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/066.png"
    },
    {
      id: 67,
      name: "Machoke",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/067.png"
    },
    {
      id: 68,
      name: "Machamp",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/068.png"
    },
    {
      id: 69,
      name: "Bellsprout",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/069.png"
    },
    {
      id: 70,
      name: "Weepinbell",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/070.png"
    },
    {
      id: 71,
      name: "Victreebel",
      type: "Grass/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/071.png"
    },
    {
      id: 72,
      name: "Tentacool",
      type: "Water/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/072.png"
    },
    {
      id: 73,
      name: "Tentacruel",
      type: "Water/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/073.png"
    },
    {
      id: 74,
      name: "Geodude",
      type: "Rock/Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/074.png"
    },
    {
      id: 75,
      name: "Graveler",
      type: "Rock/Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/075.png"
    },
    {
      id: 76,
      name: "Golem",
      type: "Rock/Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/076.png"
    },
    {
      id: 77,
      name: "Ponyta",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/077.png"
    },
    {
      id: 78,
      name: "Rapidash",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/078.png"
    },
    {
      id: 79,
      name: "Slowpoke",
      type: "Water/Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/079.png"
    },
    {
      id: 80,
      name: "Slowbro",
      type: "Water/Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/080.png"
    },
    {
      id: 81,
      name: "Magnemite",
      type: "Electric/Steel",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/081.png"
    },
    {
      id: 82,
      name: "Magneton",
      type: "Electric/Steel",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/082.png"
    },
    {
      id: 83,
      name: "Farfetch'd",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/083.png"
    },
    {
      id: 84,
      name: "Doduo",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/084.png"
    },
    {
      id: 85,
      name: "Dodrio",
      type: "Normal/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/085.png"
    },
    {
      id: 86,
      name: "Seel",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/086.png"
    },
    {
      id: 87,
      name: "Dewgong",
      type: "Water/Ice",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/087.png"
    },
    {
      id: 88,
      name: "Grimer",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/088.png"
    },
    {
      id: 89,
      name: "Muk",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/089.png"
    },
    {
      id: 90,
      name: "Shellder",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/090.png"
    },
    {
      id: 91,
      name: "Cloyster",
      type: "Water/Ice",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/091.png"
    },
    {
      id: 92,
      name: "Gastly",
      type: "Ghost/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/092.png"
    },
    {
      id: 93,
      name: "Haunter",
      type: "Ghost/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/093.png"
    },
    {
      id: 94,
      name: "Gengar",
      type: "Ghost/Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/094.png"
    },
    {
      id: 95,
      name: "Onyx",
      type: "Rock/Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/095.png"
    },
    {
      id: 96,
      name: "Drozee",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/096.png"
    },
    {
      id: 97,
      name: "Hypno",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/097.png"
    },
    {
      id: 98,
      name: "Krabby",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/098.png"
    },
    {
      id: 99,
      name: "Kingler",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/099.png"
    },
    {
      id: 100,
      name: "Voltorb",
      type: "Electric",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/100.png"
    },
    {
      id: 101,
      name: "Electrode",
      type: "Electric",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/101.png"
    },
    {
      id: 102,
      name: "Exeggcute",
      type: "Grass/Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/102.png"
    },
    {
      id: 103,
      name: "Exeggutor",
      type: "Grass/Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/103.png"
    },
    {
      id: 104,
      name: "Cubone",
      type: "Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/104.png"
    },
    {
      id: 105,
      name: "Marowak",
      type: "Ground",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/105.png"
    },
    {
      id: 106,
      name: "Hitmonlee",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/106.png"
    },
    {
      id: 107,
      name: "Hitmonchan",
      type: "Fighting",
      imgURL1: "https://www.dittobase.com/images/type-icons/fighting.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/107.png"
    },
    {
      id: 108,
      name: "Lickitung",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/108.png"
    },
    {
      id: 109,
      name: "Koffing",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/109.png"
    },
    {
      id: 110,
      name: "Weezing",
      type: "Poison",
      imgURL1: "https://www.dittobase.com/images/type-icons/poison.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/110.png"
    },
    {
      id: 111,
      name: "Rhyhorn",
      type: "Ground/Rock",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/111.png"
    },
    {
      id: 112,
      name: "Rhydon",
      type: "Ground/Rock",
      imgURL1: "https://www.dittobase.com/images/type-icons/ground.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/112.png"
    },
    {
      id: 113,
      name: "Chansey",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/113.png"
    },
    {
      id: 114,
      name: "Tangela",
      type: "Grass",
      imgURL1: "https://www.dittobase.com/images/type-icons/grass.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/114.png"
    },
    {
      id: 115,
      name: "Kangaskhan",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/115.png"
    },
    {
      id: 116,
      name: "Horsea",
      type: "water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/116.png"
    },
    {
      id: 117,
      name: "Seadra",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/117.png"
    },
    {
      id: 118,
      name: "Goldeen",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/118.png"
    },
    {
      id: 119,
      name: "Seaking",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/119.png"
    },
    {
      id: 120,
      name: "Staryu",
      type: "water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/120.png"
    },
    {
      id: 121,
      name: "Starmie",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/121.png"
    },
    {
      id: 122,
      name: "Mr. Mime",
      type: "Psychic/Fairy",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/122.png"
    },
    {
      id: 123,
      name: "Scyther",
      type: "Bug/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/123.png"
    },
    {
      id: 124,
      name: "Jynx",
      type: "Ice/Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/ice.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/124.png"
    },
    {
      id: 125,
      name: "Electabuzz",
      type: "Electric",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/125.png"
    },
    {
      id: 126,
      name: "Magmar",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/126.png"
    },
    {
      id: 127,
      name: "Pinsir",
      type: "Bug",
      imgURL1: "https://www.dittobase.com/images/type-icons/bug.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/127.png"
    },
    {
      id: 128,
      name: "Tauros",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/128.png"
    },
    {
      id: 129,
      name: "Magikarp",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/129.png"
    },
    {
      id: 130,
      name: "Gyarados",
      type: "water/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/130.png"
    },
    {
      id: 131,
      name: "Lapras",
      type: "Water/Ice",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/131.png"
    },
    {
      id: 132,
      name: "Ditto",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/132.png"
    },
    {
      id: 133,
      name: "Eevee",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/133.png"
    },
    {
      id: 134,
      name: "Vaporeon",
      type: "Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/water.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/134.png"
    },
    {
      id: 135,
      name: "Jolteon",
      type: "Electric",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/135.png"
    },
    {
      id: 136,
      name: "Flareon",
      type: "Fire",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/136.png"
    },
    {
      id: 137,
      name: "Porygon",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/137.png"
    },
    {
      id: 138,
      name: "Omanyte",
      type: "Rock/Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/138.png"
    },
    {
      id: 139,
      name: "Omastar",
      type: "Rock/Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/139.png"
    },
    {
      id: 140,
      name: "Kabuto",
      type: "Rock/Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/140.png"
    },
    {
      id: 141,
      name: "Kabutops",
      type: "Rock/Water",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/141.png"
    },
    {
      id: 142,
      name: "Aerodactyl",
      type: "Rock/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/rock.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/142.png"
    }, 
    {
      id: 143,
      name: "Snorlax",
      type: "Normal",
      imgURL1: "https://www.dittobase.com/images/type-icons/normal.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/143.png"
    },
    {
      id: 144,
      name: "Articuno",
      type: "Ice/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/ice.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/144.png"
    },
    {
      id: 145,
      name: "Zapdos",
      type: "Electric/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/electric.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/145.png"
    },
    {
      id: 146,
      name: "Moltres",
      type: "Fire/Flying",
      imgURL1: "https://www.dittobase.com/images/type-icons/fire.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/146.png"
    },
    {
      id: 147,
      name: "Dratini",
      type: "Dragon",
      imgURL1: "https://www.dittobase.com/images/type-icons/dragon.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/147.png"
    },
    {
      id: 148,
      name: "Dragonair",
      type: "Dragon",
      imgURL1: "https://www.dittobase.com/images/type-icons/dragon.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/148.png"
    },
    {
      id: 149,
      name: "Dragonite",
      type: "Dragon",
      imgURL1: "https://www.dittobase.com/images/type-icons/dragon.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/149.png"
    },
    {
      id: 150,
      name: "Mewtwo",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/150.png"
    },
    {
      id: 151,
      name: "Mew",
      type: "Psychic",
      imgURL1: "https://www.dittobase.com/images/type-icons/psychic.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/151.png"
    }
  ];
  
  export default pokemon;
  