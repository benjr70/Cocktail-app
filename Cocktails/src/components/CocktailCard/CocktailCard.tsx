import { Cocktail } from "../../services/CocktailAPI"


export function CocktailCard(props: any){
    return (<div>
        {props.Cocktaillist.map((cocktail: Cocktail) =>{
            return (
            <h2>{cocktail.drinkName}</h2>
            )
        })}
    </div>
    )

}