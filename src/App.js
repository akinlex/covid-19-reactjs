import React from 'react';
// import Cards from './components/Cards/cards'
// import Charts from './components/Chart/chart'
// import CountryPicker from './components/CountryPicker/country_picker'
import Footer from './components/Footer/footer'
import { Cards, CovidChart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'
import image from './images/virus.png';

class App extends React.Component{

  state = {
    data: {},
    country: ''
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);

    // console.log(fetchedData)

    this.setState({data: fetchedData, country: country})
  }
  // After all the elements of the page is rendered correctly, 
  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })

  }

  render(){
    const { data, country } = this.state

    return(
      <>
      <div className={styles.container}>
        <img className={styles.img} src={image} alt="COVID-19" /><span className={styles.span}>COVID-19</span>
        <Cards data={ data }/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <CovidChart data={data} country={country}/>
        <Footer/>
      </div>
      </>
    )
  }
}

export default App;
