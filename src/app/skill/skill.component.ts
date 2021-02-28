import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills: string[] = [];
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.skills = this.backendService.getSkills();
  }
}
