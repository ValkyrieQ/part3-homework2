import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactDetail = {};
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.contactDetail = this.backendService.getContactDetails();
  }
}
