// 1.⁠ ⁠მარტივი გამრავლება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და დააბრუნოს მათი ნამრავლი. მაგალითად, თუ არგუმენტები არიან 3 და 4, ფუნქციამ უნდა დააბრუნოს 12.



const sum = function(a, b) {
    return a * b;
};


console.log(sum(5, 3)); // 8


//  
// 2.⁠ ⁠ასაკის შემოწმება
// ფუნქციამ უნდა მიიღოს ასაკი და დააბრუნოს "შენ ხარ სრულწლოვანი", თუ ასაკი 18-ზე მეტია ან ტოლია, წინააღმდეგ შემთხვევაში უნდა დააბრუნოს "შენ ხარ არასრულწლოვანი".

function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are a minor";
    }
}



console.log(checkAge(16)); 

//  3.⁠ ⁠რიცხვი ლუწია თუ კენტი
// ფუნქციამ უნდა მიიღოს რიცხვი და გამოითვალოს, თუ ის ლუწია ან კენტი და დააბრუნოს შესაბამისი ტექსტი.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "The number is even";
    } else {
        return "The number is odd";
    }
}

console.log(checkEvenOrOdd(4)); 







//  4.⁠ ⁠switch case – დღეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 7-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი დღის სახელი (მაგ. 1 - ორშაბათი, 2 - სამშაბათი და ა.შ.).

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
           
    }
}


console.log(getDayName(1)); 
console.log(getDayName(5));
console.log(getDayName(7)); 


//  5.⁠ ⁠ორი რიცხვის შედარება
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და დააბრუნოს "პირველი რიცხვი უფრო დიდია", "მეორე რიცხვი უფრო დიდია" ან "ორივე რიცხვი ტოლია".

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return "The first number is greater";
    } else if (num1 < num2) {
        return "The second number is greater";
    } else {
        return "Both numbers are equal";
    }
}


console.log(compareNumbers(5, 3)); 
console.log(compareNumbers(2, 4)); 
console.log(compareNumbers(7, 7)); 



//  6.⁠ ⁠ოთხი მოქმედების კალკულატორი
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და შესაბამისი ოპერატორის მიხედვით გამოითვალოს შედეგი.


function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {

            }
            return num1 / num2;
        default:
            
    }
}


console.log(calculate(5, 3, '+')); 
console.log(calculate(5, 3, '-')); 
console.log(calculate(5, 3, '*')); 
console.log(calculate(5, 0, '/')); 
console.log(calculate(5, 3, '%')); 


//  7.⁠ ⁠ტემპერატურის კონვერტორი
// ფუნქცია უნდა მიიღოს ტემპერატურა ცელსიუსში და დააბრუნოს ფარენჰეიტში კონვერტირებული მნიშვნელობა. ფორმულა: 
// F=C×9/5+32.





function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}


console.log(convertCelsiusToFahrenheit(0));   
console.log(convertCelsiusToFahrenheit(25));  
console.log(convertCelsiusToFahrenheit(100)); 


//  8.⁠ ⁠მაქსიმალური რიცხვის პოვნა
// ფუნქცია უნდა მიიღოს სამი რიცხვი და დააბრუნოს მათ შორის მაქსიმალური მნიშვნელობა.



function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}


console.log(findMax(10, 5, 8)); 
console.log(findMax(-1, -5, -3)); 
console.log(findMax(2.5, 3.1, 2.9));


//  9.⁠ ⁠რიცხვის დადებითი თუ უარყოფითი
// ფუნქციამ უნდა მიიღოს რიცხვი და შეამოწმოს, დადებითია თუ უარყოფითი. დააბრუნოს შესაბამისი ტექსტი.




function checkPositiveOrNegative(number) {
    if (number > 0) {
        return "The number is positive";
    } else if (number < 0) {
        return "The number is negative";
    } else {
        return "The number is zero";
    }
}


console.log(checkPositiveOrNegative(10));  
console.log(checkPositiveOrNegative(-5));  
console.log(checkPositiveOrNegative(0));   


// 10.⁠ ⁠switch case – თვეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 12-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი თვის სახელი (მაგ. 1 - იანვარი, 2 - თებერვალი და ა.შ.).
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid input. Please enter a number between 1 and 12.";
    }
}


console.log(getMonthName(1));  
console.log(getMonthName(5));  
console.log(getMonthName(13)); 








// 11.⁠ ⁠გამრავლების მნიშვნელობა
// ფუნქცია უნდა მიიღოს ერთი რიცხვი და თუ რიცხვი 5-ის ტოლია ან მეტი, დააბრუნოს მისი ნამრავლი 10-ზე. წინააღმდეგ შემთხვევაში დააბრუნოს "რიცხვი მცირეა".

function checkNumber(num) {
    if (num >= 5) {
        return num * 10;
    } else {
        return "number is small";
    }
}


console.log(checkNumber(7)); 
console.log(checkNumber(4)); 
console.log(checkNumber(5)); 


// 12.⁠ ⁠switch case – სეზონის შემოწმება
// ფუნქციამ უნდა მიიღოს 1-დან 4-მდე რიცხვი და switch case-ებით დააბრუნოს შესაბამისი სეზონი (1 - გაზაფხული, 2 - ზაფხული, 3 - შემოდგომა, 4 - ზამთარი).

function getSeason(seasonNumber) {
    switch (seasonNumber) {
        case 1:
            return "Spring";
        case 2:
            return "Summer";
        case 3:
            return "Autumn";
        case 4:
            return "Winter";
        default:
            return "Invalid input. Please enter a number between 1 and 4.";
    }
}


console.log(getSeason(1)); 
console.log(getSeason(2));
console.log(getSeason(3)); 
console.log(getSeason(4)); 
console.log(getSeason(5)); 


// 13.⁠ ⁠მარტივი აღრიცხვის ფუნქცია
// ფუნქციამ უნდა მიიღოს ფასის მნიშვნელობა და შეამოწმოს, არის თუ არა იგი 100-ზე მეტი. თუ კი, დააბრუნოს "ფასი მაღალია", წინააღმდეგ შემთხვევაში დააბრუნოს "ფასი ნორმალურია".
function checkPrice(price) {
    if (price > 100) {
        return "price is high";
    } else {
        return "price is normal";
    }
}


console.log(checkPrice(150)); 
console.log(checkPrice(75));  
console.log(checkPrice(100)); 


// 14.⁠ ⁠switch case – მათემატიკური ოპერატორების შემოწმება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და switch case-ების გამოყენებით დააბრუნოს შესაბამისი მოქმედების შედეგი.



function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please use +, -, *, or /.";
    }
}


console.log(calculate(5, 3, '+')); 
console.log(calculate(5, 3, '-')); 
console.log(calculate(5, 3, '*')); 
console.log(calculate(5, 0, '/')); 


// 15.⁠ ⁠რიცხვების დადებითი ჯამი
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და თუ ორივე დადებითია, დააბრუნოს მათი ჯამი. წინააღმდეგ შემთხვევაში დააბრუნოს "მინიმუმ ერთი რიცხვი უარყოფითია".

function sumIfPositive(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        return num1 + num2;
    } else {
        return "At least one number is negative";
    }
}



console.log(sumIfPositive(5, 10));
console.log(sumIfPositive(-3, 10));
console.log(sumIfPositive(4, -1));
console.log(sumIfPositive(0, 5)); 
