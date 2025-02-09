'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const sortedMovements = sort
        ? movements.slice().sort((a, b) => a - b)
        : movements;

    sortedMovements.forEach(function (movement, index) {
        const type = movement > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
          <div class="movements__value">${movement}</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (account) {
    account.balance = account.movements.reduce(
        (sum, movevement) => sum + movevement,
        0,
    );
    labelBalance.textContent = `${account.balance} EUR`;
};

const calcDisplaySummary = function (account) {
    const incomes = account.movements
        .filter(movement => movement > 0)
        .reduce((sum, movement) => sum + movement, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = account.movements
        .filter(movement => movement < 0)
        .reduce((sum, movement) => sum + movement, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = account.movements
        .filter(movement => movement > 0)
        .map(deposit => (deposit * account.interestRate) / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, interest) => acc + interest, 0);
    labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accounts) {
    accounts.forEach(function (account) {
        account.username = account.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};

createUsernames(accounts);

const updateUI = function (account) {
    displayMovements(account.movements);
    calcDisplayBalance(account);
    calcDisplaySummary(account);
};

btnLogin.addEventListener('click', function (event) {
    event.preventDefault();

    currentAccount = accounts.find(
        account => account.username === inputLoginUsername.value,
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

        containerApp.style.opacity = 100;

        inputLoginUsername.value = inputLoginPin.value = '';

        inputLoginPin.blur();

        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (event) {
    event.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(
        account => account.username === inputTransferTo.value,
    );

    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAccount &&
        currentAccount.balance >= amount &&
        receiverAccount?.username !== currentAccount.username
    ) {
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);

        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (event) {
    event.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some(movement => movement >= amount * 0.1)
    ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }

    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (event) {
    event.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            account => account.username === currentAccount.username,
        );

        accounts.splice(index, 1);

        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
    event.preventDefault();

    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('CHALLENGE 1');
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
    const filteredDogsJulia = dogsJulia.slice(1, -2);
    console.log(dogsJulia);
    const allDogs = filteredDogsJulia.concat(dogsKate);

    const isAdult = dogAge => (dogAge >= 3 ? true : false);

    allDogs.forEach(function (dogAge, index) {
        if (isAdult(dogAge)) {
            console.log(
                `Dog number ${index + 1} is an adult, and is ${dogAge} years old`,
            );
        } else {
            console.log(`Dog number ${index + 1} is still a puppy`);
        }
    });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

console.log('CHALLENGE 2');
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

const calcAverageHumanAge = function (dogAges) {
    const humanAge = dogAges.map(function (dogAge) {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });

    const excludedDogs = humanAge.filter(age => age >= 18);
    const averageHumanAge =
        excludedDogs.reduce((sum, age) => sum + age) / excludedDogs.length;

    console.log(humanAge);
    console.log(excludedDogs);
    console.log(averageHumanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log('CHALLENGE 3');
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

const calcAverageHumanAgeEnhanced = dogAges =>
    dogAges
        .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
        .filter(age => age >= 18)
        .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

console.log(calcAverageHumanAgeEnhanced([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeEnhanced([16, 6, 10, 5, 6, 1, 4]));

console.log('CHALLENGE 4');
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
    {
        breed: 'German Shepherd',
        averageWeight: 32,
        activities: ['fetch', 'swimming'],
    },
    {
        breed: 'Dalmatian',
        averageWeight: 24,
        activities: ['running', 'fetch', 'agility'],
    },
    {
        breed: 'Labrador',
        averageWeight: 28,
        activities: ['swimming', 'fetch'],
    },
    {
        breed: 'Beagle',
        averageWeight: 12,
        activities: ['digging', 'fetch'],
    },
    {
        breed: 'Husky',
        averageWeight: 26,
        activities: ['running', 'agility', 'swimming'],
    },
    {
        breed: 'Bulldog',
        averageWeight: 36,
        activities: ['sleeping'],
    },
    {
        breed: 'Poodle',
        averageWeight: 18,
        activities: ['agility', 'fetch'],
    },
];

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

const containsBothActivities = breeds.find(
    breed =>
        breed.activities.includes('fetch') &&
        breed.activities.includes('running'),
).breed;

console.log(containsBothActivities);

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

const swimmingAdjacent = breeds
    .filter(breed => breed.activities.includes('swimming'))
    .flatMap(breed => breed.activities)
    .filter(activity => activity !== 'swimming');

console.log(swimmingAdjacent);

console.log(breeds.every(breed => breed.averageWeight > 10));

console.log(breeds.some(breed => breed.activities.length >= 3));

console.log(
    Math.max(
        ...breeds
            .filter(breed => breed.activities.includes('fetch'))
            .map(breed => breed.averageWeight),
    ),
);
