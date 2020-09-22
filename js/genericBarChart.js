
export default (sector, xLables, id) => {


    c3.generate({
        bindto: id,
        data: {
            columns: [
                ['Unique Count', ...sector]
            ],

            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.3
            }
        },

        axis: {
            x: {
                type: 'category',
                categories: [...xLables],
                label: 'Sectors'
            },
            y: {
                label: 'Unique Count'
            }
        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        }
    });


}