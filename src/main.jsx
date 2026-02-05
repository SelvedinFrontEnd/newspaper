import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NewsProvider } from './context/NewsProvider.jsx'
import { FootballProvider } from './context/FootballProvider.jsx'
import { NBAProvider } from './context/NBAProvider.jsx'
import { F1Provider } from './context/F1Provider.jsx'
import { ArticlesProvider } from './context/ArticlesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsProvider>
      <FootballProvider>
        <NBAProvider>
          <F1Provider>
            <ArticlesProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ArticlesProvider>
          </F1Provider>
        </NBAProvider>
      </FootballProvider>
    </NewsProvider>
  </StrictMode>,
)
