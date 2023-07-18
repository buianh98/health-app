export type MyRecordData = {
  title: string;
  description: string;
  time: string;
};

export enum FoodType {
  MORNING = "morning",
  LUNCH = "lunch",
  DINNER = "dinner",
  SNACK = "snack",
}

export type FoodData = {
  title: string;
  image: string;
  type: FoodType.DINNER | FoodType.LUNCH | FoodType.MORNING | FoodType.SNACK;
};

export type UserRecord = {
  title: string;
  description: string;
  time: Date;
};

export type UserColumn = {
  title: string;
  time: Date;
  tags: string[];
};

export type Pagination = {
  currentPage: number;
  perPage: number;
  totalPage: number;
};

export type PayloadType = {
  currentPage: number;
  perPage: number;
  type?: string;
};

export type UserRecordDetail = {
  title: string;
  kcal: number;
  time: Date;
};
