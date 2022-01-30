const staff = [
    {name:'bob',age:20,pos:'dev',sal:100},
    {name:'cob',age:25,pos:'des',sal:150},
    {name:'dob',age:30,pos:'int',sal:100.5},
]

const dailyTotal = staff.reduce((total,person)=>{
    

    console.log(person.sal);
    return total
},0)

// console.log(dailyTotal)