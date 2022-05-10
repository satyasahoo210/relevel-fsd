function astroguru(numChildren, spouseName, location, job) {
    return `You will be a ${job} in ${location} and married to ${spouseName} with ${numChildren} kids`
}

function max(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else if (n2 > n1) {
        return n2;
    } else {
        console.log('Numbers CAN NOT be compared or are equal')
    }
}