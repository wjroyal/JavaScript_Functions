console.log("Hello World!\n==========\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 1 Section: Print Odds
function printOdds(count) {
    for (let i = 1; i <= Math.abs(count); i++) {
        if (i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }

}

printOdds(10); // 1, 3, 5, 7, 9
printOdds(-10);
printOdds(100);  // 1, 3, 5-99
printOdds(-100);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 2 Section : Check Age
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg =  `Sorry ${name}, you need to wait ${16 - age} years until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg)
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16)
checkAge("Cameron", 21);

function oldEnough (age, targetAge) {
    return age >= targetAge;
}

function checkLicense(name, age) {
    let canDrive = oldEnough(age, 16);
    let canHavePermit = oldEnough(age, 15);
    let canDrink = oldENough(age, 21);

    if (canDrink) {
        console.log(`${name} can drink. ${name} can also drive. NOT AT THE SAME TIME.`);

    } else if (canDrive) {
        console.log(`${name} can drive.`);
    }
    else if (canHavePermit) {
        console.log(`${name} can drive with another person of age.`);

    }
    else {
        console.log(`${name} too young. Wait some years.`);
    }
}

checkLicense("Ben", 22);
checkLicense("Seth", 17);
checkLicense("Cameron", 14);
/////////////////////////////////////////////////////////////////////////////////////////////
//Exercise 3
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if ( x > 0 && y < 0) {
        return "Quadrant 4";
    } else if ( x == 0 && y != 0) {
        return "X Axis";
    } else if ( x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

///////////////////////////////////////////////////////////////////////////////////////////////////
//Exercise 4
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
// WHat type of triangle?
    if (a == b && b == c) {
        return `Equilateral`;
    } else if (a == b || b == c || a == c) {
        return `Isosolese`;
    } else {
        return `Scalene`;
    }
    } else {
        return `Not a valid triangle.`;
    }
}
console.log(checkTriangle(2, 3, 4)); //scalene
console.log(checkTriangle(2, 2, 2)); //equilateral
console.log(checkTriangle(1, 2, 2)); // isosolese
console.log(checkTriangle(1, 1, 2)); // invalid
//////////////////////////////////////////////////////////////////////////////////////////////////
//Exercise 5: Data

// planLimit, day, usage
/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To say below your data plan, use no more than 2.93 GB/day.
*/
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) reimaining`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING"
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER"
    } else {
        statusMsg = "AT"
    }
    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)}/day),
continuing this high usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your 
data limit. To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}

dataUsageFeedback(50, 10, 25);


