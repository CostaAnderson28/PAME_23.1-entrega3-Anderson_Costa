
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from "typeorm";

@Entity({name: 'user'})
export class User {

    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    usuario:string

    @Column()
    senha:string

    @Column()
    tipo:string

    @OneToMany(() => Pedido , pedidos => pedidos.usuario)
    pedidos: Pedido[]
}
