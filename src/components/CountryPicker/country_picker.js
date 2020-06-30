import React, {useState, useEffect } from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';

import styles from './country_picker.module.css';

import {fetchCountries} from '../../api';
import LinearProgress from '@material-ui/core/LinearProgress';


export const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI()
    }, [setFetchedCountries])

    // console.log(fetchedCountries)
    if(!fetchedCountries){        
        return (
            <>
                <LinearProgress width='100%'/>
            </>
        )
    }
    return(
        <FormControl className={styles.formControl}>
            <span>Select Country:</span>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                 <option value=''>Global</option>
                {fetchedCountries.map((country,i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker