import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/mychat/",  // <-- Add this line (replace "mychat" with your repo name)
  plugins: [react()],
})
