import React from 'react';


const Label = React.forwardRef((props, ref) => (


    
        <div style={{
            padding: '10px 15px',
            boxSizing: 'border-box'

        }}>
            <input 
                type='text'
                style={{
                    padding: '2px 10px',
                    borderRadius: 4,
                    fontSize: 30,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
                onChange={props.onChange}
                ref={ref}
                placeholder = '#FFFFFF'
                >

            </input>
        </div>
    )
)

export default Label