// landing page api call for searchbar on landing page and dashboard =========
import axios from "axios";
const clickSearch = () => {
    const BASEURL = 'https://api.nutritionix.com/v1_1/search/';
    const APIKEY = '5234f7f1&appKey=c6da7cb3302759d1e20f3793daa4b711';
    const foodSearch = this.state.SearchItem
    const queryURL =  BASEURL + this.state.SearchItem + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=' + APIKEY;
  
    return axios.get(queryURL)
      .then(resp => {
        this.setState({
          foodType: resp.data.hits,
        })  
      console.log('food by name response: ',resp.data.hits); 
      this.mapAllFood(this.state.foodType);
      this.setState({ showResults: true });
      console.log("this is show state: ",this.state.showResults)
      this.onShowResult();
    }); 
  } 

  export default clickSearch;