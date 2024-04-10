import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import './PageNotFound.css';

const PageNotFound: React.FC = () => {

    useEffect(() => {
        document.title = 'Oops, 404 | Martin Pezet';
      }, []);

  return (
    <section className='gradientBG fillPage'>
        <Navbar />
        <div className='container'>
            <h1>Oops, it looks like this page does not exist!</h1>
            <p>Please browse my homepage to find pages that might actually exist!</p>
            <Link className="scaleOnHover" to="/">Home</Link>
        </div>
    </section>
  )
}

export default PageNotFound