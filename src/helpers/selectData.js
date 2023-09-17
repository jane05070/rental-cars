export const selectData = data =>
    data.map(item => ({
        value: item,
        label: item,
    }));