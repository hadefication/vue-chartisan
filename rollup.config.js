import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/wrapper.js',
    output: {
        name: 'VueChartisan',
        exports: 'named',
        globals: {
            'chartist': 'Chartist'
        }
    },
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        vue({
            css: true,
            compileTemplate: true,
        }),
        buble(),
        minify()
    ],
    external: ['chartist']
};