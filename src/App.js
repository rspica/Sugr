import React, { Component } from 'react';

import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {teal900, 
        cyan700, cyan500, 
        white, darkBlack, fullBlack,
        pinkA200, 
        grey100, grey300, grey400, grey500,} from 'material-ui/styles/colors';

import API          from './API';
import CurrentModal from './components/Children/CurrentModal';
import dashboard    from './dashboard';
import Header       from './components/Children/Header';
import LpSearch     from './components/Children/LpSearch';
import SearchDspl   from './components/Children/SearchDspl';



// Material-ui custom themes =========================================================
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif',
  TextField:
  {"width":"100%",},
});

//================================================================================




//================================================================================
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        fullname:'',
        email:'',
        password:'',
        profilePict:'',
      },
      Search: {
        item: '',
        results: [],
        showResults: false,
      },
      CurrentModal: null,
      hasBtn: 'none',
    };
      
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchFood = this.searchFood.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onShowResult = this.onShowResult.bind(this);
  }

    onSubmit = () => {
      // console.log("submitting")
    }
  
// modal activation sign-in / signup / no display =============================
  handleClick = (clickVal) => {
    // console.log(this)
    this.setState({
      CurrentModal: clickVal
    })
  }

  closeModal = () => {
    this.handleClick("null");
  }


// input value state change for all input fields ==============================
  inputChange = (value, key ) => {
    this.setState({
      [key]: value
    })
  console.log('value: ',value, 'key: ' ,key)
  };

// // fernando's bad login logic

// login() {
//   auth.signInWithPopup(provider) 
//     .then((result) => {
//       const user = result.user;
//       this.setState({
//         user
//       });
//       console.log("============================" + user)
//     });
// }

// login() {
//   auth.signInWithEmailAndPassword(this.props.email, this.props.password); 
//     .then((result) => {
//       // const user = result.user;
//       // this.setState({
//       //   user
//       // });
//     });
//     console.log("user")
// }



// landing page api call for searchbar on landing page and dashboard =========
searchFood = () => {
  // test query string  ==== https://api.nutritionix.com/v1_1/search/apple?results=0:20&fields=item_name,brand_name,nf_sugars&appId=5234f7f1&appKey=40a5d6ab8411eb1e9d9f23f601944842
  const currQuery = this.state.item + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=';

  API.search(currQuery)
    .then(res => {
      this.setState({ results: res.data.hits });
      this.onShowResult();
    })
    .catch(err => console.log(err));
};

// shows results from search on landing page and/or dashboard ================
onShowResult = () => {
  this.setState({
    showResults: true,
    top: 0,
  });
  console.log('showResults: ', this.state.showResults)
}


  // =====================================================================
    render() {
     
      console.log('in render showing overall state: ',this.state)
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header
            handleClick = { this.handleClick } 
            CurrentModal = { this.state.CurrentModal } />

          <CurrentModal 
            handleClick = { this.handleClick }
            closeModal = { this.closeModal }
            inputChange = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } 
            onSumbit = {this.onSubmit}
            handleClick  = { this.handleClick } />


          <CurrentModal 
            handleClick  = { this.handleClick }
            closeModal   = { this.closeModal }
            inputChange  = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } />

          <LpSearch 
            searchFood = { this.searchFood }
            inputChange = { this.inputChange } />

            <div className="resultsWrapper">
            { this.state.showResults ? ( <SearchDspl
                hasBtn = { this.state.hasBtn }
                top = { this.state.top }
                results = { this.state.results } /> ) : (null ) }
            </div>

        </div>
        </MuiThemeProvider>
      );
    }
  }

