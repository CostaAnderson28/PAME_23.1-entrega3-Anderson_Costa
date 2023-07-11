import { Pedido } from "src/pedidios/entities/pedido.entity";
import { Produto } from "src/produtos/entities/produto.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";

@Entity({name: 'user'})
export class User {

    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    Usuário:string

    @Column()
    Senha:string

    @Column()
    Tipo:string

    @OneToMany(() => Pedido , pedidos => pedidos.Usuário, {nullable: true})
    Pedidos: Pedido[]

    @ManyToMany(() => Produto, produtos => produtos.Usuários, {nullable: true})
    Produtos: Produto[]



}
