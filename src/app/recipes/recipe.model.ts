import { Iingredients } from "@interfaces/iingredients";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Iingredients[]

  constructor(name: string, description: string, imagePath: string, ingredients: Iingredients[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients= ingredients;
  }
}
