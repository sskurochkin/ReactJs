import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';

export function Form() {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = (e) =>{
        e.preventDefault()


        if(value.trim()){
            alert.show('Заметка была создана', 'success')
            setValue('')
        } else{
            alert.show('Введите название заметки', 'warning')
        }
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    value={value}
                    type='text'
                    className='form-control'
                    placeholder='Введите название заметки'
                    onChange={e=>setValue(e.target.value)} />
            </div>
        </form>
     );
}

export default Form;