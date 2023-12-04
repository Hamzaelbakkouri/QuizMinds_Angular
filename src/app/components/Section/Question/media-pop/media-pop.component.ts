import { MediaService } from 'src/app/services/Media/media.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Media, MediaType } from 'src/app/Models/Media';
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
  item: any;
  image: string | undefined;
  mediaType: typeof MediaType = MediaType;

  constructor(private mediaService: MediaService) { }

  checkisClosed() {
    this.closeMediaPopup.emit(false);
  }

  formData: Media = {
    src: '',
    type: null,
    question: { id: null },
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
