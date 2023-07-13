import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(@InjectRepository(Produto) private produtoRepository:Repository<Produto>){}

  findAll() {
    return this.produtoRepository.find({relations: ['pedidos']});
  }

  findOne(id: number) {
    return this.produtoRepository.findOneBy({id});
  }
}
