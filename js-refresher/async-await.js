// setTimeout(() => {
//     console.log("Timer is done")
// }, 2000);

// console.log('hello');

const fetchData = () => {
    const promise = new Promise((a, b) => {
        setTimeout(() => {
            a('done');
        }, 2000);
    });
    return promise;
};

setTimeout(() => {
    console.log('timer is done');
    fetchData().then(done => {
    console.log(done);
    return fetchData();
})
.then(done => {
    console.log(done);
})
}, 1500);