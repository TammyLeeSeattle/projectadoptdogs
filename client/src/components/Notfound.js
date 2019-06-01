import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { blockStatement } from '@babel/types';


function NotFound (){
    console.log('3rd')
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Oh no...</h2>
            <FontAwesomeIcon id='icon' icon="exclamation-circle" size='4x' />
            <div className='notFoundLink'><a href='/'>Go Back</a></div>
        </div>
    )
}
export default NotFound;

