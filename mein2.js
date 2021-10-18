const checkValues = (obj, value) => { 

  if (Object.values(obj).indexOf(value) > -1) {
      console.log('true');}
      else{
          console.log("false");};}





      const courseInfo = {
          name: "Code 301",
          duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
          topics: [
            "SMACSS",
            "APIs",
            "NodeJS",
            "SQL",
            "jQuery",
            "functional programming",
          ],
          finalExam: true,};



        const getCourseKeys = (obj) => {
         
          console.log(Object.keys(obj));};
      let data = {GraceHopper: '222-303-5938',
      AdaLovelace: '222-349-9842',
      AlanTuring: '222-853-5933'};



const updateNumbers = (obj) => {
  for (const key in obj){
      console.log(obj);}};



const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },};




const studentTwo = {
math: { grade: 59, total: 120 },
english: { grade: 80, total: 100 },
art: { grade: 90, total: 100 },};




const PassedOrFailed = function (studentGrades) {
  const avr = Object.values(studentGrades);
  for (let i = 0; i < avr.length; i++) {
    if (avr[i].grade / avr[i].total < 0.50) 
    return "The student have failed"; }

    

  return "The student have passed";
};
const totalCharacters = (arr) => {
  const coun = arr.reduce((acc, item) => {
    acc += item.length;
    return acc;}, 0);
  return coun;};

const houseSize = (arr) => {
  const sizes = [];
  for (let i = 0; i < arr.length; i += 2) {
    const obj = {};
    obj["house"] = arr[i];
    obj["members"] = arr[i + 1];
    sizes.push(obj);}
  return sizes;};



