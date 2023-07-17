import { useEffect, useState } from 'react';
import { makeRequest } from '../../Requst';

export const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    setLoading(true)
    try {
      const {data} = await makeRequest.get(url);
      setData(data.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false)

  };
  
  useEffect(() => {
    fetchData()
  },[ url])

  return {data, error, loading}

}