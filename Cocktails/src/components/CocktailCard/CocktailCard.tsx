import { Cocktail } from "../../services/CocktailAPI"
import './CocktailCard.css'

export function CocktailCard(props: any){

    return (<div>
        {props.Cocktaillist.map((cocktail: Cocktail) =>{
            return (
            <>
            <div className='card'>
                <h2>{cocktail.drinkName}</h2>
                <img 
                    src={cocktail.thumbNail}
                    alt={cocktail.drinkName + 'ThumbNail'}
                    width='200'
                    ></img>
                <p>Category: {cocktail.category}</p>
                <p>Alcholic: {cocktail.alcoholic}</p>
                <p>Glass Type: {cocktail.glassType}</p>
                <p>How To: {cocktail.instructions}</p>
            </div>
            </>
            )
        })}
    </div>
    )

}