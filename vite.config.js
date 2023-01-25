import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default ({ mode }) => {  
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaomap_api_key: env.VITE_KAKAOMAP_API_KEY,
          }
        }
      }),
    ],
  }
}