//  ===== LES BESOINS =====

// props children qui contient mdp
// state showPassword setShowpassword
// label html
// input type checkbox
// onchange setShowpassword
// ternaire pour l'affichege du password



import React from 'react';

const HidePassword = ({children}) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return(
        <div>
            <label htmlFor="toggleMdp">afficher mdp</label>
            <input
                id="toggleMdp"
                type="checkbox"
                checked={showPassword}
                onChange={e => setShowPassword(e.target.checked)}
            />
            {showPassword ? children : null}
        </div>
    )
}

export default HidePassword;