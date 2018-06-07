import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import { MyserviceService } from '../myservice.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Angular 4 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  jsonData;
  jsonSearchData;
  constructor(private myserviceService: MyserviceService) {
    this.getJsonResponce();
  }

  ngOnInit() {

    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
    });
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
    alert("Entered Email id : " + data.emailid);
  }

  serachFunction(event) {
    if (event.currentTarget.value != '') {
      this.jsonData = _.filter(this.jsonSearchData, function (num) {
        
        let matched = false;
        Object.keys(num).forEach(key => {
          if (num[key].constructor == String) {
            if (num[key].match(event.currentTarget.value)) {
              matched = true;
            }
          }
        })
        return matched;
      });
    }
    else {
      this.jsonData = this.jsonSearchData;
    }
  }

  getJsonResponce() {
    this.myserviceService.getJsonResponce().subscribe(data => {
      if (data != null) {
        this.jsonData = data;
        this.jsonSearchData = data;
      } else {
        alert('Error');
      }
    })
  }

}
