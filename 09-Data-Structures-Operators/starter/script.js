'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: [
            'computer science',
            'programming',
            'algorithms',
            'data structures',
            'java',
            'math',
            'software',
            'engineering',
        ],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13,
            },
        },
        highlighted: true,
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: [
            'Harold Abelson',
            'Gerald Jay Sussman',
            'Julie Sussman (Contributor)',
        ],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: [
            'computer science',
            'programming',
            'javascript',
            'software',
            'engineering',
        ],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0,
            },
        },
        highlighted: true,
    },
    {
        title: "Computer Systems: A Programmer's Perspective",
        author: ['Randal E. Bryant', "David Richard O'Hallaron"],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: [
            'computer science',
            'computer systems',
            'programming',
            'software',
            'C',
            'engineering',
        ],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16,
            },
        },
        highlighted: true,
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: [
            'computer science',
            'operating systems',
            'programming',
            'software',
            'C',
            'Java',
            'engineering',
        ],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65,
            },
        },
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6,
            },
        },
        highlighted: true,
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090,
            },
        },
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: [
            'computer science',
            'compilers',
            'engineering',
            'interpreters',
            'software',
            'engineering',
        ],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0,
            },
        },
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808,
            },
        },
        highlighted: true,
    },
];

//1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

//1.2
const [, , thirdBook] = books;
console.log(thirdBook);

//1.3
const ratings = [
    ['rating', 4.19],
    ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

//1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

console.log('SECTION 2');

//2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

//2.2
const { keywords: tags } = books[0];
console.log(tags);

//2.3
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

//2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

//2.5
const {
    thirdParty: {
        goodreads: { rating: bookRating },
    },
} = books[0];
console.log(bookRating);

//2.6
const printBookInfo = function ({ title, author, year = 'year unknown' }) {
    console.log(`"${title} by ${author}, ${year}"`);
};

printBookInfo({
    title: 'Algorithms',
    author: 'Robert Sedgewick',
    year: '2011',
});
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

console.log('SECTION 3');

//3.1
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

//3.2
const spellWord = function (givenString) {
    console.log(...givenString);
};
spellWord('JavaScript');

console.log('SECTION 4');

//4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

//4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

//4.3
const printBookAuthorsCount = function (title, ...authors) {
    console.log(`"The book "${title}" has ${authors.length} authors`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

console.log('SECTION 5');

//5.1
const hasExamplesInJava = function (books) {
    return book.programmingLanguage === 'Java' || 'no data available';
};

//5.2
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent &&
        console.log(`"${books[i].title}" provides online content`);
}

console.log('SECTION 6');

//6.1
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent ??
        console.log(
            `"${books[i].title} provides no data about its online content"`,
        );
}

console.log('SECTION 7');

//7.1
for (let i = 0; i < books.length; i++) {
    books[i].edition ||= 1;
}

//7.2
for (let i = 0; i < books.length; i++) {
    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

console.log('CHALLENGE 1');
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = game.players[0];
const allPlayers = [...player1, ...player2];
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
const printGoals = function (...playerNames) {
    console.log(`Total number of goals: ${playerNames.length}`);
};

team1 < team2 && console.log('Team 1 more likely to win');
team1 > team2 && console.log('Team 2 more likely to win');

console.log('SECTION 8');
//8.1
let pageSum = 0;

for (const book of books) {
    pageSum += book.pages;
}
console.log(pageSum);

//8.2
const allAuthors = [];
for (const book of books) {
    if (typeof book.author === 'string') {
        allAuthors.push(book.author);
    } else {
        for (const author of book.author) {
            allAuthors.push(author);
        }
    }
}
console.log(allAuthors);

//8.3
for (const [index, author] of allAuthors.entries()) {
    console.log(`${index + 1}: ${author}`);
}

console.log('SECTION 9');
//9.1
const bookData = [
    ['title', 'Computer Networking: A Top-Down Approach'],
    ['author', ['James F. Kurose', 'Keith W. Ross']],
    ['publisher', 'Addison Wesley'],
];

const newBook = {
    [bookData[0][0]]: bookData[0][1],
    [bookData[1][0]]: bookData[1][1],
    [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

//9.2
const pages = 880;

const newBook2 = {
    title: 'The C Programming Language',
    author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
    pages,
};
console.log(newBook2);

console.log('SECTION 10');
//10.1
const getFirstKeyword = function (book) {
    console.log(book.keywords?.[0]);
};

getFirstKeyword(books[0]);
getFirstKeyword(newBook2); // from previous tasks

console.log('SECTION 11');
//11.1
const entries = [];

for (const entry of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push([entry]);
}
console.log(entries);

//11.2
for (const [index, value] of Object.values(
    books[0].thirdParty.goodreads,
).entries()) {
    entries[index].push(value);
}
console.log(entries);

//11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

//11.4
console.log(entries);
console.log(entries2);

console.log('CHALLENGE 2');

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

for (const [index, playerScored] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${playerScored} `);
}

let averageOdds = 0;

for (const odds of Object.values(game.odds)) {
    averageOdds += odds;
}

averageOdds /= Object.values(game.odds).length;
console.log(averageOdds);

const oddsKey = Object.entries(game.odds);
console.log(oddsKey);

for (const [teamIndex, oddValue] of oddsKey) {
    const teamStr = teamIndex === 'x' ? 'draw' : `victory ${game[teamIndex]}`;
    console.log(`Odd of ${teamStr} ${oddValue}`);
}

const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

console.log('SECTION 12');
//12.1
const allKeywords = [];

for (const book of books) {
    allKeywords.push(...book.keywords);
}
console.log(allKeywords);

//12.2
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

//12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

//12.4
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

//12.5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

//12.6
uniqueKeywords.clear();
console.log(uniqueKeywords);

console.log('SECTION 13');
//13.1
const bookMap = new Map([
    ['title', 'Clean Code'],
    ['author', 'Robert C. Martin'],
]);
console.log(bookMap);

//13.2
bookMap.set('pages', 464);
console.log(bookMap);

//13.3
console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);

//13.4
console.log(bookMap.size);

//13.5
if (bookMap.has('author')) console.log('The author is known');

console.log('SECTION 14');
//14.1
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

//14.2
for (const [key, value] of firstBookMap) {
    if (typeof value === 'number') console.log(key);
}

console.log('CHALLENGE 3');
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`,
);

const logGameEvents = function (value, key, map) {
    let str = key <= 45 ? '[FIRST HALF] ' : '[SECOND HALF] ';
    str += `${key}: ${value}`;
    console.log(str);
};
gameEvents.forEach(logGameEvents);

console.log('SECTION 15');

//15.1
console.log(
    books[0].ISBN['6'],
    books[0].ISBN['4'],
    books[0].ISBN['9'],
    books[0].ISBN[8],
);
//15.2
const quote =
    'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

//15.3
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

//15.4
function isContributor(author) {
    return author.lastIndexOf('(Contributor)') !== -1;
}
console.log(isContributor('Julie Sussman (Contributor)'));
