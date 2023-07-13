import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Produto,Pedido])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
