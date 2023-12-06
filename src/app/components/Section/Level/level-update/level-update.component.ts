import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Level } from 'src/app/Models/Level';
import { LevelService } from 'src/app/services/Level/level.service';

@Component({
  selector: 'app-level-update',
  templateUrl: './level-update.component.html',
  styleUrls: ['./level-update.component.css']
})
export class LevelUpdateComponent implements OnInit {
  @Output() closeUpdatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() LevelData: Level = {};
  @Output() dataEvent = new EventEmitter<any>();

  constructor(private LevelSercive: LevelService) { }

  ngOnInit(): void {
    this.formData.id = this.LevelData.id;
    this.formData.description = this.LevelData.description;
    this.formData.maxPoints = this.LevelData.maxPoints;
    this.formData.minPoints = this.LevelData.minPoints;
    this.formData.questions = this.LevelData.questions;
  }

  checkisClosed() {
    this.closeUpdatePopup.emit(false);
  }

  formData: Level = {
    id: null,
    description: "",
    maxPoints: null,
    minPoints: null,
    questions: []
  };


  onSubmit() {
    this.LevelSercive.update(this.formData).subscribe();
  }
}
