import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number, module: string) {
    console.log(`Supplying ${watts} watts to ${module}`);
  }
}
