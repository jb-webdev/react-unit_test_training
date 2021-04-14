import { render, screen, fireEvent } from '@testing-library/react';
import SuperComponent from './superComponent';

test('renders learn react link', () => {
  render(<SuperComponent />)
  const linkElement = screen.getByText(/Mon super composant/i)
  expect(linkElement).toBeInTheDocument()
});

test('renders learn react link', () => {
    const messageATester = "Salut tout le monde !";
    
    render(<SuperComponent>{messageATester}</SuperComponent>)
    // on veut tester que le message ne s'affiche pas la première fois
    expect(screen.queryByText(messageATester)).toBeNull()
    // on simule un click et on verifie que le message s'affiche
    fireEvent.click(screen.getByText(/super/i))
    expect(screen.getByText(messageATester)).toBeInTheDocument()
  });