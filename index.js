let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
];

function interestCalculator(arr) {
    let rate;
    let interestData = [];
    let interest;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
            let data1 = {};
            rate = 3;
            interest = (arr[i].principal * rate * arr[i].time) / 100
            data1.principal = arr[i].principal;
            data1.rate = rate;
            data1.time = arr[i].time;
            data1.interest = interest;
            interestData.push(data1)
        } else if (arr[i].principal >= 2500 && arr[i].time >= 3) {
            let data1 = {};
            rate = 4;
            interest = (arr[i].principal * rate * arr[i].time) / 100
            data1.principal = arr[i].principal;
            data1.rate = rate;
            data1.time = arr[i].time;
            data1.interest = interest;
            interestData.push(data1)

        } else if (arr[i].principal < 2500 || arr[i].time <= 1) {
            let data1 = {};
            rate = 2;
            interest = (arr[i].principal * rate * arr[i].time) / 100
            data1.principal = arr[i].principal;
            data1.rate = rate;
            data1.time = arr[i].time;
            data1.interest = interest;
            interestData.push(data1);

        } else {
            let data1 = {};
            rate = 1;
            interest = (arr[i].principal * rate * arr[i].time) / 100
            data1.principal = arr[i].principal;
            ndata1.rate = rate;
            data1.time = arr[i].time;
            data1.interest = interest;
            interestData.push(data1);

        }


    }
    return interestData;


}
console.log(interestCalculator(data));