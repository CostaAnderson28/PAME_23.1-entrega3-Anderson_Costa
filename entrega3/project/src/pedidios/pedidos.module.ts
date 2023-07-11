import { Module } from '@nestjs/common';
import { PedidiosService } from './pedidos.service';
import { PedidiosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Pedido } from './entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Pedido])],
  controllers: [PedidiosController],
  providers: [PedidiosService]
})
export class PedidosModule {}
