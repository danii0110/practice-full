//import {useEffect, useState} from 'react';
//import axios from 'axios';
import HomePage from '../../pages/HomePage/HomePage';

function App() {
  //프록시 확인 코드
  // const [data, setData] = useState('')

  // useEffect(() => {
  //     axios.get('/api/data')
  //     .then(res => setData(res.data))
  //     .catch(err => console.log(err))
  // }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}
export default App;
