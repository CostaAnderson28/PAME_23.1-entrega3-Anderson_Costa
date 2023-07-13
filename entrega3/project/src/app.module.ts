import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite', 
    database: 'db_e3',
    entities: [],
    synchronize: true,
    autoLoadEntities: true 
  }), UserModule, ProdutosModule, PedidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
