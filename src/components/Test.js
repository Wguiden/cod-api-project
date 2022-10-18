import React from 'react'
import axios from 'axios'

export const Test = () => {


    // Make a request for a user with a given ID
    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });


    return (
        <div>
            
        </div>
    )
}
