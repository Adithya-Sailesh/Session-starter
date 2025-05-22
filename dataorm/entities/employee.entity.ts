
import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn ,DeleteDateColumn, OneToOne, JoinColumn} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./adress.entity";

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
    password:String;
   
    
  }
  
  export default Employee;
  