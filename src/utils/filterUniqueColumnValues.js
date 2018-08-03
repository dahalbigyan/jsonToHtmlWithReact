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
    return columnEnum;
}; 

export default filterBasedKey;