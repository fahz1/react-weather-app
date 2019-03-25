import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const API_KEY = "41ae6590cc803c925d9d02205539a03a";

class App extends React.Component {
  getWeather = async (e) => {
    e.prevenDefault();
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
     const data = await api_call.json();
    console.log(data);
  }

  render(){
    return (
      <div>
        <h2>Check Weather Component</h2>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
