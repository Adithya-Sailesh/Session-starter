import { Column, DeleteDateColumn, Entity ,UpdateDateColumn,CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Employee from "./employee.entity";



@Entity()
class Department extends AbstractEntity{

    @Column()
    deptname:string

    @OneToMany(()=>Employee,(employee)=>employee.department,{
        // onDelete:"SET NULL" //wrong
        // cascade:true
    })
    employee:Employee[] // employee:Employee[]
    
}

export default Department