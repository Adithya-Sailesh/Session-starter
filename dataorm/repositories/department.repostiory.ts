import { Repository } from "typeorm";
import Deparment from "../entities/department.entity";

class DeparmentRepository{
    constructor(private repostiory:Repository<Deparment>){}

        async create(department: Deparment): Promise<Deparment>{
            return this.repostiory.save(department);
        }

        
        async findbyid(id:number):Promise<Deparment>{
            return this.repostiory.findOne({
                where:{id},
                relations:{
                    employee:true
                }
            })
        }



        async findMany():Promise<Deparment[]>{

            return this.repostiory.find({
                relations:{
    
                        employee:true
                    }
            });
        }

        async update(id:number,department:Deparment):Promise<void>{
                
            await this.repostiory.save({id , ...department});
        }

        async delete(id:number):Promise<void>{
            const dept = await this.repostiory.findOne({ where: { id } });
            if(dept){
                await this.repostiory.softDelete({id});
            }
            
        }
    }


    export default DeparmentRepository