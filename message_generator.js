// store message options
const vehicleOptions = {
    color: ['black', 'blue', 'white', 'gray', 'red', 'yellow', 'green'],
    year: ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    model: ['Toyota Camry', 'Chevrolet Camaro', 'Ford F150', 'Tesla', 'BMW 3 series', 'Nissan 350z']
}

// declare array for answers
const messageArr = [];

// get random message
for (val in vehicleOptions) {
    let randInt = Math.floor(Math.random() * (vehicleOptions[val].length));
    messageArr.push(vehicleOptions[val][randInt])
}

// print message
console.log(`You should buy a ${messageArr[0]} ${messageArr[1]} ${messageArr[2]} for your next vehicle.`);