import React, { Component } from 'react';
import { moviesData } from '../moviesData';
import '../App.css';
import MovieItem from "./MovieItem";

class App extends Component {
  constructor(){
    super()
      this.state = {
        movies: moviesData
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-9">
                <div className="row">
                 {this.state.movies.map(item=>
                     <div className="col-6 mb-4" key={item.id}>
                         <MovieItem item={item}/>
                     </div>
                     )}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
