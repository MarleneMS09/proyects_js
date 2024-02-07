/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀*/

//Datos de la prueba
let massMark = 78;
let massJohn = 92;
let heightMarks = 1.69;
let heightJohn = 1.95;

//Calculo BMI
let BIMMark = massMark / (heightMarks **2);
let BIMJohn = massJohn / (heightJohn **2);
let markHigherBMI = BIMMark > BIMJohn;

console.log ("Datos de prueba");
console.log ("El IBM de Marks es : " , BIMMark );
console.log ("El IBM de John es : " , BIMJohn );
console.log ("¿Mark tiene el IBM más alto?", markHigherBMI);