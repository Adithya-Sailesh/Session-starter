import { Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column, DeleteDateColumn } from "typeorm";





class AbstractEntity{

    @PrimaryGeneratedColumn()
    id:number

    
        @CreateDateColumn()
        createdAt: Date;
    
        @UpdateDateColumn()
        updatedAt: Date;

        @DeleteDateColumn()
        deleteAt: Date;

}

export default AbstractEntity