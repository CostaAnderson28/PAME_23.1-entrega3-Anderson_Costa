import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidiosService } from './pedidos.service';
import { CreatePedidioDto } from './dto/create-pedido.dto';
import { UpdatePedidioDto } from './dto/update-pedido.dto';

@Controller('pedidios')
export class PedidiosController {
  constructor(private readonly pedidiosService: PedidiosService) {}

  @Post()
  create(@Body() createPedidioDto: CreatePedidioDto) {
    return this.pedidiosService.create(createPedidioDto);
  }

  @Get()
  findAll() {
    return this.pedidiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidiosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidioDto: UpdatePedidioDto) {
    return this.pedidiosService.update(+id, updatePedidioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidiosService.remove(+id);
  }
}
