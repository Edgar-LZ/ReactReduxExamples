import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
class App extends React.Component{
   // We can define the state inside a constructor
   // or without a constructor
   state = { lat: null, errorMessage: '' };
   // It is recommended to do data loading inside
   // componentDidMount() instead of the constructor
   componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat:position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
    );
    }
    // Helper function
    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return (
            <Loader message='Please accept location request' />
        );
    }

    // React says we have to define render!!
   render() {
        // Conditional rendering
       return(
           <div className="border red">
               {this.renderContent()}
           </div>
       );
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);