import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  } 

  postData(body: any): string {
    // Here you can process the incoming data as needed
    console.log('Received data:', body);
    return 'Data received successfully!';
  }
}
