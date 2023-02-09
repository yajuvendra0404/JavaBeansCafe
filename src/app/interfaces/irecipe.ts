import { Iingredients } from "./iingredients";

export interface Irecipe {
   name: string;
   description: string;
   imagePath: string;
   ingredients: Iingredients[]
}

