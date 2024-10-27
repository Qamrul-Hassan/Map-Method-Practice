/* 7. Using map(), filter(), and find() on array of students objects. */

let students =[
    {name: "Arif", marks: 90},
    {name: "John", marks: 85},
    {name: "fahad", marks: 80}
];

let studentsNames = students.map(student=> student.name);
console.log(studentsNames);

let highScore = students.find(student => student.marks > 84);
console.log(highScore);