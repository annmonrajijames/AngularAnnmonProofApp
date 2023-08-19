// bluetooth1.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BleClient } from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-bluetooth1',
  templateUrl: './bluetooth1.component.html',
  styleUrls: ['./bluetooth1.component.scss']
})
export class Bluetooth1Component {

  constructor(private router: Router) { }

  async handleBluetooth() {
    try {
      await BleClient.initialize();

      const targetDevice = await BleClient.requestDevice();
      console.log(JSON.stringify(targetDevice)); 

      if (targetDevice && targetDevice.name === 'Ganesh A53') {
        await BleClient.connect(targetDevice.deviceId);
        alert('Connected to ' + targetDevice.deviceId);
      } else {
        alert('No device selected or matching the filter');
      }

    } catch (error) {
      console.error('Bluetooth Error:', error);
      alert('Bluetooth Error: ' + error);
    }
    this.router.navigate(['/stream']);
  }

}
