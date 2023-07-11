import { User } from "src/user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";


@Entity({name: 'pedidos'})
export class Pedido {

    @PrimaryGeneratedColumn()
    Id:number 

    @Column()
    Data:Date

    @Column()
    Status:string

    @ManyToOne(() => User, user => user.Pedidos)
    Usuário:User

    

}
