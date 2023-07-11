import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Produto } from './entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosService]
})
export class ProdutosModule {}
