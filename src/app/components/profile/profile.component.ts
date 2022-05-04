import { Component, OnInit } from '@angular/core';
import { PublicKey } from 'src/app/models/publicKey';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nodeNumer = '3001'; //temp variable for testing, remove this when done;

  publicKey : any;
  balance;
  httpPort;
  p2pPort;
  constructor(private apiService : ApiService) {
   
   }

  ngOnInit(): void {
    this.apiService.getPublicKey(this.nodeNumer).subscribe(pubKey  => {
      this.publicKey = pubKey.publicKey;
    });
    this.apiService.getBalance(this.nodeNumer).subscribe(bal => {
      this.balance =bal;
    });

    this.apiService.getHttpPort(this.nodeNumer).subscribe(httpPort => {
      this.httpPort=httpPort;
    });

    this.apiService.getP2pPort(this.nodeNumer).subscribe(p2pPort => {
      this.p2pPort = p2pPort;
    });
  }

}
