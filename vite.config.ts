import path, { resolve } from 'path'

export default {
    root: 'src',
    base: '',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                sample: resolve(__dirname, 'src/sample/index.html'),
            }
        }
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src/components'),
        }
    }
}