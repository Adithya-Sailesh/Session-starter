
import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn ,DeleteDateColumn, OneToOne, JoinColumn} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./adress.entity";

export enum EmployeeRole{
  UI="UI",
  UX="UX",
  DEVELOPER="DEVELOPER",
  HR="HR"
}

@Entity()
class Employee extends AbstractEntity{
   

    @Column({unique:true})
    email: string;

    @Column()
    name: string;

    @Column()
    age:number;

    @OneToOne(()=>Address,(address)=>address.employee,{
      cascade:true,
      onDelete:'CASCADE'
    })
    @JoinColumn()
    address:Address;

    @Column()
    password:string;
   
    @Column({
      type:'enum',
      enum:EmployeeRole,
      default:EmployeeRole.DEVELOPER
    })
    role:EmployeeRole

  
  }
  
  export default Employee;
  