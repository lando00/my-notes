import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export type typeNote = {
  id?: number;
  title: string;
  subTitle: string;
  description: string;
};

const noteState: typeNote[] = [
  {
    id: 0,
    title: "Sport",
    subTitle: "Jouer du foot",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates aut natus dolorum debitis recusandae consequuntur inventore, nobis impedit quas quibusdam animi quod tenetur ducimus distinctio asperiores necessitatibus doloremque nemo. ",
  },
];

export const NoteSlice = createSlice({
  name: "notes",
  initialState: noteState,
  reducers: {
    addNote: (state, action: PayloadAction<typeNote>) => {
      state.push({
        id: state.length,
        title: action.payload.title,
        subTitle: action.payload.subTitle,
        description: action.payload.description,
      });
    },

    deleteNote: (state, action: PayloadAction<{ id?: string }>) => {
      const newListNote = state.filter(
        (note) => note.id !== Number(action.payload.id)
      );
      state = newListNote;
      return state;
    },

    updateNote: (state, action: PayloadAction<typeNote>) => {
      const index = state.findIndex(
        (note) => note.id === Number(action.payload.id)
      );
      state[index] = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateNote } = NoteSlice.actions;
