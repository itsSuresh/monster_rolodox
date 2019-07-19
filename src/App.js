import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search/SearchBox';

class App extends Component {
  constructor(){
    super();

    this.state={
      monster:[ ],
      searchField:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({monster:users}));
  }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }
  render(){
      const {monster ,searchField} = this.state;
      const filteredMonsters = monster.filter(monster => {
          return monster.name.toLowerCase().includes(searchField.toLowerCase());
      });
    return(
       
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder={'search monsters'} handleChange={this.handleChange} 
          />
          <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
