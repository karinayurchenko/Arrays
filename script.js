const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const getpairs = (students) =>{
   const pairs = [];
    for (let i = 0; i < students.length; i+=2) {
        pairs.push(students.slice(i, i+2))    
    }
    return pairs;
};
    console.log (getpairs(students));

const pairs =  getpairs(students); 
const getThemes = (pairs, themes) => {
    const themesForStudents = [];
    for (let i = 0; i < pairs.length; i++) {
        themesForStudents.push([pairs[i], themes[i]])
    }
    return themesForStudents;
};
    console.log (getThemes(pairs, themes));
    

const getStudentsMarks = (students, marks) => {
    const marksForStudents = [];
    for (let i = 0; i < students.length; i++) {
        marksForStudents.push([students[i],marks[i]])
    }
    return marksForStudents;
};
    console.log (getStudentsMarks(students, marks));


const getRandomMarksForTasks =(students, marks) => {
    const randomMarksForStudents = [];
    for (let i = 0; i < students.length; i++) {
        randomMarksForStudents.push([students[i],marks[Math.floor(Math.random() * marks.length)]])
    }
    return randomMarksForStudents;
};
    console.log (getRandomMarksForTasks(students, marks));

   
    document.writeln(`<p> Pairs: ${getpairs(students)}</p>`);
    document.writeln(`<p> Themes: ${getThemes(pairs, themes)} </p>`);
    document.writeln(`<p> Marks: ${getStudentsMarks(students, marks)}</p>`);
    document.writeln(`<p> Random marks: ${getRandomMarksForTasks(students, marks)}</p>`);
