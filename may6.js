function astroguru(numChildren, spouseName, location, job) {
    return `You will be a ${job} in ${location} and married to ${spouseName} with ${numChildren} kids`
}

function max(n1, n2) {
    if(n1 == n2) {
        console.log('Numbers are equal')
    }
    else if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}