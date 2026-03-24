/**
 * @file questions.js
 * @description This file contains programming exercises for Week 3 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus array functions etc.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [01/03/2024]
 *
 * INSTRUCTIONS:
 * - Follow the prompts for each exercise and write your code in the specified
 *   areas.
 * - Run the provided tests after completing the exercises to check your work.
 * - Do not modify the structure of the file or the provided code snippets.
 * - Seek assistance if you encounter difficulty understanding the exercises or
 *   implementing the solutions.
 */
/**
 * Exercise 1: Filters out negative numbers from an array.
 * @param {number[]} numbers - The array of numbers to filter.
 * @return {number[]} A new array containing only non-negative numbers.
 */
function filterNegativeNumbers(numbers) {
  // Your implementation here

  const filteredArray = numbers.filter((num) => num >= 0);

  return filteredArray;
}

/**
 * Exercise 2: Doubling Numbers Divisible by Three
 *
 * Objective:
 * Practice using array methods to identify and transform elements within an array.
 * This exercise focuses on processing numbers in an array to find those divisible by three
 * and then doubling those numbers.
 *
 * Task Description:
 * Write a function named `doubleDivisibleByThree`. This function takes an array of numbers as input,
 * filters out all numbers that are divisible by three, and returns a new array with those numbers doubled.
 *
 * @param {number[]} numbers - An array of numbers to be processed.
 * @return {number[]} A new array containing the numbers divisible by three doubled.
 */
function doubleDivisibleByThree(numbers) {
  // Your implementation here
  const numsDivByThree = numbers.filter((num) => num % 3 === 0);
  const numsDoubled = numsDivByThree.map((num) => num * 2);

  return numsDoubled;
}

// const studentRecords = [
//   { id: 1,  name: "Bob",      email: "bob@uni.edu",      GPA: 4, hobbies: ["basketball", "coding"] },
//   { id: 2,  name: "Lisa",     email: "lisa@uni.edu",     GPA: 4, hobbies: ["ballet", "ballroom"] },
//   { id: 3,  name: "Harry",    email: "harry@uni.edu",    GPA: 6, hobbies: ["shooting", "metalwork"] },
//   { id: 4,  name: "Gwen",     email: "gwen@uni.edu",     GPA: 5, hobbies: ["coding", "writing"] },
//   { id: 5,  name: "Cudro",    email: "cudro@uni.edu",    GPA: 4, hobbies: ["piano", "baseball"] },
//   { id: 6,  name: "Ben",      email: "ben@uni.edu",      GPA: 4, hobbies: ["flute", "recording"] },
//   { id: 7,  name: "Harriot",  email: "harriot@uni.edu",  GPA: 2, hobbies: ["karate", "jiu jitsu"] },
//   { id: 8,  name: "Gray",     email: "gray@uni.edu",     GPA: 1, hobbies: ["tennis", "nrl football"] },
//   { id: 9,  name: "Maloney",  email: "maloney@uni.edu",  GPA: 4, hobbies: ["coding", "chess"] },
//   { id: 10, name: "Glen",     email: "glen@uni.edu",     GPA: 3, hobbies: ["trivia", "gardening"] },
//   { id: 11, name: "Amit",     email: "amit@uni.edu",     GPA: 4, hobbies: ["game design", "warhammer"] },
//   { id: 12, name: "Jesus",    email: "jesus@uni.edu",    GPA: 4, hobbies: ["board games", "pet sitting"] },
//   { id: 13, name: "Alluh",    email: "alluh@uni.edu",    GPA: 4, hobbies: ["genealogy", "coding"] },
//   { id: 14, name: "Mohammad", email: "mohammad@uni.edu", GPA: 6, hobbies: ["painting acrylics", "coding"] },
//   { id: 15, name: "Radika",   email: "radika@uni.edu",   GPA: 7, hobbies: ["running", "ice skating"] },
//   { id: 16, name: "Suki",     email: "suki@uni.edu",     GPA: 4, hobbies: ["poetry", "photography"] },
//   { id: 17, name: "Trevor",   email: "trevor@uni.edu",   GPA: 4, hobbies: ["acting", "dancing"] },
//   { id: 18, name: "Janice",   email: "janice@uni.edu",   GPA: 7, hobbies: ["dancing", "singing"] },
//   { id: 19, name: "Chris",    email: "christine@uni.edu",GPA: 5, hobbies: ["drawing", "pottery"] },
//   { id: 20, name: "Jess",     email: "jess@uni.edu",     GPA: 5, hobbies: ["puzzles", "soduku"] },
//   { id: 21, name: "Hanson",   email: "hanson@uni.edu",   GPA: 1, hobbies: ["seashell collecting", "action figure collecting"] },
// ]

