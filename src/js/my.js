export default () => {
    console.log('this is module');

    const obj = {a: 1,b: 2};
    const obj2 = {
        ...obj,
        c:3
    }
    console.log(obj2)
}