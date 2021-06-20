import axios from 'axios';

export interface Cocktail {
    drinkName: string;
    glassType: string;
    category:string;
    alcoholic: boolean;
    instructions: string;
    ingredients: string[];
    measurements: string [];
    thumbNail: string;
}

export class CocktailAPI{

    public getCocktailbyName(name: string): Promise<Cocktail[]>{
        const baseurl = 'https://www.thecocktaildb.com/api/json/v1/1';
        const url = 'search.php?s=' + name
         return axios({baseURL: baseurl, method: 'get', url: url}).then(response => {
            return this.mapData(response.data);
        })

    }

    mapData(data: any): Cocktail[]{
        console.log(data);
        if ( data.drinks){
        return data.drinks.map((cocktail: any) => {
            const mappedCocktail: Cocktail = {
                drinkName: cocktail.strDrink,
                glassType: cocktail.strGlass,
                category:cocktail.strCategory,
                alcoholic: cocktail.strAlcoholic,
                instructions: cocktail.strInstructions,
                ingredients: this.mapIngredients(cocktail).filter(ingredient => ingredient != null),
                measurements: this.mapMeasurements(cocktail).filter(measurement => measurement != null),
                thumbNail: cocktail.strDrinkThumb,
            }
            return mappedCocktail;
        })
        } else {
            return [];
        }
    }

    mapIngredients(drink: any): string[]{
        return [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5,
            drink.strIngredient6, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10,
            drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15]
    }

    mapMeasurements(drink: any): string[]{
        return [drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5,
            drink.strMeasure6, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10,
            drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14, drink.strMeasure16,];
    }
}

