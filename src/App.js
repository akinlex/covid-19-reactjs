import React from 'react';
// import Cards from './components/Cards/cards'
// import Charts from './components/Chart/chart'
// import CountryPicker from './components/CountryPicker/country_picker'
import Header from './components/Header/header'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component{

  state = {
    data: {},
  }

  // After all the elements of the page is rendered correctly, 
  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })

  }

  render(){
    const { data } = this.state

    return(
      <>
      <Header/>
      <div className={styles.container}>
        <Cards data={ data }/>
        <CountryPicker/>
        <Chart/>
      </div>
      </>
    )
  }
}

export default App;
