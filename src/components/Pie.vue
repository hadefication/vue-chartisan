<script>
    import { Pie } from 'chartist';
    export default {
        props: {
            data: {
                type: Object,
                required: true
            },

            options: {
                type: Object,
                default: () => {
                    return {}
                }
            },

            responsiveOptions: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        },

        watch: {
            data: {
                deep: true,
                handler: function() {
                    this.$nextTick(function() {
                        this.pie.update(this.data, this.options, this.responsiveOptions);
                    });
                }
            }
        },

        methods: {
            init()
            {
                this.pie = new Pie(
                    this.$refs.pie, 
                    this.data, 
                    this.options,
                    this.responsiveOptions
                );
            }
        },

        render(h)
        {
            return h('div', {ref: 'pie'});
        },

        created()
        {
            this.pie = null;
        },

        mounted()
        {
            if (typeof this.data != 'undefined') {
                this.init();
            }
        },

        beforeDestroy()
        {
            if (this.pie != null) {
                this.pie.detach();
            }
        }
    }
</script>
