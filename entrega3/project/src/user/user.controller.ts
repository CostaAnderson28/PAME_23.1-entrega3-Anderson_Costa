import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';
import { CreatePedidoDto } from 'src/pedidos/dto/create-pedido.dto';
import { UpdateProdutoDto } from 'src/produtos/dto/update-produto.dto';
import { UpdatePedidoDto } from 'src/pedidos/dto/update-pedido.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //http:://localhost:3000/user/:id1/produtos/:id2/pedido/post
  //id1 = id do usuário que fará o pedido
  //id2 = id do produto solicitado
  @Post(':id1/produtos/:id2/pedido/post')
  create_order(@Param('id1') id1:string, @Param('id2') id2:string, @Body() createPedidoDto: CreatePedidoDto){
    return this.userService.createOrder(+id1, +id2, createPedidoDto)
  }

  //http:://localhost:3000/user/:id1/pedido/:id2/post
  //id1 = id do usuário que alterará o pedido
  //id2 = id do pedido a ser alterado
  @Patch(':id1/pedido/:id2/post')
  update_order(@Param('id1') id1:string, @Param('id2') id2:string, @Body() updatePedidoDto: UpdatePedidoDto){
    return this.userService.updateOrder(+id1, +id2, updatePedidoDto)
  }
  //http:://localhost:3000/user/:id1/pedido/:id2/
  //id1 = id do usuário que removerá o pedido
  //id2 = id do pedido a ser removvido
  @Delete(':id1/pedido/:id2')
  remove_order(@Param('id1') id1:string, @Param('id2') id2:string){
    return this.userService.removeOrder(+id1, +id2)
  }

  //http:://localhost:3000/user/:id/produtos/post
  //id = id do usuário que criará o produto
  @Post(':id/produtos/post')
  create_product(@Param('id') id: string, @Body() createProdutoDto: CreateProdutoDto){
    return this.userService.createProduct(+id, createProdutoDto)
  }
  //http:://localhost:3000/user/:id2/produtos/:id2/post
  //id1 = id do usuário que alterará o produto
  //id2 = id do produto que será alterado
  @Patch(':id1/produtos/:id2/post')
  update_product(@Param('id1') id1:string, @Param('id2') id2:string, @Body() updateProdutoDto: UpdateProdutoDto){
    return this.userService.updateProduct(+id1, +id2, updateProdutoDto);
    }

  //http:://localhost:3000/user/:id2/produtos/:id2/
  //id1 = id do usuário que removerá o produto
  //id2 = id do produto que será removido
  @Delete(':id1/produtos/:id2')
  remove_product(@Param('id1') id1:string, @Param('id2') id2:string){
    return this.userService.removeProduct(+id1, +id2);
    }
  //http:://localhost:3000/user/post
  @Post()
  create_user(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //http:://localhost:3000/user
  @Get()
  findAll_user() {
    return this.userService.findAll();
  }
  
  //http:://localhost:3000/user/:id
  @Get(':id')
  findOne_user(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  
  //http:://localhost:3000/user/:id
  @Patch(':id')
  update_user(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  
  //http:://localhost:3000/user/:id
  @Delete(':id')
  remove_user(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
