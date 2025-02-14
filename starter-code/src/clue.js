// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters
const mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
    }
    
const drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
    }
 

const profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    }


const missScarlet = {
    first_name:   'Kasandra' ,
    last_name:    'Scarlet' ,
    color:        'red' ,
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'}



const mrsPeacock ={
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité' }



const mrMustard={
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory' ,
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"}


// Weapons

// name: rope        ---   weight: 10
// name: knife       ---   weight: 8
// name: candlestick ---   weight: 2
// name: dumbbell    ---   weight: 30
// name: poison      ---   weight: 2
// name: axe         ---   weight: 15
// name: bat         ---   weight: 13
// name: trophy      ---   weight: 25
// name: pistol      ---   weight: 20

// Rooms



// // Characters Collection
var charactersArray = [
    mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard
];


// console.log(charactersArray);

// // Rooms' Collection
 var roomsArray = [

{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"},
];

// console.log(roomsArray);

// // Weapons Collection
 var weaponsArray = [

     {name: "rope",   weight: 10},
 {name: "knife",   weight: 8},
 {name: "candlestick",   weight: 2},
 {name: "dumbbell",   weight: 30},
 {name: "poison",   weight: 2},
 {name: "axe",   weight: 15},
 {name: "bat",   weight: 13},
 {name: "trophy",   weight: 25},
 {name: "pistol",   weight: 20},

 ];

// function(){}


function randomSelector (arr) {

    return arr[ Math.floor(Math.random() * arr.length) ] ;
    // let randomRooms= Math.floor(Math.random() * roomsArray.length) ;
    // let randomWeapon = Math.floor(Math.random() * weaponsArray.length) ; 
  
    // let arr=[];
    // arr = [randomChar,randomRooms,randomWeapon]

// return arr;

}

// console.log( randomSelector(weaponsArray) );



function pickMistery (){
var misteryEnvelope = [];
    misteryEnvelope.push(randomSelector(charactersArray))
    misteryEnvelope.push(randomSelector(weaponsArray))
    misteryEnvelope.push(randomSelector(roomsArray))

return misteryEnvelope; 
// [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];

// let misteryArray = [charactersArray[randomSelector[0]],roomsArray[2],weaponsArray[2]];

    //return misteryArray ;
}


// console.log(pickMistery ()) ;


function revealMistery(arr){

    // let misteryEnvelope =[];
    // console.log("HELLO", pickMistery ()) ;
    let misteryEnvelope = pickMistery();

    // let revealedMisteryY = `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`

// console.log(revealedMisteryY);
return `${arr[0].first_name} ${arr[0].last_name} killed Mr.Boddy using the ${arr[1].name} in the ${arr[2].name}!!!!`
    // revealedMisteryY;
}


console.log(revealMistery(pickMistery()))

