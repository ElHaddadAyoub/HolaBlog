import {useState , useEffect} from 'react';

const useFetch = (url) => {


  const [data, setData] = useState(null) 
  const [isLoading, setisLoading] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null)

  useEffect(() => {
    const abortConst = new AbortController();
    fetch(url , { signal:abortConst.signal })
      .then(res => {
        if(!res.ok){
          throw Error("We can not Fetch The Data From The Server !")
        }
        return res.json();
      })
      .then(data => {
        setData(data)
        setisLoading(false)
      })
      .catch(error => {
        if(error.name === "AbortError") {
          console.log('error of abort')
        }else {
          seterrorMessage(error.message)
          setisLoading(false)
        }
        
      })

      return () => abortConst.abort();

}, [url]);

  return {data , isLoading , errorMessage }
}


export default useFetch;