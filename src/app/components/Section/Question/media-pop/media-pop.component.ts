import { MediaService } from 'src/app/services/Media/media.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Media, MediaType } from 'src/app/Models/Media';
import { createAction, props } from '@ngrx/store';
// import { Cloudinary } from '@cloudinary/url-gen'

@Component({
  selector: 'app-media-pop',
  templateUrl: './media-pop.component.html',
  styleUrls: ['./media-pop.component.css']
})
export class MediaPopComponent {
  @Output() closeMediaPopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataEventMedia = new EventEmitter<any>();
  @Output() openMediaPopu = new EventEmitter<any>();
  @Input() mediaData: Media[] = [];

  item: any;
  image: string | undefined;
  mediaType: typeof MediaType = MediaType;

  constructor(private mediaService: MediaService) { }

  checkisClosed() {
    this.closeMediaPopup.emit(false);
  }

  formData: Media = {
    src: "https://cdns-images.dzcdn.net/images/cover/9e590d3f568b39f30af61b09f62a2709/264x264.jpg",
    type: MediaType.JPG,
    question: { id: 5 },
  };


  onSubmit() {
    this.formData.src = this.image;
    this.createMedia(this.formData);
    
  }

  createMedia(media: any): void {
    this.mediaService.save(media).subscribe((data: any) => {
      this.dataEventMedia.emit(data.media);
    });
  }
}
