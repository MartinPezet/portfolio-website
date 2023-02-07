import React from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {

    const [ string, setString ] = React.useState('');

    const [ searchParam ] = useSearchParams();

    React.useEffect(() => {
        console.log("Hello");
        console.log(searchParam.get('code'));
        
        setString(searchParam.get('code'));

        const uri = 'http://localhost:3001/oauth/google/callback?code=' + searchParam.get('code');
        console.log(uri);

        axios.get(uri).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }, [searchParam, string]);

  return (
    <div>
        <h1>Code</h1>
        <p>{string}</p>
    </div>
  )
}

export default Callback