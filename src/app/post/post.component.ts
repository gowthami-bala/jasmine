import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  myForm: FormGroup | undefined;

  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      userId: new FormControl(''),
      title: new FormControl(''),
      body: new FormControl(''),
    });
  }
  constructor(private service: ApiService, private router: Router) {


  }

  onSubmit(form: any) {
    console.log('form', form);
    this.service.postUsers(form).subscribe(result => {
      console.log(result);
    if(result){
      this.router.navigate(['/get'])
    }
    })
  }

}
