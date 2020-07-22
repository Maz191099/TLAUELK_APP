export interface Establishments {
  establishments: Establishment[];
}

export interface Establishment {
  id?: number;
  name?: string;
  image?: string;
  direction?: string;
  description?: string;
  schedule?: string;
}


export interface Usuario {
    id?: string;
    email?: string;
    username?: string;
  }
