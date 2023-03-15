let dataFilter = ['All', 'Futsal', 'Badminton', 'Basket']

dataFilter = dataFilter.map(item => {
    return {
        label: item,
        value: item.toLowerCase()
    }
})

export default dataFilter