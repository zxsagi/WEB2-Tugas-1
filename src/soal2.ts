function gradingStudents(grades: number[]): number[] {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        }
        return grade;
    });
}

// Contoh penggunaan
const grades: number[] = [73, 67, 38, 33];
const roundedGrades: number[] = gradingStudents(grades);
console.log(roundedGrades);  