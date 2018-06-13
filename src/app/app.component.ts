import { Component } from '@angular/core';
import * as SocketIO from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private SOCKET_URL = 'http://localhost';
  private _socket: SocketIOClient.Socket;
  private _drivers: any[];

  constructor() {}

  ngOnInit() {
    /* this._socket = SocketIO(this.SOCKET_URL);
    this._socket.on('connect', () => console.log('connected to socket server'));
    this._socket.on('disconnect', () => console.log('disconnected from socket server'));
    this._socket.on('sessionData', this._receivedSessionData); */
  }

  _receivedSessionData(data) {
    console.log(data);
    this._drivers = data;
  }
}
