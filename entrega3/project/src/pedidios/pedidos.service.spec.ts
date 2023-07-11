import { Test, TestingModule } from '@nestjs/testing';
import { PedidiosService } from './pedidos.service';

describe('PedidiosService', () => {
  let service: PedidiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidiosService],
    }).compile();

    service = module.get<PedidiosService>(PedidiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
