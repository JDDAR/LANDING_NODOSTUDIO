import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders correctly', () => {
    render(<App />);
    
    // Buscar el contenedor principal por clase en lugar de role
    const appContainer = document.querySelector('.container-app');
    expect(appContainer).toBeInTheDocument();
    
    // Verificar que el Header se renderiza
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Asumiendo que Header usa <header>
    
    // Verificar que se renderiza contenido específico
    expect(screen.getByText('BIENVENIDOS A NODOSTUDIO')).toBeInTheDocument();
  });
  
  it('renders without crashing when matchMedia is called', () => {
    // Este test específicamente verifica que matchMedia no cause errores
    expect(() => render(<App />)).not.toThrow();
  });
});
