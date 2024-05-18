"Use Strict";
/*
function describeCountry(country, population, capitalCity) {
let countryFacts = `${country} has ${population} million people and its captial city is ${capitalCity}.`;
return countryFacts;}


let japan= describeCountry( 'Japan', 125, 'Tokyo')
let mexico= describeCountry('Mexico',127, 'Mexico City')
let france= describeCountry('France', 68, 'Paris')

console.log(japan);
console.log(mexico);
console.log(france);

*/



//let percentageofWorld2 = function(population){
//    return (population/worldPopulation)*100;
//}

//let japanPercent2=percentageofWorld2(125);

//console.log(japanPercent2);


//let japanPercent = percentageOfWorld1(125);
//let mexicoPercent = percentageOfWorld1(127);
//let francePercent = percentageOfWorld1(68);

//console.log(japanPercent);
//console.log(mexicoPercent);
//console.log(francePercent);


//let percentageOfWorld3= population =>{return (population/worldPopulation)*100;}

//let japanPercent3= percentageOfWorld3(125);

//console.log(japanPercent3);

///let describePopulation = (country, population)=>`${country} has ${population} million people, which is about $//{percentageOfWorld1(population)}`

//let country1="Japan";

//console.log(describePopulation(country1, 125));

//let percentages2=[]

//for ( let i=0; i<populations.length; i++){
//    percentages2[i] =percentageOfWorld1(i+1)
//}

//console.log(percentages2)

//let calcAverage = (score1,score2,score3)=>(score1+score2+score3)/3;

//let scoreDolphins = calcAverage;
//let scoreKoalas = calcAverage;

//let checkWinner= function(scoreDolphins, scoreKoalas){
//    if (scoreDolphins >=(scoreKoalas)*2){console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)}
//    else if(scoreKoalas>=(scoreDolphins)*2){console.log(`Koalos win (${scoreKoalas} vs. ${scoreDolphins})`)}
 //   else {console.log(`No team wins...`)}} 
// scoreDolphins(44,23,71);
// scoreKoalas(65,54,49);





//console.log(population.length==4);

/*
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2])]

console.log(percentages)

neighbors=["Canada","Mexico"]

neighbors.push("Utopia")

console.log(neighbors)

neighbors.pop()

console.log(neighbors)

if (!neighbors.includes("Germany")) {console.log("Probably not a central european country :D")}

neighbors[neighbors.indexOf("Mexico")]="Repubic of Mexico"


console.log(neighbors)





let bill=100;
let tip;
function calcTip(bill) {
    if (bill >50 && bill<300) {
        tip = bill*0.15
    } else {
        tip=bill*0.20
    }
    return tip;
}

const bills=[125,555,44];

let tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

let totals = [bills[0]+calcTip(bills[0]),bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2])]

console.log(totals)
*/

/*
console.log(myCounty)

console.log(`${myCounty.country} has ${myCounty.population} million ${myCounty.language}-speaking people, ${myCounty.neighbors.length} neighboring countries and a capital called ${myCounty.capital}`)

myCounty.population +=2;

console.log(myCounty.population)

myCounty['population'] -=2

console.log(myCounty.population)

console.log ("--------------------")


let myCounty = {
    country: "United States",
    capital: "Washington D.C.",
    language: "English",
    population: 133,
    neighbors:["Canada","Mexico"],
    describe: function() {console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`)},
    checkIsland: function(){this.neighbors==0?this.isIsland=true:this.isIsland=false}

}

myCounty.checkIsland();

console.log(myCounty)

let jonas={
    name: "Jonas",
    birthYear: 1991,
    job: "teacher",
    DL: true,
    calcAge: function () {this.age= 2037-this.birthYear; return this.age},
    getSummary: function(){return `${this.name} is a ${this.calcAge()}-year old ${this.job}, and has ${this.DL? 'a': "no"} driver's license.`
}
}


console.log(jonas.getSummary())


let mark={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (mass,height){return mark.bmi=this.mass/(this.height*this.height)},
    }
    
    
    
    let john={
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,
        calcBMI: function(mass,height){return john.bmi= this.mass/(this.height*this.height)},
        }
    
    mark.calcBMI()
    john.calcBMI()
    
    if (mark.bmi>john.bmi){console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)} else {console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)}
    

    for(let voter=1; voter <=50; voter++){
        console.log(`Voter ${voter} is currently voting.`)
    }
    
  

    const jonasArray =[
  'Jonas',
  'Brother',
  2037-1991,
  'teacher',
  ['Michael','Peter', 'Steven']
    ]
  */
    
function percentageOfWorld1(population){
return (population/worldPopulation)*100};

const populations = [125,133, 124, 68]

let worldPopulation = 7900;

let percentages=[percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3])]

let percentages2 = [];

//for (i=0; i<populations.length;i++){
//    const perc = percentageOfWorld1(populations[i]);
//    percentages2.push(perc);
//}

let percentages3=[]

let i =0;
while (i<populations.length){
    let perc=percentageOfWorld1(populations[i]);
    percentages3.push(perc)
    i++;
}

//console.log(percentages3)
//console.log(percentages,percentages2)



//const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'],
  //['Norway', 'Sweden', 'Russia']
//];
/*
let listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let y = 0; y < listOfNeighbors[i].length; y++) {
        console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
    }
}


let dice=Math.trunc(Math.random() * 6)+1;
//console.log(dice)

while (dice!== 6) {
    console.log(`You rolled a ${dice}`)
    dice=Math.trunc(Math.random() * 6)+1
}

*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
let bills=[
      22,
      295,
      176,
      440,
      37,
      105,
      10,
      1100,
      86,
      52
      ]
      
  let tips = []
  let totals = []
  
  
  for (i=0;i<bills.length;i++){
 tip = calcTip(bills[i]);
 tips.push(tip); 
totals.push(tip + bills[i])}

console.log(tips)
console.log(totals)
