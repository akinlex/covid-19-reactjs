import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try{
        const { data : {confirmed, recovered, deaths, lastUpdate }} =  await axios.get(url)

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
}

export const fetchLiveData = async () => {

    try{
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
    } catch(err){
        console.log(err)
    }
}