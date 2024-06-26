import { Injectable } from '@nestjs/common';
import Evervault from '@evervault/sdk';
import { TestDTO } from './dto/test.dto';

@Injectable()
export class AppService {


  encryptData(dto : TestDTO) {
    const data = this.encrypt(dto)

    return data
  }

  async encrypt(data : TestDTO){
    const vault = new Evervault("", "")

    const encrypted = await vault.encrypt(JSON.stringify(data))

    return encrypted
  }
}
