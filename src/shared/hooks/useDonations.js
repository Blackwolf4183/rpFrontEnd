import { useState,useEffect } from "react";
import axios from "axios";

export function useDonations (){
    const [donations,setDonations] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/donations`)
          .then(response => {
            setDonations(response.data.donations);
            setLoading(false); 

          })
          .catch(err => {
            setError(err.message);
          });
      }, []);

      return [donations,loading,error];
    
}