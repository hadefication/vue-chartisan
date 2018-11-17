## Vue Chartisan

Just another Vue wrapper for [Chartist](http://gionkunz.github.io/chartist-js/) charting library.

### Usage
Install it by running `npm i vue-chartisan` or `yarn add vue-chartisan` or even use `unpkg` by adding `<script src="https://unpkg.com/vue-chartisan@0.1.7/dist/vue-chartisan.min.js"/>` in your page, just pick your poison!

#### ES6
```
// App.vue
<template>
    <div id="app">
        <bar-chart :data="{}" :options="{}"/>
        <line-chart :data="{}" :options="{}"/>
        <pei-chart :data="{}" options="{}" :responsive-options="[]"/>
    </app>
</template>

// app.js
import Vue from 'vue';
import VueChartisan from 'vue-chartisan';
import App from './path/to/App.vue';
import 'vue-chartisan/dist/vue-chartisan.min.css';

Vue.use(VueChartisan);

new Vue({
    el: '#app',
    render: h => h(App)
});
```
#### UMD
```
// App.vue
<template>
    <div id="app">
        <bar-chart :data="{}" :options="{}"/>
        <line-chart :data="{}" :options="{}"/>
        <pei-chart :data="{}" options="{}" :responsive-options="[]"/>
    </app>
</template>

// app.js 
window.Vue = require('vue');

Vue.use(require('vue-chartisan'));

require('vue-chartisan/dist/vue-chartisan.min.css');

new Vue({
    el: '#app',
    render: h => h(require('./path/to/App.vue'))
});
```
#### UNPKG
```
// stylesheet
    ...
    <link rel="stylesheet" href="https://unpkg.com/vue-chartisan@0.1.7/dist/vue-chartisan.min.css">
</head>

// body
<body>
    <div id="app">
        <bar-chart :data="{}" :options="{}"/>
        <line-chart :data="{}" :options="{}"/>
        <pei-chart :data="{}" options="{}" :responsive-options="[]"/>
    </div>

...
        <script src="https://unpkg.com/vue@2.5.17/dist/vue.js"></script>
        <script src="https://unpkg.com/chartist@0.11.0/dist/chartist.js"></script>
        <script src="https://unpkg.com/vue-chartisan@0.1.7/dist/vue-chartisan.min.js"></script>
        <script>
            new Vue({
                el: '#app'
            })
        </script>
    </body>
</html>
```