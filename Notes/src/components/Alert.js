import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';


export function Alert() {

    const {alert, hide} = useContext(AlertContext)

    if(!alert.visible){
        return null
    }

    return ( 
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Attention!</strong>
            {alert.text}
            <button 
            onClick={hide}
            className="close"
            type='button'
            aria-label='Close'
            >
                <span aria-hidden='true'>&times;</span>
            </button>
        </div>
     );
}

export default Alert;