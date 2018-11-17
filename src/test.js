import { shallowMount } from '@vue/test-utils'
import VueChartisan, { BarChart, LineChart, PieChart } from '../dist/vue-chartisan.esm';

describe('VueChartisan', () => {
    const barData = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    };

    const factory = (Component, values = {}) => {
        return shallowMount(Component, {
            propsData: { ...values  }
        });
    }

    it('can be installed using Vue.use', () => {
        expect(VueChartisan).toHaveProperty('install');
        expect(typeof VueChartisan.install).toBe('function');
    });

    it('renders a bar chart', () => {
        const wrapper = factory(BarChart, {data: barData});
        console.log(wrapper.html());
        expect(wrapper.find('svg').exists()).toBe(true);
    });

    // it('matches snapshot', () => {
    //     const wrapper = shallowMount(BarChart, {
    //         propsData: { data: barData }
    //     });
    //     expect(wrapper.html()).toMatchSnapshot();
    // });
});