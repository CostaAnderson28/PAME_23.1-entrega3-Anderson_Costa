import { Produto } from "src/produtos/entities/produto.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from "typeorm";


@Entity({name: 'pedidos'})
export class Pedido {

    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    data:Date

    @Column()
    status:string

    @Column()
    quantidade:number

    @Column()
    valorTotal:number

    @ManyToOne(() => User, user => user.pedidos)
    usuario:User
   
    @ManyToOne(() => Produto, produtos => produtos.pedidos )
    produto:Produto
}
