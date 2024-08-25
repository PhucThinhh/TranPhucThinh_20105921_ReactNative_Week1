/** There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!*/
/**1. Calculate the average score for each team, using the test data below */
// Dữ liệu kiểm tra 1
let dolphinsScore1 = (96 + 108 + 89) / 3; // Tính điểm trung bình của đội Dolphins
let koalasScore1 = (88 + 91 + 110) / 3; // Tính điểm trung bình của đội Koalas

console.log(`Điểm trung bình của Dolphins: ${dolphinsScore1.toFixed(2)}`);
console.log(`Điểm trung bình của Koalas: ${koalasScore1.toFixed(2)}`);

// So sánh điểm trung bình của các đội và xác định đội thắng hoặc hòa
if (dolphinsScore1 > koalasScore1) {
    console.log("Dolphins thắng cuộc thi!");
} else if (koalasScore1 > dolphinsScore1) {
    console.log("Koalas thắng cuộc thi!");
} else {
    console.log("Hai đội hòa nhau!");
}

// Dữ liệu kiểm tra Bonus 1 và Bonus 2
let dolphinsScoreBonus = (97 + 112 + 101) / 3; // Điểm trung bình của Dolphins với dữ liệu Bonus
let koalasScoreBonus1 = (109 + 95 + 123) / 3; // Điểm trung bình của Koalas với dữ liệu Bonus 1
let koalasScoreBonus2 = (109 + 95 + 106) / 3; // Điểm trung bình của Koalas với dữ liệu Bonus 2

console.log(`\nĐiểm trung bình của Dolphins (Bonus): ${dolphinsScoreBonus.toFixed(2)}`);
console.log(`Điểm trung bình của Koalas (Bonus 1): ${koalasScoreBonus1.toFixed(2)}`);
console.log(`Điểm trung bình của Koalas (Bonus 2): ${koalasScoreBonus2.toFixed(2)}`);

// Xử lý Bonus 1 và Bonus 2 với yêu cầu điểm tối thiểu là 100
if (dolphinsScoreBonus >= 100 && dolphinsScoreBonus > koalasScoreBonus1) {
    console.log("Dolphins thắng cuộc thi với điểm tối thiểu 100!");
} else if (koalasScoreBonus1 >= 100 && koalasScoreBonus1 > dolphinsScoreBonus) {
    console.log("Koalas thắng cuộc thi với điểm tối thiểu 100!");
} else if (dolphinsScoreBonus >= 100 && koalasScoreBonus1 >= 100 && dolphinsScoreBonus === koalasScoreBonus1) {
    console.log("Hai đội hòa nhau với điểm tối thiểu 100!");
} else {
    console.log("Không đội nào giành được cúp vì không đạt đủ điểm tối thiểu 100!");
}

// Kiểm tra cho dữ liệu Bonus 2 với cùng điều kiện
if (dolphinsScoreBonus >= 100 && dolphinsScoreBonus > koalasScoreBonus2) {
    console.log("Dolphins thắng cuộc thi với điểm tối thiểu 100 (Bonus 2)!");
} else if (koalasScoreBonus2 >= 100 && koalasScoreBonus2 > dolphinsScoreBonus) {
    console.log("Koalas thắng cuộc thi với điểm tối thiểu 100 (Bonus 2)!");
} else if (dolphinsScoreBonus >= 100 && koalasScoreBonus2 >= 100 && dolphinsScoreBonus === koalasScoreBonus2) {
    console.log("Hai đội hòa nhau với điểm tối thiểu 100 (Bonus 2)!");
} else {
    console.log("Không đội nào giành được cúp vì không đạt đủ điểm tối thiểu 100 (Bonus 2)!");
}
