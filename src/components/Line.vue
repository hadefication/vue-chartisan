<script>
    import { Line } from 'chartist';
    export default {
        props: {
            data: {
                type: Object,
                required: true
            },

            options: {
                type: Object,
                default: () => {
                    return {
                        fullWidth: true,
                        chartPadding: {
                            right: 40
                        }
                    }
                }
            }
        },

        methods: {
            init()
            {
                this.line = new Line(
                    this.$refs.line, 
                    this.data, 
                    this.options
                );
            }
        },

        render(h)
        {
            return h('div', {
                ref: 'line'
            });
        },

        created()
        {
            this.line = null;
        },

        mounted()
        {
            if (typeof this.data != 'undefined') {
                this.init();
            }
        },

        beforeDestroy()
        {
            if (this.line != null) {
                this.line.detach();
            }
        }
    }
</script>
