export default interface Food {
  id: string; // ask if these should be numbers
  title: string;
  image: string;
  servings: string;
  readyInMinutes: string; // ask if these should be numbers
  sourceName: string;
  sourceUrl: string;
  dairyFree: boolean;
  ketogenic: boolean;
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  nutFree: boolean;
  dishTypes: string[];
}
