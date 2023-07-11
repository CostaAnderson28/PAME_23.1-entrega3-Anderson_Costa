import { Test, TestingModule } from '@nestjs/testing';
import { PedidiosController } from './pedidos.controller';
import { PedidiosService } from './pedidos.service';

describe('PedidiosController', () => {
  let controller: PedidiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidiosController],
      providers: [PedidiosService],
    }).compile();

    controller = module.get<PedidiosController>(PedidiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
