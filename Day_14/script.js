// const studentName = "Likhilesh";
// const studentCity = "Delhi";
// const studentRollNumber = "2616400901";
// const studentCollege = "KRMU";

// const student = {
//     name: "Likhilesh",
//     city: "Delhi",
//     rollNumber: "2616400901",
//     college: "KRMU",
// };

// console.log(student);
// console.log(typeof student);

// console.log(student.name);
// console.log(student["name"]);

// console.log(student.phone);

// student["country"] = "INDIA";
// console.log(student);

// student["college"] = "Zenith";
// console.log(student);

// ---------------------------------
// const product = {
//     title: "Monitor",
//     price: 7000,
//     brand: "Sony",
// };
// console.log(product);
// product.warranty = '3 years';
// product.price = 9000;
// console.log(product);
// product.price = 11000;
// ---------------------------------

// const student = {
//     name: "Likhilesh",
//     city: "Delhi",
//     rollNumber: "2616400901",
//     college: "KRMU",
// };
// console.log(student);
// delete student.college;
// console.log(student);

// ---------------------------------

const student = {
    name: "Likhilesh",
    city: "Delhi",
};

const teacher = student;
teacher.name = "Anuj";
console.log(student);
console.log(teacher);
