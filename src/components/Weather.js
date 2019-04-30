import React from 'react';

class Weather extends React.Component {
  render(){
    return(
      <div>
				<div className="d-flex justify-content-right links">
          {
            this.props.city && this.props.country && <p className="weather__key"> Location:
            <span className="weather__value"> { this.props.city }, { this.props.country }</span>
            </p>
          }
      </div>

        <div className="d-flex justify-content-right">
          {
            this.props.temperature && <p className="weather__key"> Temperature:
            <span className="weather__value"> { this.props.temperature }	</span>
         </p>
          }
				</div>

        <div className="d-flex justify-content-right">
          {
          this.props.humidity && <p className="weather__key"> Humidity:
           <span className="weather__value"> { this.props.humidity } </span>
          </p>
          }
				</div>

        <div className="d-flex justify-content-right">
          {
            this.props.description && <p className="weather__key"> Conditions:
             <span className="weather__value"> { this.props.description } </span>
            </p>
            }
				</div>
			</div>
    );

  }

}

export default Weather;
