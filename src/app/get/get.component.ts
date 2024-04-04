import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent {
  constructor(private service: ApiService) {
    this.service.getUSers().subscribe(users => {
      console.log(users);

    })
  }
}
