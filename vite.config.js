const { resolve } = require('path')
const { defineConfig } = require('vite')
const dts = require('vite-plugin-dts')


module.exports = defineConfig({
  plugins: [
    dts({
        insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve('./', 'src/index.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      formats: ['es', 'umd'],
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
        },
      },
    },
  },
})
