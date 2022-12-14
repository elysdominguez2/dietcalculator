// Program

if (process.argv.length !== 7) {
    console.log(`
    You gave ${process.argv.length - 2} arguments (s) to the program.

    Please provide 5 arguments for:

    weight (kg),
    height (m),
    age (years),
    whether your exercise daily (yes or no),
    and your gender (m o f)

    Example:
    $ node index.js 82 1.79 32 yes m
    `);

    process.exit();
}

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = process.argv[5];
const gender = process.argv[6];

if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(`
        Please make sure weight, height and age are numbers:

        weight (kg) example: 82 | your imput: ${process.argv[2]}
        height (m) example: 1.79 | your imput: ${process.argv[3]}
        age (years) example: 32 | your imput: ${process.argv[4]}

        $ node index.js 82 1.79 32 yes m

    `);
    process.exit();
}

if( weightInKg < 30 || weightInKg > 300 ) {
    console.log(`
        Please provide a number for weight in kilograms between 30 a 300

        For example: $ node index.js 82 1.79 32 yes m
    `);
    process.exit();
}

if(age < 20) {
    console.log(`
        This BMI calculator is designed for people over 20 years old.
        Yoy are very young, enjoy your life!
    `);
    process.exit();
}

if(dailyExercise !== ('yes' || 'no')) {
    console.log(`
        Please specify if you exercise daily with "yes" or "no" 

        For example: $ node index.js 82 1.79 32 yes m
    `);

    process.exit();
}

// console.log("weight: ", weightInKg);
// console.log( "height: ", heightInM);
// console.log("age: ", age);
// console.log("exercise: ", dailyExercise);
// console.log("gender: ", gender);

const BMI = weightInKg / (heightInM * heightInM);
const idealWeight = 22.5 * heightInM * heightInM;


let BMR;

if (gender === "f") {
    BMR = (10 * weightInKg) + (6.25 * (heightInM * 100)) - (5 * age) - 150; 
} else {
    BMR = (10 * weightInKg) + (6.25 * (heightInM * 100)) - (5 * age) + 50; 
}


let caloriesPerDay;
let advice;

if (dailyExercise === "yes") {
    caloriesPerDay = BMR * 1.6;
    advice = 'That is great, you are closer!';
} else {
    caloriesPerDay = BMR * 1.4;
    advice = 'You should do some exersice!';
}


const weightToLose = weightInKg - idealWeight;
let weeksToLoseWeight;
let caloriesShouldConsume;

if(weightInKg >= idealWeight) {
    weeksToLoseWeight = weightToLose / 0.5;
    caloriesShouldConsume = caloriesPerDay - 500;
} else{
    weeksToLoseWeight = Math.abs(weightToLose / 0.5);
    caloriesShouldConsume = caloriesPerDay + 500; 
}
// console.log(caloriesShouldConsume);
 


console.log(
    `
    --------------
    BMI CALCULATOR
    --------------

    height: ${heightInM} m
    weight: ${weightInKg} kg
    age: ${age} years
    exercise: ${dailyExercise}
    gender: ${gender}

    FACING THE FACTS
    ----------------

    Your BMI is ${Math.round(BMI)}

    A BMI under 18.5 is considered underweight
    A BMI 18.6 to 24.9 is considered normal
    A BMI above 25 is considered overweight

    Your ideal weight is ${Math.round(idealWeight)} kg.
    With a normal lifestyle you burn ${Math.round(caloriesPerDay)} calories a day 

    DIET PLAN
    ---------

    Are you doing exercise? ${dailyExercise }
    
    ${advice}

    If you want to reach your ideal weight of ${Math.round(idealWeight)} kg

    You should eat ${Math.round(caloriesShouldConsume)} calories per day for ${Math.round(weeksToLoseWeight)} weeks;

    START NOW!!!
    `
);
// console.log("What does process.argv contain?" , process.argv);
// console.log(idealWeight);
// console.log(BMR);
// console.log(caloriesPerDay);
// console.log(weightToLose); //10k
// console.log(weeksToLoseWeight); // 19.8w
// console.log(caloriesShouldConsume);//1990c
