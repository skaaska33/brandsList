export const debounce = (func, delay) => {
    let timeOut;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => func.apply(context, args), delay)
    }
};