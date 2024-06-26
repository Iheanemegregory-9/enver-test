import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDTO } from './dto/test.dto';

@Controller('encrypt')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post() 
  encryptData(@Body() body : TestDTO) {
    return this.appService.encryptData(body);
  }
}
