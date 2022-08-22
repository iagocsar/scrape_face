import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
  proxy: {
    '/getItems': 'http://localhost:5000',
  }, 
  }
})
