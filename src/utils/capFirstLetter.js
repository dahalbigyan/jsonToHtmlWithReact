const capFirstLetter = function(str){
    const cappedItem= str.charAt(0).toUpperCase() + str.substr(1);
    return cappedItem;
};

export default capFirstLetter;
