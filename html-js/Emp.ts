interface Emp{
id:number;
name:string;
city:string;
salary:number;
}

var emp:Emp={id:100,name:'Shantanu',city:'Hyderabad',salary:45000};

console.log(emp.name);


var empdata:Emp[]=
[
{id:100,name:'Shantanu',city:'Hyderabad',salary:45000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:45000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:45000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:45000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:45000}
];

var names:string[]=['Shantanu',"Rohan","Ankit",'Arun','Chandra'];

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}