import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  create(createUserDto: CreateUserDto) {
    const new_user = this.userRepository.create({
      ...createUserDto
    });
    this.userRepository.save(new_user);
    return 'Usuário criado.'
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.update(
      {id},
      {...updateUserDto}
      )
    return 'Usuário atualizado.'
  }

  remove(id: number) {
    this.userRepository.delete({id});
    return 'Usuário deletado.'
  }
}
