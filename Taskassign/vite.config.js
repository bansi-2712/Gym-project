import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  build:{
    chunkSizeWarningLimit:1000,
    rollupOptions:{
      output:{
        manualChunks(id){
          if(id.includes('node_modules')){
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        
        }
      }
    }
  },
  optimizeDeps:{
    include:['@emotion/react', 
      '@emotion/styled',
       '@mui/material',
      '@mui/icons-material',],
    exclude:[]
  }
})
