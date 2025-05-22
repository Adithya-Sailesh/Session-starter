import { Repository } from "typeorm";
import Employee from "../entities/employee.entity";

class EmployeeRepository{
    constructor(private repostiory:Repository<Employee>){}

        async create(employee : Employee): Promise<Employee>{
            return this.repostiory.save(employee);
        }

        async findMany():Promise<Employee[]>{

            return this.repostiory.find({
                    relations:{
                        address:true
                    }
            }
                
            );
        }

        async findone(id:number):Promise<Employee>{
            return this.repostiory.findOne({
                where:{id},
                relations:{
                    address:true
                }
                }
            );
        };

        async update(id:number,employee:Employee):Promise<void>{
                
            await this.repostiory.save({id , ...employee});
        }

        async delete(id:number):Promise<void>{
            const employee = await this.repostiory.findOne({ where: { id } });
            if(employee){
                await this.repostiory.softDelete({id});
            }
            
        }
    }


    export default EmployeeRepository