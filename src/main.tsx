import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokemonProvider } from './context/PokemonContext.tsx'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonProvider>
  </StrictMode>,
)
