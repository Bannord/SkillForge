
import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header.jsx/Header';

function App() {

  const [commits, setCommits] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json()
      setCommits(data)
    }
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <Header/>
      <div>
        <input type='text' placeholder='find user'/>
      </div>
      <div className='content_wrapper'>
        
        {commits.map((el) => (
          <div className='block_user' key={el.id}>
            <div className='img_wrapper'>
              <img src={el.avatar_url} alt='img_user' className='img_user' />
            </div>
            <div className='name_user'>
              {el.login}
            </div>
          </div>
        ))}
      </div>
    </div>
  );


}

export default App;
