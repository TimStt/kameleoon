export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type Undefinedable<T> = {
  [P in keyof T]?: T[P];
};

export type Stringed<T> = {
  [P in keyof T]: string;
};
