import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';
import { UpdateProdutoDto } from 'src/produtos/dto/update-produto.dto';
import { Produto } from 'src/produtos/entities/produto.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from 'src/pedidos/dto/create-pedido.dto';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { UpdatePedidoDto } from 'src/pedidos/dto/update-pedido.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>,
              @InjectRepository(Produto) private produtoRepository:Repository<Produto>,
              @InjectRepository(Pedido) private pedidoRepository:Repository<Pedido>){}

  create(createUserDto: CreateUserDto){
    const newUser = this.userRepository.create(
      {...createUserDto}
      );
    this.userRepository.save(newUser);
    return 'Usuário criado.'
  }

  findAll(){
    return this.userRepository.find({relations: ['pedidos']});
  }

  findOne(id: number){
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto){
    this.userRepository.update(
      {id},
      {...updateUserDto}
      );
    return 'Usuário atualizado.';
  }

  remove(id: number) {
    this.userRepository.delete({id});
    return 'Usuário deletado.';
  }
 // funções de manutenção dos produtos. 
  async createProduct(id: number, createProdutoDto: CreateProdutoDto){
    const user = await this.userRepository.findOneBy({id});
    if(!user)
      throw new HttpException(
        'Usuário não encontrado.',
        HttpStatus.BAD_REQUEST
        );
    if(user.tipo != 'ADM')
      throw new HttpException(
        'Este usuário não possui as devidas permissões',
        HttpStatus.BAD_REQUEST
      );
    const newProduct = this.produtoRepository.create({
      ...createProdutoDto, 
    });
    this.produtoRepository.save(newProduct);
    return 'Produto criado com sucesso'
  }

  async updateProduct(id1: number, id2: number, updateProdutoDto: UpdateProdutoDto){
    const user = await this.userRepository.findOneById(id1);
    if(!user)
    throw new HttpException(
      'Usuário não encontrado.',
      HttpStatus.BAD_REQUEST
      );
      if(user.tipo != 'ADM')
      throw new HttpException(
        'Este usuário não possui as devidas permissões.',
        HttpStatus.BAD_REQUEST
      );
    this.produtoRepository.update(
      id2,
      {...updateProdutoDto});
    return 'Produto atualizado com sucesso.'

  }

  async removeProduct(id1: number, id2: number){
    const user = await this.userRepository.findOneById(id1);
    if(!user)
    throw new HttpException(
      'Usuário não encontrado.',
      HttpStatus.BAD_REQUEST
      );
    if(user.tipo != 'ADM')
    throw new HttpException(
      'Este usuário não possui as devidas permissões',
      HttpStatus.BAD_REQUEST
      );
    this.produtoRepository.delete(id2);
    return 'Produto removido.'
  }
// fim das funções de manutenção dos produtos.  

// inicio das funções de manutenção de pedidos

  async createOrder(id1:number, id2:number, createPedidoDto: CreatePedidoDto){
    const user = await this.userRepository.findOneById(id1);
    const product = await this.produtoRepository.findOneById(id2);
    if(!user)
      throw new HttpException(
        'Usuário não encontrado.',
        HttpStatus.BAD_REQUEST
        );;
    if(user.tipo == 'ADM')
    throw new HttpException(
      'Este usuário não possui as devidas permissões',
      HttpStatus.BAD_REQUEST
      );
    const newOrder = this.pedidoRepository.create({
      ...createPedidoDto,
      data: new Date,
      status: 'Aguradando pagamento',
      valorTotal: (createPedidoDto.quantidade*product.preço),
      usuario: user, 
      produto: product
    })
    this.pedidoRepository.save(newOrder)
    return 'Pedido enviado com sucesso'
  }

  async updateOrder(id1:number, id2:number, updatePedidoDto: UpdatePedidoDto){
    const user = await this.userRepository.findOneById(id1);
    const order = await this.pedidoRepository.findOneById(id2)
    if(!user)
      throw new HttpException(
        'Usuário não encontrado.',
        HttpStatus.BAD_REQUEST
        );;
    if(user.tipo != 'ADM' && (order.usuario != user )){
    throw new HttpException(
      'Este usuário não possui as devidas permissões',
      HttpStatus.BAD_REQUEST
      );}
    if(user.tipo != 'ADM' && order.status != 'Aguradando pagamento')
    throw new HttpException(
      'Este pedido não pode mais ser alterado, entre em contato com o suporte!',
      HttpStatus.BAD_REQUEST
      );
    this.pedidoRepository.update(id2,{...updatePedidoDto})
    return 'Pedido atualizado com sucesso.'
  }

  async removeOrder(id1:number, id2:number){
    const user = await this.userRepository.findOneById(id1);
    const order = await this.pedidoRepository.findOneById(id2)
    if(!user)
      throw new HttpException(
        'Usuário não encontrado.',
        HttpStatus.BAD_REQUEST
        );;
    if(user.tipo != 'ADM' && (order.usuario != user )){
      throw new HttpException(
        'Este usuário não possui as devidas permissões',
        HttpStatus.BAD_REQUEST
        );}
    if(user.tipo != 'ADM' && order.status != 'Aguradando pagamento')
    throw new HttpException(
      'Entre em contato com o suporte!',
      HttpStatus.BAD_REQUEST
      );
    this.pedidoRepository.delete(id2)
    return 'Pedido cancelado'
  }
  // fim das funções de manutenção dos pedidos.
}
