module.exports  = (temp, product) => {
    let output = temp.replace(/{name}/g, product.productName);
    output = output.replace(/{country}/g, product.from);
    output = output.replace(/{nutri}/g, product.nutrients);
    output = output.replace(/{count}/g, product.quantity);
    output = output.replace(/{price}/g, product.price);
    output = output.replace(/{image}/g, product.image);
    output = output.replace(/{des}/g, product.description);
    if(!product.organic) output =  output.replace(/{not-org}/g, 'not-organic ');
    output = output.replace(/{id}/g, product.id);

    return output
}
