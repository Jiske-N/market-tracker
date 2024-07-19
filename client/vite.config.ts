// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// // import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // resolve: {
//   //   // replace @ in directory with
//   //   alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
//   // },
//   server: {
//     port: 6000,
//     open: true,
//     proxy: {
//       '/graphql': {
//         target: 'http://localhost:6001',
//         secure: false,
//         changeOrigin: true
//       }
//     }
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
