import { Column, DeleteDateColumn, Entity ,UpdateDateColumn,CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Employee from "./employee.entity";



@Entity()
class Address extends AbstractEntity{

    @Column()
    line1:string

    @Column()
    pincode:string

    @Column({nullable:true})
    line2:string

    @Column({nullable:true})
    houseNo:string

    @OneToOne(() => Employee, (employee) => employee.address, {
     onDelete: 'CASCADE'
    })
    @JoinColumn()
    employee: Employee;


   
}

export default Address