export type Movement = {
  id: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  createdAt: string;
};

export type Movements = Array<Movement>;
