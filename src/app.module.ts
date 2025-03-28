import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RegionModule } from './region/region.module';
import { MentorModule } from './mentor/mentor.module';
import { CentrModule } from './centr/centr.module';

@Module({
  imports: [UploadModule, ServeStaticModule.forRoot({
    rootPath:join(__dirname, '..', 'uploads'),
    serveRoot:'/uploads'
  }), PrismaModule, UserModule, RegionModule, MentorModule, CentrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
