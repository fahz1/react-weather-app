import React from 'react';

class Form extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <div className="input-group form-group">
            <input type="text" name="city" className="form-control" placeholder="Your City.." />
          </div>
        <div className="input-group form-group">
          <input type="text" name="country" className="form-control" placeholder="Your Country.." />
        </div>
        <div className="form-group">
          <button className="login_btn">Get Weather</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Form;
