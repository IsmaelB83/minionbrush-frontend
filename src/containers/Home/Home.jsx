// NPM Modules
import React from 'react';
// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import NavBar from '../../components/NavBar';
import SideMenu from '../../components/SideMenu';
import ContentPanel from '../../components/ContentPanel';
// Containers
// Own modules
// Models
// Assets
// CSS
import './styles.css'


export default function Home(props) {
  
    return (
        <div className='Home'>
            <CssBaseline />
            <NavBar/>
            <SideMenu/>
            <ContentPanel/>
        </div>
    );
}