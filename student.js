let MaxR = prompt();
let MaxOverall = 100;
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

let st1 = addStudent("pomah", 24, 40)


console.log(st1.isLeap());
