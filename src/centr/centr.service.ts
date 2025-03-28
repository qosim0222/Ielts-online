import { Injectable } from '@nestjs/common';
import { CreateCentrDto } from './dto/create-centr.dto';
import { UpdateCentrDto } from './dto/update-centr.dto';

@Injectable()
export class CentrService {
  create(createCentrDto: CreateCentrDto) {
    return 'This action adds a new centr';
  }

  findAll() {
    return `This action returns all centr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} centr`;
  }

  update(id: number, updateCentrDto: UpdateCentrDto) {
    return `This action updates a #${id} centr`;
  }

  remove(id: number) {
    return `This action removes a #${id} centr`;
  }
}
