class student{
 
  static count=0;

  constructor(roll,name,marks){
    this.RollNumber=roll;
    this.Name=name;
    this.Marks=marks;
}
display(){
    console.log("Name",this.Name)
    console.log("RollNumber:",this.RollNumber)
    console.log("Marks",this.Marks)
    student.count++;
    if(this.Marks>=35){
        console.log("pass")
    }
    else{
        console.log("Fail")
    }
}

}
let s=new student("vishuu",2363,35)
let s1=new student("Dishu",53663,23)
s.display()
s1.display()
console.log(student.count)
