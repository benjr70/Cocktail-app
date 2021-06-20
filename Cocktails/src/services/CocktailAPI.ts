import axios from 'axios';

export interface Cocktail {
    drinkName: string;
    glassType: string;
    category:string;
    alcoholic: boolean;
    instructions: string;
    ingrediants: string[];
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
                ingrediants: cocktail.strIngredient1,
                measurements: cocktail.strMeasure1,
                thumbNail: cocktail.strDrinkThumb,
            }
            return mappedCocktail;
        })
        } else {
            return [];
        }
    }
}

