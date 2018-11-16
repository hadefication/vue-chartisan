<script>
    import { Bar } from 'chartist';
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
            }
        },

        methods: {
            init()
            {
                this.bar = new Bar(
                    this.$refs.bar, 
                    this.data, 
                    this.options
                );
            }
        },

        render(h)
        {
            return h('div', {
                ref: 'bar'
            });
        },

        created()
        {
            this.bar = null;
        },

        mounted()
        {
            if (typeof this.data != 'undefined') {
                this.init();
            }
        },

        beforeDestroy()
        {
            if (this.bar != null) {
                this.bar.detach();
            }
        }
    }
</script>
