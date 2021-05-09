import React from 'react';
import { SearchBar } from '../searchBar/SearchBar';
import { CocktailCard } from '../CocktailCard/CocktailCard';
import { CocktailAPI } from '../../services/CocktailAPI';
import { Cocktail } from '../../services/CocktailAPI';

export class HomePage extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            input: ''
        }

        this.updateInput = this.updateInput.bind(this);
    }
    cocktailAPI = new CocktailAPI;
    filteredList: Cocktail[] = [];
    updateInput(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        this.filteredList = this.cocktailAPI.getCocktailbyName(e.target.value).filter((cocktail: Cocktail)  =>  {
           return cocktail.drinkName.toLowerCase().includes(e.target.value.toLowerCase()) ? cocktail: null;
        });
        console.log(this.filteredList);
        this.setState({input: e.target.value});
    }
 
    BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};


    render(){
        return(
            <>
                <h1> CockTails </h1>
                <SearchBar
                onChange={this.updateInput}
                />
                <CocktailCard
                Cocktaillist={this.filteredList}/>
            </>
        );
    }
}