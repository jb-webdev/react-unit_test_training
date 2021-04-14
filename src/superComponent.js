// 1 : creer un composant simple qui affiche ou masque un texte
// 2 : hook state - showMessage
// 3 : create label
// 4 : creer une check box


import React from 'react';

function SuperComponent ({children}){
    const [showMessage, setShowMessage] = React.useState(false);
    return (
        <div>
            <label htmlFor="toogle">Mon super composant</label>
            <input 
                id="toogle" 
                type="checkbox" 
                checked={showMessage} 
                onChange={e => setShowMessage(e.target.value)}
            />
            {showMessage ? children : null}
        </div>
    )
}

export default SuperComponent;