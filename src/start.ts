import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

// Router ka sahi instance bana rahe hain kyunki router.tsx se getRouter export ho raha hai
const router = getRouter()

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    React.createElement(RouterProvider, { router: router })
  )
}
