import React from 'react';
import { SearchBar } from '../searchBar/SearchBar';
import { CocktailCard } from '../CocktailCard/CocktailCard';

export class HomePage extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            input: ''
        }

        this.updateInput = this.updateInput.bind(this);
    }

    testarray: string[] = ['test', 'test2', 'test3'];
    filteredList: string[] = [];
    updateInput(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        this.filteredList = this.testarray.filter(cocktail =>  {
           return cocktail.includes(e.target.value) ? cocktail: null;
        });
        console.log(this.testarray);
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