/**
 * Exercise 3: Selecting High-Performing Students with a Specific Hobby
 *
 * Objective:
 * Practice advanced array manipulation techniques involving filtering, mapping, and sorting.
 * This exercise focuses on processing an array of student objects based on GPA and hobbies,
 * then transforming the output.
 *
 * Task Description:
 * Write a function named `selectHighPerformingStudents`. This function takes an array of student objects as input.
 * Each student object has the following properties:
 * - id (integer): A unique identifier for the student.
 * - name (string): The student's name.
 * - email (string): The student's email.
 * - GPA (number): The student's GPA, ranging from 1 to 7.
 * - hobbies (array of strings): A list of the student's hobbies.
 *
 * The function should:
 * - Filter students who have a GPA greater than or equal to 5 and have 'coding' as one of their hobbies.
 * - Transform the filtered list to include only the student's name and email.
 * - Sort the resulting array alphabetically by the student's name.
 *
 * @param {Object[]} students - An array of student objects.
 * @return {Object[]} An array of objects containing the name and email of qualifying students, sorted by name.
 */
function selectHighPerformingStudents(students) {
  // Your implementation here
  const filteredStudentsByGPA = students.filter((student) => student.GPA >= 5);
  const filteredStudentsByHobby = filteredStudentsByGPA.filter((student) => student.hobbies.includes("coding"));
  const transformedStudents = filteredStudentsByHobby.map((student) => { return { name: student.name, email: student.email }});
  const sortedStudents = transformedStudents.sort((a, b) => (a.name.toLowerCase().localeCompare(b.name.toLowerCase())));

  return sortedStudents;
}

// console.log(selectHighPerformingStudents(studentRecords));

/**
 * Exercise 4: Aggregating Student Data with `reduce()`
 *
 * Objective:
 * Enhance your skills in using the `reduce()` method for complex data aggregation from an array of objects.
 * This exercise involves calculating statistics from a dataset of student objects, focusing on total count,
 * average GPA, and details about students interested in coding.
 *
 * Task Description:
 * Write a function named `aggregateStudentData` that processes an array of student objects. Each object includes
 * the following properties: `id` (integer), `name` (string), `email` (string), `GPA` (number, from 1 to 7),
 * and `hobbies` (array of strings).
 *
 * The function should return an object with these properties:
 * - `studentNum`: Total number of students
 * - `studentAvgGPA`: Average GPA of all students, rounded to two decimal places
 * - `codingStudentNum`: Number of students who list 'coding' as a hobby
 * - `codingStudentGPA`: Average GPA of students who list 'coding' as a hobby, rounded to two decimal places
 *
 * Implement this function using the `reduce()` method to aggregate the data effectively.
 *
 * @param {Object[]} students - An array of student objects.
 * @return {Object} An object containing aggregated student data.
 */
function aggregateStudentData(students) {
  // Your implementation here
  const studentNum = students.length;
  const studentAvgGPA = students.reduce((acc, student) => acc + student.GPA, 0) / studentNum;
  const codingStudents = students.filter((student) => student.hobbies.includes("coding"));
  const codingStudentNum = codingStudents.length;
  const codingStudentGPA = codingStudents.reduce((acc, student) => acc + student.GPA, 0) / codingStudentNum;

  return {
    studentNum,
    studentAvgGPA,
    codingStudentNum,
    codingStudentGPA
  }
}

// console.log(aggregateStudentData(studentRecords));

/**
 * Exercise 5: Swapping Between Sentence and CamelCase Forms
 *
 * Objective:
 * Enhance your string manipulation skills in JavaScript by converting between sentence form and camelCase form.
 * This exercise will challenge you to implement a function that can detect the form of a given string and convert it to the other form.
 *
 * Task Description:
 * Write a function named `swapForm` that processes a string input. The function should behave as follows:
 * - If the input string is in sentence form (i.e., contains spaces), convert it to camelCase. For example,
 *   "open a bank account" should be converted to "openABankAccount".
 * - If the input string is a single word, assumed to be in camelCase, convert it back to a sentence in all lower cases.
 *   For example, "openABankAccount" would be converted to "open a bank account".
 *
 * Note: You may assume that sentence inputs will be all lower case and camelCase inputs will start with a lowercase letter followed by mixed case.
 *
 * @param {string} input - A string in either sentence form or camelCase form.
 * @return {string} The converted string, either in camelCase or sentence form.
 */
function swapForm(input) {
  // Your implementation here
  if (input.includes(" ")) {
    const words = input
    .split(" ")
    .map((word, i) => (i > 0 ? word[0].toUpperCase() + word.slice(1) : word));

    const camelString = words.join("");
    return camelString;
  } 
  
  const words = input
    .split("")
    .map((word) => (word.toUpperCase() === word ? " " + word.toLowerCase() : word));

  const sentanceString = words.join("");
  return sentanceString;
}

// Export the function for testing with Jest
module.exports = {
  filterNegativeNumbers,
  doubleDivisibleByThree,
  selectHighPerformingStudents,
  aggregateStudentData,
  swapForm,
};
