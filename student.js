let MaxR = prompt("Текущее максимально возможное количество баллов:");
let MaxOverall = 100;

let Students = [];

function addStudent (name, age, curR) {
  
  let Student = {
    Name:name ,
    Age:age,
    Rating:curR,

    isLeap() {
      let date = new Date();
      let BYear = date.getFullYear()-age;
      let leap;
      
      if(BYear%4 == 0)
      {
        if(BYear%100 == 0)
        {
          if(BYear%400 == 0)
          {
            leap = 1;
          }
          else leap = 0;
        }
        else leap = 1;
      }
        
      else leap = 0;
      
      return leap;    
    },
    
    pRating() {      
    return (curR/MaxR)*MaxOverall - 3*Student.isLeap();      
    },
    
    getGrade() {
    
      let gr;
      
      if(curR >= 85){
        gr = 5;
      }
      
      else if(curR >= 60 && curR < 85){
        gr = 4;
      }
      
      else if(curR >= 40 && curR < 60){
        gr = 3;
      }
      
      else gr = 2;
    
      return gr;
    }
            
  }  
  return Student
}

for(;;){
  let newName = prompt("Имя:");
  let newAge = prompt("Возраст:");
  let newCurR = prompt("Баллы:");
  
  Students.push(addStudent(newName, newAge, newCurR));
  
  if(!window.confirm("Продолжить ввод?")) {
    break;
  }  
}

function AvRating(students) {
  let sum = 0;
  
  for(i = 0; i<students.length; i++)
  {
    sum = 1*sum + 1*students[i].Rating;
  }
  
  return sum/students.length;
}

for(i = 0; i<Students.length; i++){

  console.log("Имя:",Students[i].Name, "Возраст:", Students[i].Age, "Рейтинг", Students[i].Rating, "Оценка:", Students[i].getGrade(), "Прогнозируемый рейтинг:", Students[i].pRating(), "Високосный год:", Students[i].isLeap());
}

console.log("Средний рейтинг:",AvRating(Students));
