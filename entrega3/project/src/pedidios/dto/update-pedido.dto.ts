import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidioDto } from './create-pedido.dto';

export class UpdatePedidioDto extends PartialType(CreatePedidioDto) {}
