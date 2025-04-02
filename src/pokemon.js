const pokemon = [
    {
      id: 1,
      registryNumber: "#001",
      name: "Bulbasaur",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png"
    },
    {
      id: 2,
      registryNumber: "#002",
      name: "Ivysaur",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/002.png"
    },
    {
      id: 3,
      registryNumber: "#003",
      name: "Venasaur",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/003.png"
    },
    {
      id: 4,
      registryNumber: "#004",
      name: "Charmander",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png"
    },
    {
      id: 5,
      registryNumber: "#005",
      name: "Charmeleon",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/005.png"
    },
    {
      id: 6,
      registryNumber: "#006",
      name: "Charizard",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/006.png"
    },
    {
      id: 7,
      registryNumber: "#007",
      name: "Squirtle",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png"
    },
    {
      id: 8,
      registryNumber: "#008",
      name: "Wartortle",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/008.png"
    },
    {
      id: 9,
      registryNumber: "#009",
      name: "Blastoise",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/009.png"
    },
    {
      id: 10,
      registryNumber: "#010",
      name: "Caterpie",
      type1: "Bug",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/010.png"
    },
    {
      id: 11,
      registryNumber: "#011",
      name: "Metapod",
      type1: "Bug",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/011.png"
    },
    {
      id: 12,
      registryNumber: "#012",
      name: "Butterfree",
      type1: "Bug",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/012.png"
    },
    {
      id: 13,
      registryNumber: "#013",
      name: "Weedle",
      type1: "Bug",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/013.png"
    },
    {
      id: 14,
      registryNumber: "#014",
      name: "Kakuna",
      type1: "Bug",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/014.png"
    },
    {
      id: 15,
      registryNumber: "#015",
      name: "Beedrill",
      type1: "Bug",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/015.png"
    },
    {
      id: 16,
      registryNumber: "#016",
      name: "Pidgey",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/016.png"
    },
    {
      id: 17,
      registryNumber: "#017",
      name: "Pidgeotoo",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/017.png"
    },
    {
      id: 18,
      registryNumber: "#0018",
      name: "Pidgeot",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/018.png"
    },
    {
      id: 19,
      registryNumber: "#019",
      name: "Rattata",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/019.png"
    },
    {
      id: 20,
      registryNumber: "#020",
      name: "Raticate",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/020.png"
    },
    {
      id: 21,
      registryNumber: "#021",
      name: "Spearow",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/021.png"
    },
    {
      id: 22,
      registryNumber: "#022",
      name: "Fearow",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/022.png"
    },
    {
      id: 23,
      registryNumber: "#023",
      name: "Ekans",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/023.png"
    },
    {
      id: 24,
      registryNumber: "#024",
      name: "Arbok",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/024.png"
    },
    {
      id: 25,
      registryNumber: "#025",
      name: "Pikachu",
      type1: "Electric",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/025.png"
    },
    {
      id: 26,
      registryNumber: "#026",
      name: "Raichu",
      type1: "Electric",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/026.png"
    },
    {
      id: 27,
      registryNumber: "#027",
      name: "Sandshrew",
      type1: "Ground",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/027.png"
    },
    {
      id: 28,
      registryNumber: "#028",
      name: "Sandslash",
      type1: "Ground",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/028.png"
    },
    {
      id: 29,
      registryNumber: "#029",
      name: "Nidoran♀",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/029.png"
    },
    {
      id: 30,
      registryNumber: "#030",
      name: "Nidorina",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/030.png"
    },
    {
      id: 31,
      registryNumber: "#031",
      name: "Nidoqueen",
      type1: "Poison",
      type2: "Ground",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/031.png"
    },
    {
      id: 32,
      registryNumber: "#032",
      name: "Nidoran♂",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/032.png"
    },
    {
      id: 33,
      registryNumber: "#033",
      name: "Nidorino",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/033.png"
    },
    {
      id: 34,
      registryNumber: "#034",
      name: "Nidoking",
      type1: "Poison",
      type2: "Ground",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/034.png"
    },
    {
      id: 35,
      registryNumber: "#035",
      name: "Clefairy",
      type1: "Fairy",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/035.png"
    },
    {
      id: 36,
      registryNumber: "#036",
      name: "Clefable",
      type1: "Fairy",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/036.png"
    },
    {
      id: 37,
      registryNumber: "#037",
      name: "Vulpix",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/037.png"
    },
    {
      id: 38,
      registryNumber: "#038",
      name: "Ninetales",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/038.png"
    },
    {
      id: 39,
      registryNumber: "#039",
      name: "Jigglypuff",
      type1: "Normal",
      type2: "Fairy",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/039.png"
    },
    {
      id: 40,
      registryNumber: "#040",
      name: "Wigglytuff",
      type1: "Normal",
      type2: "Fairy",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/040.png"
    },
    {
      id: 41,
      registryNumber: "#041",
      name: "Zubat",
      type1: "Poison",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/041.png"
    },
    {
      id: 42,
      registryNumber: "#042",
      name: "Golbat",
      type1: "Poison",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/042.png"
    },
    {
      id: 43,
      registryNumber: "#043",
      name: "Oddish",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/043.png"
    },
    {
      id: 44,
      registryNumber: "#044",
      name: "Gloom",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/044.png"
    },
    {
      id: 45,
      registryNumber: "#045",
      name: "Vileplume",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/045.png"
    },
    {
      id: 46,
      registryNumber: "#046",
      name: "Paras",
      type1: "Bug",
      type2: "Grass",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/046.png"
    },
    {
      id: 47,
      registryNumber: "#047",
      name: "Parasect",
      type1: "Bug",
      type2: "Grass",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/047.png"
    },
    {
      id: 48,
      registryNumber: "#048",
      name: "Venonat",
      type1: "Bug",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/048.png"
    },
    {
      id: 49,
      registryNumber: "#049",
      name: "Venomoth",
      type1: "Bug",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/049.png"
    },
    {
      id: 50,
      registryNumber: "#050",
      name: "Diglett",
      type1: "Ground",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/050.png"
    },
    {
      id: 51,
      registryNumber: "#051",
      name: "Dugtrio",
      type1: "Ground",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/051.png"
    },
    {
      id: 52,
      registryNumber: "#052",
      name: "Meowth",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/052.png"
    },
    {
      id: 53,
      registryNumber: "#053",
      name: "Persian",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/053.png"
    },
    {
      id: 54,
      registryNumber: "#054",
      name: "Psyduck",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/054.png"
    },
    {
      id: 55,
      registryNumber: "#055",
      name: "Golduck",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/055.png"
    },
    {
      id: 56,
      registryNumber: "#056",
      name: "Mankey",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/056.png"
    },
    {
      id: 57,
      registryNumber: "#057",
      name: "Primeape",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/057.png"
    },
    {
      id: 58,
      registryNumber: "#058",
      name: "Growlithe",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/058.png"
    },
    {
      id: 59,
      registryNumber: "#059",
      name: "Arcanine",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/059.png"
    },
    {
      id: 60,
      registryNumber: "#060",
      name: "Poliwage",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/060.png"
    },
    {
      id: 61,
      registryNumber: "#061",
      name: "Poliwhirl",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/061.png"
    },
    {
      id: 62,
      registryNumber: "#062",
      name: "Poliwrath",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/062.png"
    },
    {
      id: 63,
      registryNumber: "#063",
      name: "Abra",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/063.png"
    },
    {
      id: 64,
      registryNumber: "#064",
      name: "Kadabra",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/064.png"
    },
    {
      id: 65,
      registryNumber: "#065",
      name: "Alakazam",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/065.png"
    },
    {
      id: 66,
      registryNumber: "#066",
      name: "Machop",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/066.png"
    },
    {
      id: 67,
      registryNumber: "#067",
      name: "Machoke",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/067.png"
    },
    {
      id: 68,
      registryNumber: "#068",
      name: "Machamp",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/068.png"
    },
    {
      id: 69,
      registryNumber: "#069",
      name: "Bellsprout",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/069.png"
    },
    {
      id: 70,
      registryNumber: "#070",
      name: "Weepinbell",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/070.png"
    },
    {
      id: 71,
      registryNumber: "#071",
      name: "Victreebel",
      type1: "Grass",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/071.png"
    },
    {
      id: 72,
      registryNumber: "#072",
      name: "Tentacool",
      type1: "Water",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/072.png"
    },
    {
      id: 73,
      registryNumber: "#073",
      name: "Tentacruel",
      type1: "Water",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/073.png"
    },
    {
      id: 74,
      registryNumber: "#074",
      name: "Geodude",
      type1: "Rock",
      type2: "Ground",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/074.png"
    },
    {
      id: 75,
      registryNumber: "#075",
      name: "Graveler",
      type1: "Rock",
      type2: "Ground",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/075.png"
    },
    {
      id: 76,
      registryNumber: "#076",
      name: "Golem",
      type1: "Rock",
      type2: "Ground",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/076.png"
    },
    {
      id: 77,
      registryNumber: "#077",
      name: "Ponyta",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/077.png"
    },
    {
      id: 78,
      registryNumber: "#078",
      name: "Rapidash",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/078.png"
    },
    {
      id: 79,
      registryNumber: "#079",
      name: "Slowpoke",
      type1: "Water",
      type2: "Psychic",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/079.png"
    },
    {
      id: 80,
      registryNumber: "#080",
      name: "Slowbro",
      type1: "Water",
      type2: "Psychic",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/080.png"
    },
    {
      id: 81,
      registryNumber: "#081",
      name: "Magnemite",
      type1: "Electric",
      type2: "Steel",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/081.png"
    },
    {
      id: 82,
      registryNumber: "#082",
      name: "Magneton",
      type1: "Electric",
      type2: "Steel",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/082.png"
    },
    {
      id: 83,
      registryNumber: "#083",
      name: "Farfetch'd",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/083.png"
    },
    {
      id: 84,
      registryNumber: "#084",
      name: "Doduo",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/084.png"
    },
    {
      id: 85,
      registryNumber: "#085",
      name: "Dodrio",
      type1: "Normal",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/085.png"
    },
    {
      id: 86,
      registryNumber: "#086",
      name: "Seel",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/086.png"
    },
    {
      id: 87,
      registryNumber: "#087",
      name: "Dewgong",
      type1: "Water",
      type2: "Ice",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/087.png"
    },
    {
      id: 88,
      registryNumber: "#088",
      name: "Grimer",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/088.png"
    },
    {
      id: 89,
      registryNumber: "#089",
      name: "Muk",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/089.png"
    },
    {
      id: 90,
      registryNumber: "#090",
      name: "Shellder",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/090.png"
    },
    {
      id: 91,
      registryNumber: "#091",
      name: "Cloyster",
      type1: "Water",
      type2: "Ice",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/091.png"
    },
    {
      id: 92,
      registryNumber: "#092",
      name: "Gastly",
      type1: "Ghost",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/092.png"
    },
    {
      id: 93,
      registryNumber: "#093",
      name: "Haunter",
      type1: "Ghost",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/093.png"
    },
    {
      id: 94,
      registryNumber: "#094",
      name: "Gengar",
      type1: "Ghost",
      type2: "Poison",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/094.png"
    },
    {
      id: 95,
      registryNumber: "#095",
      name: "Onyx",
      type1: "Rock",
      type2: "Ground",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/095.png"
    },
    {
      id: 96,
      registryNumber: "#096",
      name: "Drozee",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/096.png"
    },
    {
      id: 97,
      registryNumber: "#097",
      name: "Hypno",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/097.png"
    },
    {
      id: 98,
      registryNumber: "#098",
      name: "Krabby",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/098.png"
    },
    {
      id: 99,
      registryNumber: "#099",
      name: "Kingler",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/099.png"
    },
    {
      id: 100,
      registryNumber: "#100",
      name: "Voltorb",
      type1: "Electric",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/100.png"
    },
    {
      id: 101,
      registryNumber: "#101",
      name: "Electrode",
      type1: "Electric",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/101.png"
    },
    {
      id: 102,
      registryNumber: "#102",
      name: "Exeggcute",
      type1: "Grass",
      type2: "Psychic",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/102.png"
    },
    {
      id: 103,
      registryNumber: "#103",
      name: "Exeggutor",
      type1: "Grass",
      type2: "Psychic",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/103.png"
    },
    {
      id: 104,
      registryNumber: "#104",
      name: "Cubone",
      type1: "Ground",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/104.png"
    },
    {
      id: 105,
      registryNumber: "#105",
      name: "Marowak",
      type1: "Ground",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/105.png"
    },
    {
      id: 106,
      registryNumber: "#106",
      name: "Hitmonlee",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/106.png"
    },
    {
      id: 107,
      registryNumber: "#107",
      name: "Hitmonchan",
      type1: "Fighting",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/107.png"
    },
    {
      id: 108,
      registryNumber: "#108",
      name: "Lickitung",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/108.png"
    },
    {
      id: 109,
      registryNumber: "#109",
      name: "Koffing",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/109.png"
    },
    {
      id: 110,
      registryNumber: "#110",
      name: "Weezing",
      type1: "Poison",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/110.png"
    },
    {
      id: 111,
      registryNumber: "#111",
      name: "Rhyhorn",
      type1: "Ground",
      type2: "Rock",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/111.png"
    },
    {
      id: 112,
      registryNumber: "#112",
      name: "Rhydon",
      type1: "Ground",
      type2: "Rock",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/112.png"
    },
    {
      id: 113,
      registryNumber: "#113",
      name: "Chansey",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/113.png"
    },
    {
      id: 114,
      registryNumber: "#114",
      name: "Tangela",
      type1: "Grass",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/114.png"
    },
    {
      id: 115,
      registryNumber: "#115",
      name: "Kangaskhan",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/115.png"
    },
    {
      id: 116,
      registryNumber: "#116",
      name: "Horsea",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/116.png"
    },
    {
      id: 117,
      registryNumber: "#117",
      name: "Seadra",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/117.png"
    },
    {
      id: 118,
      registryNumber: "#118",
      name: "Goldeen",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/118.png"
    },
    {
      id: 119,
      registryNumber: "#119",
      name: "Seaking",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/119.png"
    },
    {
      id: 120,
      registryNumber: "#120",
      name: "Staryu",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/120.png"
    },
    {
      id: 121,
      registryNumber: "#121",
      name: "Starmie",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/121.png"
    },
    {
      id: 122,
      registryNumber: "#122",
      name: "Mr. Mime",
      type1: "Psychic",
      type2: "Fairy",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/122.png"
    },
    {
      id: 123,
      registryNumber: "#123",
      name: "Scyther",
      type1: "Bug",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/123.png"
    },
    {
      id: 124,
      registryNumber: "#124",
      name: "Jynx",
      type1: "Ice",
      type2: "Psychic",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/124.png"
    },
    {
      id: 125,
      registryNumber: "#125",
      name: "Electabuzz",
      type1: "Electric",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/125.png"
    },
    {
      id: 126,
      registryNumber: "#126",
      name: "Magmar",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/126.png"
    },
    {
      id: 127,
      registryNumber: "#127",
      name: "Pinsir",
      type1: "Bug",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/127.png"
    },
    {
      id: 128,
      registryNumber: "#128",
      name: "Tauros",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/128.png"
    },
    {
      id: 129,
      registryNumber: "#129",
      name: "Magikarp",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/129.png"
    },
    {
      id: 130,
      registryNumber: "#130",
      name: "Gyarados",
      type1: "Water",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/130.png"
    },
    {
      id: 131,
      registryNumber: "#131",
      name: "Lapras",
      type1: "Water",
      type2: "Ice",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/131.png"
    },
    {
      id: 132,
      registryNumber: "#132",
      name: "Ditto",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/132.png"
    },
    {
      id: 133,
      registryNumber: "#133",
      name: "Eevee",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/133.png"
    },
    {
      id: 134,
      registryNumber: "#134",
      name: "Vaporeon",
      type1: "Water",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/134.png"
    },
    {
      id: 135,
      registryNumber: "#135",
      name: "Jolteon",
      type1: "Electric",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/135.png"
    },
    {
      id: 136,
      registryNumber: "#136",
      name: "Flareon",
      type1: "Fire",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/136.png"
    },
    {
      id: 137,
      registryNumber: "#137",
      name: "Porygon",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/137.png"
    },
    {
      id: 138,
      registryNumber: "#138",
      name: "Omanyte",
      type1: "Rock",
      type2: "Water",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/138.png"
    },
    {
      id: 139,
      registryNumber: "#139",
      name: "Omastar",
      type1: "Rock",
      type2: "Water",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/139.png"
    },
    {
      id: 140,
      registryNumber: "#140",
      name: "Kabuto",
      type1: "Rock",
      type2: "Water",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/140.png"
    },
    {
      id: 141,
      registryNumber: "#141",
      name: "Kabutops",
      type1: "Rock",
      type2: "Water",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/141.png"
    },
    {
      id: 142,
      registryNumber: "#142",
      name: "Aerodactyl",
      type1: "Rock",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/142.png"
    }, 
    {
      id: 143,
      registryNumber: "#143",
      name: "Snorlax",
      type1: "Normal",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/143.png"
    },
    {
      id: 144,
      registryNumber: "#144",
      name: "Articuno",
      type1: "Ice",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/144.png"
    },
    {
      id: 145,
      registryNumber: "#145",
      name: "Zapdos",
      type1: "Electric",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/145.png"
    },
    {
      id: 146,
      registryNumber: "#146",
      name: "Moltres",
      type1: "Fire",
      type2: "Flying",
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/146.png"
    },
    {
      id: 147,
      registryNumber: "#147",
      name: "Dratini",
      type1: "Dragon",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/147.png"
    },
    {
      id: 148,
      registryNumber: "#148",
      name: "Dragonair",
      type1: "Dragon",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/148.png"
    },
    {
      id: 149,
      registryNumber: "#149",
      name: "Dragonite",
      type1: "Dragon",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/149.png"
    },
    {
      id: 150,
      registryNumber: "#150",
      name: "Mewtwo",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/150.png"
    },
    {
      id: 151,
      registryNumber: "#151",
      name: "Mew",
      type1: "Psychic",
      type2: null,
      imgURL1: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-5269694-4399494.png",
      imgURL2: "https://www.serebii.net/scarletviolet/pokemon/new/small/151.png"
    }
  ];
  
  export default pokemon;
  