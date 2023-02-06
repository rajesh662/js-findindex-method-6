const employees1 = [
 { name: "David Carlson",age: 30 },
 
 { name: "John Cena", age: 34 },
 
 { name: "Mike Sheridan", age: 25 },
 
 { name: "John Carte", age: 50 }
];

let result4= employees1.findIndex(emply => emply.name.includes("John"))
	

document.write(result4);
document.write("<br>");
