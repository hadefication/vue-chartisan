import PieChart from './components/Pie.vue';
import BarChart from './components/Bar.vue';
import LineChart from './components/Line.vue';

const install = (Vue) => {
	if (install.installed) return;
    install.installed = true;
    Vue.component('BarChart', BarChart);
    Vue.component('PieChart', PieChart);
    Vue.component('LineChart', LineChart);
};


let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use({ install });
}

export { PieChart, BarChart, LineChart };
export default { install };