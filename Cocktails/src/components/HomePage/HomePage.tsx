import React from 'react';
import { SearchBar } from '../searchBar/SearchBar';

export class HomePage extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            input: ''
        }

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
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
            </>
        );
    }
}