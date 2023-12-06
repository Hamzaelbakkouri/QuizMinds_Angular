import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Level } from 'src/app/Models/Level';
import { LevelService } from 'src/app/services/Level/level.service';

@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.css']
})
export class LevelCreateComponent {
  @Output() closeCreatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() sLevelData: Level[] = [];
  @Output() dataLevelEvent: EventEmitter<any> = new EventEmitter<any>();
  require: string = ''

  constructor(private levelService: LevelService, private snackBar: MatSnackBar) { }

  checkisClosed() {
    this.closeCreatePopup.emit(false);
  }

  formData: Level = {
    description: '',
    maxPoints: null,
    minPoints: null
  };


  onSubmit() {
    if (this.formData.description == '' || this.formData.maxPoints == null || this.formData.minPoints == null) {
      this.require = "this field is required"
    } else {
      this.createLevel(this.formData);
    }
    this.closeCreatePopup.emit(false);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }

  createLevel(Level: Level): void {
    this.levelService.save(Level).subscribe((data: any) => {
      if (data.level) {
        this.openSnackBar("Level created successfully", "close");
      }
    });
  }
}
