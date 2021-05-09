
export function CocktailCard(props: any){
    return (<div>
        {props.Cocktaillist.map((cocktail: string) =>{
            return (
            <h2>{cocktail}</h2>
            )
        })}
    </div>
    )

}