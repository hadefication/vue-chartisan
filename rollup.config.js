import vue from 'rollup-plugin-vue';
import bubble from 'rollup-plugin-buble';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/wrapper.js',
    output: {
        name: 'VueChartist',
        exports: 'named',
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
        bubble(),
        minify()
    ],
    external: ['chartist']
};