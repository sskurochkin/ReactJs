import React, { useContext, useEffect } from 'react';
import {Form} from '../components/Form';
import {Notes} from '../components/Notes';
import { FirebaseContext } from '../context/firebase/fireBaseContext';


function Home(props) {

    const {loading, notes, fetchNotes} = useContext(FirebaseContext)

    useEffect(()=>{
        fetchNotes()
    // eslint-disable-next-line    
    }, [])

    return ( <>
        <Form/>
        <hr/>
        <Notes notes={notes}/>
    </> );
}

export default Home;