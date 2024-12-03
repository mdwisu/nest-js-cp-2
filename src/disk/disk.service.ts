import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('disk membutuhkan 20 watt untuk menampilkan data');
    this.powerService.supplyPower(20, 'disk');
    return 'data yang diambil dari disk';
  }
}
