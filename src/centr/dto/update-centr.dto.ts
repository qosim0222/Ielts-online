import { PartialType } from '@nestjs/swagger';
import { CreateCentrDto } from './create-centr.dto';

export class UpdateCentrDto extends PartialType(CreateCentrDto) {}
