import charImg from "../assets/charmander.png";
import squirtleImg from "../assets/squirtle.png";
import bulbasaurImg from "../assets/bulbasaur.png";
import pikachuImg from "../assets/pikachu.png";
const data = [
    {
        id:1,
        name:"Charmander",
        type:"Fire",
        hp:39,
        moves:["Scratch", "Ember", "Growl", "Leer"],
        weaknesses:["Water", "Rock"],
        image:charImg
    },
    {
        id:2,
        name:"Squirtle",
        type:"Water",
        hp:44,
        moves:["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
        weaknesses:["Electric", "Grass"],
        image:squirtleImg  
    },
    {
        id:3,
        name:"Bulbasaur",
        type:"Grass",
        hp:45,
        moves:["Tackle", "Vine Whip", "Growl", "Leech Seed"],
        weaknesses:["Fire", "Ice", "Flying", "Psychic"],
        image:bulbasaurImg
    },
    {
        id:4,
        name:"Pikachu",
        type:"Electric",
        hp:35,
        moves:["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
        weaknesses:["Ground"],
        image:pikachuImg
    }
]

export default data;