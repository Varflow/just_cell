export type PointsRequest = {
  file: File;
  fiscal_name: string;
  fiscal_pass: string;
};

export type AddPointsRequest = {
  points: number[];
};
