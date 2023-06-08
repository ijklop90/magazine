const switchToCart = (arr, data, setFunc) => {
    const cart = arr.map((el,idx)=> 
        idx===(data.id-1)
            ? el = {...data}
            : el)
        setFunc(cart)
}

export { switchToCart}