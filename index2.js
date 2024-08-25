/**Use the BMI example from Challenge #1, and the code you already wrote, and
improve it. */
//Dữ liệu 1
console.log("Test Dữ Liệu 1");
let markMass1 = 78; // khối lượng của Mark
let markHeight1 = 1.69; // chiều cao của Mark

let johnMass1 = 92; // khối lượng của John
let johnHeight1 = 1.95; // chiều cao của John

// Tính BMI cho dữ liệu 1
let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

// Sử dụng câu lệnh if/else để so sánh BMI và in ra kết quả
if (markBMI1 > johnBMI1) {
    console.log(`Chỉ số BMI của Mark (${markBMI1.toFixed(2)}) cao hơn John (${johnBMI1.toFixed(2)})!`);
} else {
    console.log(`Chỉ số BMI của John (${johnBMI1.toFixed(2)}) cao hơn Mark (${markBMI1.toFixed(2)})!`);
}
console.log("Test Dữ Liệu 2");
// Dữ liệu 2
let markMass2 = 95; // khối lượng của Mark
let markHeight2 = 1.88; // chiều cao của Mark

let johnMass2 = 85; // khối lượng của John
let johnHeight2 = 1.76; // chiều cao của John

// Tính BMI cho dữ liệu 2
let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

// Sử dụng câu lệnh if/else để so sánh BMI và in ra kết quả
if (markBMI2 > johnBMI2) {
    console.log(`Chỉ số BMI của Mark (${markBMI2.toFixed(2)}) cao hơn John (${johnBMI2.toFixed(2)})!`);
} else {
    console.log(`Chỉ số BMI của John (${johnBMI2.toFixed(2)}) cao hơn Mark (${markBMI2.toFixed(2)})!`);
}
