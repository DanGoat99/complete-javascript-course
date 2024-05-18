const country = "United States";
const continent = "North America";
const population = 133;
const isIsland = false;
const LANGUAGE = "English";

console.log(population/2);

let answer;
let averageAnswer;

const Finland = 6;

if (population > Finland)
{
 answer = `Yes, ${country} has a greater population than Finland`}
else { answer = `No, ${country} has a lesser population than Finland`};

const averagePopulation = 33

if (population > averagePopulation) { averageAnswer = `Yes, ${country} has a greater population than the average country.`}
else { averageAnswer = `No, ${country} has a lesser population than the average country`};

let description = `${country} is in ${continent}, and its ${population} million people speak ${LANGUAGE}`;

console.log(description);
console.log(answer);
console.log(averageAnswer);

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(LANGUAGE);

let populationDifference;

if (population>averagePopulation){populationDifference =
`${country}'s population is ${population-33} million above average.`} else {populationDifference=`${country}'s population is ${33-population} millian less than average.`}

console.log(populationDifference);

if (population < 50 && !isIsland ) { console.log(`You should live in ${country}`)} else {console.log(`${country} does not meet your criteria :(`)}

switch(LANGUAGE.toLowerCase()) {
    case "chinese" || "mandarin":
        console.log(`Most number of native sperkers!`);
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log("3rd Place")
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;
    default:
        console.log('Great Language Too :D')

    }

    const bill = 275;

    /* Write your code below. Good luck! 🙂 */
    
    const tip = bill>=50 && bill<=300 ? .15*bill : .20*bill;
    
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value (${bill+tip}).`)