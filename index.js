// Program

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);

console.log("weight: ", weightInKg);
console.log( "height: ", heightInM);
console.log("age: ", age);

const BMI = weightInKg / (heightInM * heightInM);
const idealWeight = 22.5 * heightInM * heightInM;
const BMR = (10 * weightInKg) + (6.25 * (heightInM * 100)) - (5 * age);// It should be 1778,75
const caloriesPerDay = BMR * 1.4;
const weightToLose = weightInKg - idealWeight;
const weeksToLoseWeight = weightToLose / 0.5;
const caloriesShouldConsume = caloriesPerDay - 500; 




console.log(
    `
    --------------
    BMI CALCULATOR
    --------------

    height: ${heightInM} m
    weight: ${weightInKg} kg
    age: ${age} years

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

    If you want to reach your ideal weight of ${Math.round(idealWeight)} kg:

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
