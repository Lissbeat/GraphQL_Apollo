import * as React from "react";
  export interface GetAllCinemas_cinemas {
    id: string;
    cinema_name: string;
    description: string;
    location:string; 
    open: string;
    close: string;
  }
  
  export interface GetAllCinemas {
    cinemas: GetAllCinemas_cinemas[] | null;
  }