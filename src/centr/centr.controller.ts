import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CentrService } from './centr.service';
import { CreateCentrDto } from './dto/create-centr.dto';
import { UpdateCentrDto } from './dto/update-centr.dto';

@Controller('centr')
export class CentrController {
  constructor(private readonly centrService: CentrService) {}

  @Post()
  create(@Body() createCentrDto: CreateCentrDto) {
    return this.centrService.create(createCentrDto);
  }

  @Get()
  findAll() {
    return this.centrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCentrDto: UpdateCentrDto) {
    return this.centrService.update(+id, updateCentrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centrService.remove(+id);
  }
}
