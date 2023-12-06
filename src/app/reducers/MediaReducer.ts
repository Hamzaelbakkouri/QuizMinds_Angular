import { Addaction, removeAction } from "../Actions/mediaAction";
import { Media } from "../Models/Media";
import { createReducer, on } from "@ngrx/store";

export interface MediaState {
    media: Media[];
}

export const initialState: MediaState = {
    media: [],
};


export const mediaReducer = createReducer(
    initialState,
    on(Addaction, (state, { media }) => ({ ...state, media: [...state.media, media] })),
    on(removeAction, (state, { id }) => ({ ...state, id: state.media.filter((media) => media.id !== id)}))
)