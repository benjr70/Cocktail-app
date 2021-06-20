import { Observable } from "rxjs/internal/Observable";
import { of } from 'rxjs';

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

    public getCocktailbyName(name: string): Observable<Cocktail[]>{
        const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name;
        const mockData: Cocktail[] = [{
            drinkName: 'Margarita',
            glassType: 'Cocktail glassssss',
            category: 'Ordinary Drink', 
            alcoholic: true,
            instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
            ingrediants: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
            measurements: ['1 1/2 oz ', '1/2 oz', '1 oz'],
            thumbNail: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        },
        {
            drinkName: 'Margarita blue',
            glassType: 'Cocktail glass',
            category: 'Ordinary Drink', 
            alcoholic: true,
            instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
            ingrediants: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
            measurements: ['1 1/2 oz ', '1/2 oz', '1 oz'],
            thumbNail: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        }]

        
        return of(mockData);
    }

}

