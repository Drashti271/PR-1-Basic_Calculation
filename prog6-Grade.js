let name = 'Smith';
let rollno = 25;
let sub1 = 85
    sub2 = 60
    sub3 = 45;
let total = sub1 + sub2 + sub3;
let percentage = (total / 300) * 100;

console.log(`Student name is: ${name}`);
console.log(`Student rollno is: ${rollno}`);
console.log(`Student sub1 marks: ${sub1}`);
console.log(`Student sub2 marks: ${sub2}`);
console.log(`Student sub3 marks: ${sub3}`);

if(sub1 >= 35 && sub2 >= 35 && sub3 >= 35){
    console.log("Student Pass.");
    if(percentage >= 90){
    console.log(`A+ Grade ${percentage.toFixed(2)}%`);
    }else if(percentage >= 80){
        console.log(`A Grade ${percentage.toFixed(2)}%`);
    }else if(percentage >= 70){
        console.log(`B+ Grade ${percentage.toFixed(2)}%`);
    }else if(percentage >= 60){
        console.log(`B Grade ${percentage.toFixed(2)}%`);
    }else if(percentage >= 50){
        console.log(`C Grade ${percentage.toPrecision(2)}%`);
    }
}else{
    console.log("Student Fail.");
}
