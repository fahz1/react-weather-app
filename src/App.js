import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const API_KEY = "41ae6590cc803c925d9d02205539a03a";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the values."
          });
        }
      }


      render() {
        return (
          <div>
            <div className="wrapper">
              <h4><Titles /></h4>
                <div className="d-flex justify-content-center h-100">
                <div className="card">
                <div className="card-header">
                  <h4>Find out temperature, conditions and more...</h4>
                </div>

                <div className="card-body">
    						   <Form getWeather={this.getWeather} />
                   <Weather
                       temperature={this.state.temperature}
                       humidity={this.state.humidity}
                       city={this.state.city}
                       country={this.state.country}
                       description={this.state.description}
                       error={this.state.error}
                     />
    					</div>
    			</div>
    		</div>
    	</div>
    </div>

        );
      }
    };
export default App;
