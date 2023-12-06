import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Level } from 'src/app/Models/Level';
import { LevelService } from 'src/app/services/Level/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent {
  Levels: Level[] = [];
  isCreatePopupOpen: boolean = false;
  isPopupOpen: boolean = false;
  idToDelete: number = 0;
  idx: number = 0;
  deleteMessage: string = '';
  isUpdatePopupOpen: boolean = false;
  idxUpdate: number = 0;

  LeveToEdit: Level = {};

  // update Subject popup
  openUpdatePopup(level: Level, index: number) {
    this.isUpdatePopupOpen = true;
    this.idxUpdate = index;
    this.LeveToEdit = level;
  }

  closeUpdatePopup() {
    this.isUpdatePopupOpen = false;
  }

  // create Subject popup
  closeCreatePopup() {
    this.isCreatePopupOpen = false;
  }

  openCreatePopup() {
    this.isCreatePopupOpen = true;
  }

  // delete Subject popup
  openPopup(id: number, index: number) {
    this.isPopupOpen = true;
    this.idToDelete = id;
    this.idx = index;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  // delete Subject confirm
  confirmDelete() {
    this.deleteAnswer(this.idToDelete, this.idx);
    this.isPopupOpen = false;
  }

  deleteAnswer(id: number, idx: number) {
    this.levelService.delete(id).subscribe((data: any) => {
      this.deleteMessage = data;
    });
    this.Levels.splice(idx, 1);
    this.openSnackBar("Level deleted successfully", "close");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }

  constructor(private levelService: LevelService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.levelService.findAll().subscribe((data: any) => {
      this.Levels = data.content;
    });
    this.levelService.sendLevelData.subscribe((data: any) => {
      this.Levels.push(data);
    });
    this.levelService.sendUpdateLevelData.subscribe((data: any) => {
      this.Levels[this.idxUpdate] = data;
      this.openSnackBar("Level updated successfully", "close");
      this.closeUpdatePopup();
    });
  }
}
