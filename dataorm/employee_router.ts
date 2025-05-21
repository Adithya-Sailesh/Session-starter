// import express from "express";
// import Employee from "./entities/employee.entity";
// import datasource from "./db/data-source";

// const employeeRouter = express.Router();
// // let count = 2;
// // let employees: Employee[] = [
// //   {
// //     id: 1,
// //     email: "employee1@gmail.com",
// //     name: "Employee1",
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// //   },
// //   {
// //     id: 2,
// //     email: "employee2@gmail.com",
// //     name: "Employee2",
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// //   },
// // ];

// employeeRouter.get("/", async(req, res) => {
//   const employeeRepository=datasource.getRepository(Employee);
//   const employee=await employeeRepository.find();
//   res.status(200).send(employee)
// });

// employeeRouter.get("/:id", async(req, res) => {
//   // const empId = Number(req.params["id"]);
//   // const employee = employees.find((emp) => emp.id === empId);
//   // if (!employee) {
//   //   res.status(404).send("Employee not found");
//   //   return;
//   // }
//   // res.status(200).send(employee);
//   const employeeRepository=datasource.getRepository(Employee);
//   const employee=await employeeRepository.findOneBy({id : req.params.id});
//   res.status(200).send(employee)

// });

// employeeRouter.post("/", async(req, res) => {
//   console.log(req.body);
//   // const newEmployee = new Employee();
//   // newEmployee.email = req.body.email;
//   // newEmployee.name = req.body.name;
//   // newEmployee.createdAt = new Date();
//   // newEmployee.updatedAt = new Date();
//   // newEmployee.id = ++count;
//   // employees.push(newEmployee);


//   // await datasource
//   //   .createQueryBuilder()
//   //   .insert()
//   //   .into(Employee)
//   //   .values([
//   //       { name: req.body.name, email:req.body.email}
//   //   ])
//   //   .execute()


//   const employeeRepository=datasource.getRepository(Employee);
//   const employee=await employeeRepository.insert({name:req.body.name,email:req.body.email});
//   res.status(200).send(employee);
// });

// employeeRouter.delete("/:id", async(req, res) => {
//   // const employeeIdxToDelete = employees.findIndex(
//   //   (emp) => emp.id === Number(req.params["id"]),
//   // );
//   // employees.splice(employeeIdxToDelete, 1);

//   const employeeRepository=datasource.getRepository(Employee);
//   const employee=await employeeRepository.delete({id:req.params.id});

//   res.status(200).send("Employee deleted" +employee);
// });

//   employeeRouter.patch("/:id",async(req,res)=>{
//       const employeeRepository=datasource.getRepository(Employee);
//       const employee=await employeeRepository.update(req.params.id,{name:req.body.name});
//       res.status(200).send("Employee updated" +employee);
//   })

// employeeRouter.put("/", async(req, res) => {
//   // const employee = employees.find((emp) => emp.id === Number(req.params["id"]));
//   // employee.email = req.body.email;
//   // employee.name = req.body.name;
//   // employee.updatedAt = new Date();
//   // console.log("update employees");
//   const employeeRepository=datasource.getRepository(Employee);
//   const emp =await employeeRepository.findOneBy({email:req.body.email})
//   emp.name=req.body.name
//   const employee=await employeeRepository.save(emp);
//   res.status(200).send(employee);
// });
  


// export default employeeRouter;
