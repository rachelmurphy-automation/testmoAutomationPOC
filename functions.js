'use strict';

module.exports = {
    formatDate_1(userDate) {
        var userDate = userDate.split('/').reverse().join('')
        return userDate;
    },

    formatDate_2() {
        var currentDay = new Date();
        var day = currentDay.getDay();
        var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var hour = currentDay.getHours();
        var minutes = currentDay.getMinutes();
        var seconds = currentDay.getSeconds();

        var amPM = (hour >= 12) ? "PM" : "AM";
        hour = (hour >= 12) ? hour - 12 : hour;
        console.log("\nToday is: " + weekDay[(day)]);
        console.log("\nCurrent time is: " + hour + amPM + " :" + minutes + " :" + seconds);

        return weekDay[(day)];
    },

    formatDate_3(string) {
        var currentDay = new Date();
        if (string == "mm-dd-yyyy") {
            var date1 = currentDay.getMonth() + 1 + "-" + currentDay.getDate() + "-" + currentDay.getFullYear();
            console.log("date is: " + date1);
            return date1;
        }
        if (string == "mm/dd/yyyy") {
            var date2 = currentDay.getMonth() + 1 + "/" + currentDay.getDate() + "/" + currentDay.getFullYear();
            console.log("date is: " + date2);
            return date2;
        }
        if (string == "dd-mm-yyyy") {
            var date3 = currentDay.getDate() + "-" + currentDay.getMonth() + 1 + "-" + currentDay.getFullYear();
            console.log("date is: " + date3);
            return date3;
        }
        if (string == "dd/mm/yyyy") {
            var date4 = currentDay.getDate() + "/" + currentDay.getMonth() + 1 + "/" + currentDay.getFullYear();
            console.log("date is: " + date4);
            return date4;
        }
    },

    areaTriangle(length1, length2, length3) {
        var perimeter = (length1 + length2 + length3) / 2;
        var area = Math.sqrt(perimeter * (perimeter - length1) * (perimeter - length2) * (perimeter - length3));
        return area;
    },

    toUpper(string) {
        console.log("String given: " + string);
        var splitString = string.split(" ");
        for (var i = 0, x = splitString.length; i < x; i++) {
            splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
            var joinString = splitString.join(" ");
        }
        console.log("1st letter of each word converted to uppercase:" + joinString + "\n");
        return joinString;
    },

    reverseString(str) {
        console.log("\nThe given string is: " + str);
        var reverseString = str.split("").reverse("").join("");
        console.log("The string reversed: " + reverseString);
        return reverseString;
    },

    convertIntToTime(num) {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        var hrsMins = hours + ":" + minutes;
        console.log("num is: " + num);
        console.log("num converted to hours and minutes is: " + hours + ":" + minutes + "\n");
        return hrsMins;
    },

    sortWordsAsc(string) {
        console.log("The string of words to sort alphabetically: \n" + string);
        var wordsSorted = string.split(" ").sort().join(" ");
        var stringSorted = string.split("").sort().join("");
        console.log("The alphabetically sorted words of string is: \n" + wordsSorted);
        return wordsSorted;
    },

    charCheck(string) {
        var bool = (/a...b/).test(string) || (/b...a/).test(string);
        console.log(bool);
        return bool;
    },

    countVowels(string) {
        var count = string.replace(/[^aeiou]/g, "").length
        console.log(count);
        return count;
    }
}