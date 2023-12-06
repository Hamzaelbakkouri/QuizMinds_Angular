import { createAction, props } from '@ngrx/store';
import { Media } from '../Models/Media';

export const Addaction = createAction('[Media] Event', props<{ media: Media }>());

export const removeAction = createAction('[heh] Remove', props<{ id: number }>());