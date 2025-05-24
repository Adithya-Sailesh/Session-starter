
import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn ,DeleteDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./adress.entity";
import Department from "./department.entity";

export enum EmployeeRole{
  UI="UI",
  UX="UX",
  DEVELOPER="DEVELOPER",
  HR="HR"
}



export enum EmployeeStatus{
  ACTIVE="ACTIVE",
  INACTIVE="INACTIVE",
  PROBATION="PROBATION",
}

@Entity()
class Employee extends AbstractEntity{
   

    @Column({unique:true})
    email: string;

    @Column()
    name: string;

    @Column()
    age:number;

    @Column({nullable:true})
    employeeid:string;

    @Column({nullable:true})
    dateOfJoining:Date

    @Column({nullable:true})
    experience:number

    @OneToOne(()=>Address,(address)=>address.employee,{
      cascade:true,
    })
    address:Address;

    @Column()
    password:string;
   
    @Column({
      type:'enum',
      enum:EmployeeRole,
      default:EmployeeRole.DEVELOPER
    })
    role:EmployeeRole

    @Column({
      type:'enum',
      enum:EmployeeStatus,
      default:EmployeeStatus.INACTIVE
    }) 
    status:EmployeeStatus

    @ManyToOne(()=>Department,(department)=>department.employee,{
      // cascade:true,   
      onDelete:'SET NULL' //-- this should be i think
    })
    department:Department
  }
  
  export default Employee;
  