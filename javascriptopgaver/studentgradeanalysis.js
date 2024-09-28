// JavaScript Exercise: Student Grades Analysis //

// 1: grades
const studentGrades = [2,27,54,63,70,81,92,99];

// 2: number of grades
const gradesCount = studentGrades.length;
console.log('amount of grades: '+gradesCount);

// 3: Classify grades into categories
//Categories
function categoriseGrade(grade){
    switch (true){          //checking if grade has true condition to each category
        case grade<60:
            return grade+": F"
        case 60<=grade && grade<=69:
            return grade+": D"
        case 70<=grade && grade<=79:
            return grade+": C"
        case 80<=grade && grade<=89:
            return grade+": B"
        case 90<=grade:
            return grade+": A"
    }
}
// call categorise on all grades
for (let grade of studentGrades) {
    console.log(categoriseGrade(grade));
}

// 4: Evaluate overall performance
// defining the average score to a let
let avgScore = eval(studentGrades.join('+'))/studentGrades.length
// Checking if avgscore matches performance conditions
function avgPerformanceEval(avgScore){
    switch (true){
        case avgScore<70:
            return "Needs Improvement"
        case 70<=avgScore && avgScore<=79:
            return "Satisfactory"
        case 80<=avgScore && avgScore<=89:
            return "Good"
        case 90<=avgScore:
            return "Excellent"
    }
}
const performanceResult = avgPerformanceEval(avgScore)
console.log(performanceResult)

// 5: Determine
//The highest grade
const highGrade = Math.max(...studentGrades) //using a spread operator to the math function
console.log('Highest grade: ' + highGrade)
//The lowest grade
const lowGrade = Math.min(...studentGrades)
console.log('Lowest grade: ' + lowGrade)
// Reusing the avgscore from 4: as avgGrade
console.log('Average grade: ' + avgScore)

// 6: Output
//Highest grade with category
console.log('Highest grade: ' + categoriseGrade(highGrade))
//Lowest grade with category
console.log('Lowest grade: ' + categoriseGrade(lowGrade))

