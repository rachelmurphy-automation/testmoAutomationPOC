'use strict';

const chai = require('chai');
const promised = require('chai-as-promised');
const functions = require('./functions.js');
const chaiAlmost = require('chai-almost');

chai.use(promised);
const expect = chai.expect;

chai.use(chaiAlmost());

describe('Home Page Front End', function () {

  // Exercise 1:
  // Convert Date format from M/D/YYYY to YYYYMMDD
  it("test reverse dateforemat", function () {
    var reversedDate = functions.formatDate_1("12/31/2014");
    expect(reversedDate).to.equal("20143112");
  });

  // Exercise 2
  // Write a JavaScript program to display the current day and time in the following format.
  // Sample Output : Today is : Friday. 
  // Current time is : 4 PM : 50 : 22
  it("test current day and time", function () {
    var currentDay = new Date();
    var day = currentDay.getDay();
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    expect(functions.formatDate_2()).to.equal(weekDay[(day)]);
  });

  // Exercise 3
  // Print the current date in different formats
  // Expected Output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
  it("test format dateforemat", function () {
    functions.formatDate_3("mm-dd-yyyy");
    functions.formatDate_3("mm/dd/yyyy");
    functions.formatDate_3("dd-mm-yyyy");
    functions.formatDate_3("dd/mm/yyyy");
    // need to add well thought out assertions
  });

  // Exercise 4
  // Find the area of a triangle where lengths of the three of its sides are 5, 6, 7
  it("area of a triangle", function () {
    var area = functions.areaTriangle(3, 4, 5);
    expect(area).to.be.almost(6);
  });

  // Exercise 5
  // Write a JavaScript program to capitalize the first letter of each word of a given string.
  it("capitalize a string", function () {
    expect(functions.toUpper("javaScript")).to.equal("JavaScript");
    expect(functions.toUpper("plenty of liquids")).to.equal("Plenty Of Liquids");
    expect(functions.toUpper("my name is rachel")).to.equal("My Name Is Rachel");
    expect(functions.toUpper("life is a journey")).to.equal("Life Is A Journey");
  });

  // Exercise 6
  // Reverse a given string
  it("reverse a string", function () {
    expect(functions.reverseString("learning to like javascript")).to.equal("tpircsavaj ekil ot gninrael");
  });

  // Exercise 7
  //Write a JavaScript program to convert a given number to hours and minutes.
  it("convert number to hours and minutes", function () {
    expect(functions.convertIntToTime(71)).to.equal('1:11');
    expect(functions.convertIntToTime(450)).to.equal('7:30');
    expect(functions.convertIntToTime(1441)).to.equal('24:1');
  });

  // Exercise 8
  //Write a JavaScript program to sort words in Ascending order alphabetically.
  it("sort words in asc alphabetically", function () {
    expect(functions.sortWordsAsc("Charlie Fernando is a Goldie who loves to play outside and run")).to.equal("Charlie Fernando Goldie a and is loves outside play run to who");
  });

  // Exercise 9
  // Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
  it("test char separation", function () {
    expect(functions.charCheck("larthb")).to.equal(true);
    expect(functions.charCheck("blatah")).to.equal(true);
  });

  // Exercise 10
  //Write a JavaScript program to count the number of vowels in a given string. 
  it("count the number of vowels in a string", function () {
    expect(functions.countVowels("lariheho")).to.equal(4);
    expect(functions.countVowels("blatahayuqio")).to.equal(6);
    expect(functions.countVowels("blatahayuq aeiou")).to.equal(9);
  });
});