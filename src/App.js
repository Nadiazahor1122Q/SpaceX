
import './App.css';
import { Component, Fragment } from "react";
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import Filter from './components/Filter/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rockets: [],
      selectHeight:0
    }
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then(rockets => this.setState({ rockets: rockets }))
  }
  handleChange =(e) =>{
   this.setState({selectHeight: e.target.value})
  }
  render() {
   const {rockets,selectHeight} =this.state;
   const filterRockets=rockets.filter((rocket)=>
   rocket.height.feet > selectHeight
   );

    return (
      <div className="container">
        <h1>SpaceX Rockets Enyclopedia</h1>
        <Filter onChange={this.handleChange}/>
        <div className="row">
          {filterRockets.map((rocket) => (
            <Fragment>
              <Card  rocket={rocket} />
              <Modal rocket={rocket}/>
             
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
