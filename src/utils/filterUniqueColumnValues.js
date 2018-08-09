const filterBasedKey = (arr, columnkey)=>{
    const columnSet = new Set();
    arr.forEach((item)=>{
        columnSet.add(item[columnkey]);
    });
    const columnEnum={}; 
    for (let item of columnSet){
        const enumKey = item.toUpperCase();
        columnEnum[enumKey]=item;
    };
    const stateobj = {}
    for(let key in columnEnum){
        stateobj[columnEnum[key]] = {
            check: false
        };
    }; 
    return stateobj;
}; 

export default filterBasedKey;