/**Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter). */
/**Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
/**1. Store Mark's and John's mass and height in variables */
let marksMass1 = 78 ;
let marksHeight1 = 1.69;

let johnMass1 = 92 ;
let johnHeight1 = 1.95 ;

/**2. Calculate both their BMIs using the formula (you can even implement both
versions) */

let marksBMI1 = marksMass1 / (marksHeight1 ** 2) ;
let jonhBMI1  = johnMass1 /(johnHeight1 ** 2);

/**3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John. */

let markHigherBMI1 = marksBMI1 > jonhBMI1 ;

console.log("Du lieu 1");
console.log("BMI cua Mark:", marksBMI1.toFixed(2));
console.log("BMI cua Jonh:", jonhBMI1.toFixed(2));
console.log("Mark co BMI cao hon Jonh khong?", markHigherBMI1);