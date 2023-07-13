import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({name: 'produtos'})
export class Produto {

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable: true})
    nome:string

    @Column()
    tipo:string

    @Column()
    preço:number

    @Column()
    tamanho:string

    @Column()
    quantidadeEmEstoque:number

    @OneToMany(() => Pedido, pedidos => pedidos.produto)
    pedidos:Pedido[]
    
}
