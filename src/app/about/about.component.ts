import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  content: string = '';
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.content = this.backendService.getAbout();
  }
}
