import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { mediaReducer } from '../reducers/MediaReducer';


@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({ medias: mediaReducer })
    ]
})
export class AppStoreModule { }
