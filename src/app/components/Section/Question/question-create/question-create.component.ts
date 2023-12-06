import { MatSnackBar } from '@angular/material/snack-bar';
import { Media } from './../../../../Models/Media';
import { LevelService } from './../../../../services/Level/level.service';
import { SubjectServiceService } from './../../../../services/subject.service/subject.service.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Level } from 'src/app/Models/Level';
import { Question, QuestionType } from 'src/app/Models/QuestionType';
import { SubjectType } from 'src/app/Models/SubjectType';
import { MediaService } from 'src/app/services/Media/media.service';
import { QuestionService } from 'src/app/services/Question/question.service';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  name: string;
}

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {
  @Output() closeCreatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataEvent = new EventEmitter<any>();
  Subjects: SubjectType[] | undefined = [];
  Levels: Level[] = [];
  Medias: Media[] = [];
  typeQuestion: typeof QuestionType = QuestionType;
  @Output() nextToMedia: EventEmitter<boolean> = new EventEmitter<boolean>();
  require: string = "";

  constructor(
    private questionService: QuestionService,
    private subjectService: SubjectServiceService,
    private LevelService: LevelService,
    private MediaService: MediaService,
    private snackBar: MatSnackBar
  ) { }



  ngOnInit(): void {
    this.subjectService.fetchAllSubjects().subscribe((data: any) => {
      this.Subjects = data.content;
    });
    this.LevelService.findAll().subscribe((data: any) => {
      this.Levels = data.content;
    });
    this.MediaService.findAll().subscribe((data: any) => {
      this.Medias = data.content;
    });
  }

  checkisClosed() {
    this.closeCreatePopup.emit(false);
  }

  formData: Question = {
    question: null,
    numberOfAnswers: null,
    numberOfCorrectAnswers: null,
    questionType: null,
    points: null,
    time: null,
    level: {
      id: null
    },
    subject: {
      id: null
    }
  };

  onSubmit() {
    if (this.formData.question == null || this.formData.question == null || this.formData.numberOfAnswers == null || this.formData.numberOfCorrectAnswers == null || this.formData.questionType == null || this.formData.points == null || this.formData.time == null || this.formData.level.id == null || this.formData.subject.id == null) {
      this.require = "This field is required";
      return;
    } else {
      this.createAnswer(this.formData);
      this.nextToMedia.emit(true);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  createAnswer(question: Question): void {
    this.questionService.save(question).subscribe((data: any) => {
      this.dataEvent.emit(data.question);
      if (data.question) {
        this.openSnackBar("Question created successfully", "Close");
      }
    });
  }
}
