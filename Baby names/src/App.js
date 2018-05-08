import React, { Component } from 'react';
//import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import NameList from './components/NameList';
import Credit from './components/credit';
import Search from './components/Search';
import ShortList from './components/ShortList';


class App extends Component {
constructor(props){
    super(props);
    this.state={
        filterText:"Anna ",
        favorites: []
    }
}

filterPromena(value){
    this.setState({
        filterText: value
    })

}

addFavorite(id){
    const favList = this.state.favorites.concat([id])
    this.setState({
        favorites: favList
    })
}

    render() {

        console.log("filtert text from app "+ this.state.filterText)

        return (
            <div >
                <Search filterText={this.state.filterText}
                filterPromena={this.filterPromena.bind(this)}
                />
                <main>
                    <ShortList 
                    favorites={this.state.favorites}
                    data={this.props.data}
                    />
                    < NameList data={this.props.data} 
                       filterText={this.state.filterText}
                       addFavorite={this.addFavorite.bind(this)}
                    />
                    <Credit />
                </main>
               
              
            </div>
        );
    }
}

export default App;




