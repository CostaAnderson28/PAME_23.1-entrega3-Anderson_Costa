import { Injectable } from '@nestjs/common';
import { CreatePedidioDto } from './dto/create-pedido.dto';
import { UpdatePedidioDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidiosService {
  create(createPedidioDto: CreatePedidioDto) {
    return 'This action adds a new pedidio';
  }

  findAll() {
    return `This action returns all pedidios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidio`;
  }

  update(id: number, updatePedidioDto: UpdatePedidioDto) {
    return `This action updates a #${id} pedidio`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidio`;
  }
}
