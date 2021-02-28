import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content: string = '';

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.content = this.backendService.getHome();
  }
}
