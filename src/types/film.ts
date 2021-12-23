export interface ParamTypes {
  id: string;
}

export interface FilmTypes {
  filmId: number;
  posterUrlPreview: string;
  nameEn?: string;
  nameRu?: string;
  nameOriginal?: string;
  countries: [{ country: string }];
  year: number;
}

export interface DirectTypes {
  [index: number]: {
    nameEn?: string;
    nameRu?: string;
    posterUrl: string;
    personId: number;
  };
}

export interface FrameTypes {
  frames: [FrameItemTypes];
}

export interface FrameItemTypes {
  image: string;
  preview: string;
}
