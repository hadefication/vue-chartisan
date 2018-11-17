## Vue Chartisan

Just another Vue wrapper for [Chartist](http://gionkunz.github.io/chartist-js/) charting library.

### Usage
Install it by running `npm i vue-chartisan` or `yarn add vue-chartisan` or even use `unpkg` by adding `<script src="https://unpkg.com/vue-chartisan@0.1.2/dist/vue-chartisan.min.js"/>` in your page, just pick your poison!

```
// ES6
import Vue from 'vue';
import VueChartisan from 'vue-chartisan';

Vue.use(VueChartisan);

new Vue({
    el: '.app'
});

// Old School
window.Vue = require('vue');

Vue.use(require('vue-chartisan'));

new Vue({
    el: '.app'
})
```
You can then use the available components that has been installed namely `BarChart`, `LineChart` and `PieChart`. These components follows the instance signature of [Chartist]() so it should be pretty smooth if you're familiar with it.

### BarChart

```
<bar-chart>
```
