import { defineConfig } from 'weapp-vite/config'
import tailwindcss from '@tailwindcss/postcss'
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'


export default defineConfig({
  weapp: {
    srcRoot: 'src',

  },
  plugins: [
    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true,
      tailwindcss: {
        // 显示声明用的是 tailwindcss v4
        version: 4,
        v4: {
          cssEntries: [
            // app.css 的路径
            'src/app.css',
          ],
        },
      },
    }),
  ],
})
