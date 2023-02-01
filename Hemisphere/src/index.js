import React from 'react';
import ReactDOM  from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';
class App extends React.Component{
  constructor(props){ 
      super(props) 
      this.state ={latitude : null,errorMessage:''}  
     
     window.navigator.geolocation.getCurrentPosition(
          (position) => 
   {  
       this.setState({latitude: position.coords.latitude}) 
   this.setState({longitude: position.coords.longitude})
        },  
     
    (error) =>{this.setState({errorMessage: error.message}) 
     } ) ;  
   }
//   componentDidMount(){
//     window.navigator.geolocation.getCurrentPosition( 
//       (position) => {
//       this.setState({latitude: position.coords.latitude})
//       },
//    (error) =>{
// this.setState({errorMessage: error.message})
//    } ) ; 
//   }
      render() 
     { 
      if (this.state.errorMessage && !this.state.latitude){
        return<div>{this.state.errorMessage}</div>
      }
      if(!this.state.errorMessage && this.state.latitude)
      {           
         return <div> <HemisphereDisplay latitude = {this.state.latitude} longitude={this.state.longitude}/>
        
         </div> 
     }        
      
        
      

     
   }  
    }
  ReactDOM.render(
     <App />,  
      document.querySelector("#root"))

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   componentDidUpdate() {
//     document.getElementById("mydiv").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <div id="mydiv"></div>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
//   delHeader = () => {
//     this.setState({show: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Container />);

              
