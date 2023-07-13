import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosService {
  constructor(@InjectRepository(Pedido) private pedidoRepository:Repository<Pedido>){}
  
  findAll() {
    return this.pedidoRepository.find({relations:['usuario', 'produto']});
  }

  findOne(id: number) {
    return this.pedidoRepository.findOneBy({id});
  }
}
