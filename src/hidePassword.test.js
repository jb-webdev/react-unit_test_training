// 1 : Rendre le composant avec un mdp <HidePassword>{mdp}</HidePassword>
// 2 : Test que la valeur de {mdp} ne se retrouve pas à l'écran
// 3 : Simulation de click sur le libelle afficher {mdp}
// 4 : Test que la valeur de {mdp} se retrouve à l'écran
//  ====> '@testing-library/react' 

import {render, screen, fireEvent} from '@testing-library/react';

import HidePassword from './HidePassword';

test('test du rendu de affichage du mdp', () => {
    const mdp = "azerty123"
    render(<HidePassword>{mdp}</HidePassword>);
    expect(screen.queryByText(mdp)).toBeNull();
    fireEvent.click(screen.getByLabelText('afficher mdp'))
    expect(screen.getByText(mdp)).toBeInTheDocument();
})
