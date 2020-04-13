import { Ingridents } from "../../shared/ingridents.model";

export class ShoppingService {
  private ingredients: Ingridents[] = [
    new Ingridents("Potato", 10),
    new Ingridents("Tomato", 5),
    new Ingridents("Cheese Cubes", 4)
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(item: string, qty: number) {
      this.ingredients.push(new Ingridents(item,qty))
  }

  addMultipleIngredients(ingredients:Ingridents[])
  {
    this.ingredients.push(...ingredients);
  }
}