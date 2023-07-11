import { User } from "src/user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity({name: 'produtos'})
export class Produto {

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable: true})
    Nome:string

    @Column()
    Tipo:string

    @Column()
    Preço:number

    @Column()
    Tamanho:string

    @Column()
    Quantidade_em_estoque:number

    @ManyToMany(() => User , user => user.Produtos, {nullable: true})
    Usuários:User[]

}
