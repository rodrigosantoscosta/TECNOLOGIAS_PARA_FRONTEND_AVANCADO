import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CHUCK_NORRIS_REACT" //Adicionar um /<nomedorepositório>, importante salientar que não é o nome do projeto e sim do repo do github
})
