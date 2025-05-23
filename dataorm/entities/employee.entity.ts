
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



export enum Status{
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

    @Column()
    employeeid:string;

    @Column()
    dateOfJoining:Date

    @Column()
    experience:number
    
    @OneToOne(()=>Address,(address)=>address.employee,{
      cascade:true,
    })
    // @JoinColumn()
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
      enum:Status,
      default:Status.INACTIVE
    }) 
    @ManyToOne(()=>Department,(department)=>department.employee,{
      cascade:true,   
      // onDelete:'SET NULL'
    })
    department:Department
  }
  
  export default Employee;
  