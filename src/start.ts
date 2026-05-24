// --- MOBILE ERROR CAPTURE JUGAD (Sab se upar) ---
window.onerror = function (message, source, lineno, colno, error) {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.backgroundColor = 'black';
  div.style.color = 'lime';
  div.style.padding = '20px';
  div.style.zIndex = '999999';
  div.style.overflow = 'scroll';
  div.style.fontFamily = 'monospace';
  div.innerHTML = `<h3>🚨 Browser Error Caught:</h3>
  <p><b>Message:</b> ${message}</p>
  <p><b>File:</b> ${source}</p>
  <p><b>Line:</b> ${lineno}:${colno}</p>
  <pre>${error?.stack || ''}</pre>`;
  document.body.appendChild(div);
  return false;
};
// ------------------------------------------------

import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router' // check karein aapki router file ka path sahi hai

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    React.createElement(RouterProvider, { router: router })
  )
}
