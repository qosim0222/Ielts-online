import { Module } from '@nestjs/common';
import { CentrService } from './centr.service';
import { CentrController } from './centr.controller';

@Module({
  controllers: [CentrController],
  providers: [CentrService],
})
export class CentrModule {}
