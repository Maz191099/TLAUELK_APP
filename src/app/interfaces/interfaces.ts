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

export interface Producto {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  precio?: string;
  id_establishment?: number;
}

export interface Commentary {
  id?: number;
  name?: string;
  content?: string;
  score?: number;
  id_establecimiento?: number;
}

export interface Slide {
  id?: number;
  image?: string;
}