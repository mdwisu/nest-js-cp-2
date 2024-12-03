import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('CPU membutuhkna 10 wat untuk menghitung');
    this.powerService.supplyPower(10, 'CPU');
    return a + b;
  }
}
