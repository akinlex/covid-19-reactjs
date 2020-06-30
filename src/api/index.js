import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    var changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        const { data : {confirmed, recovered, deaths, lastUpdate }} =  await axios.get(changeableUrl)

        // const necessaryData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };

        // return necessaryData
        // console.log(res)
    } catch(err){
        console.log(err)
    }
};

export const fetchLiveData = async () => {

    try{
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);

        const modifiedData = data.map((todayData) =>({
            confirmed: todayData.confirmed.total,
            deaths: todayData.deaths.total,
            date: todayData.reportDate
        }))

        return modifiedData
    } catch(err){
        console.log(err)
    }
};

export const fetchCountries = async () =>{
    try{
        const {data: {countries} } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (err){ 
        console.log(err)

    }
}