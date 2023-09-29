const choice = (items) => {
    let rand = Math.floor(Math.random() * items.length);
    return items[rand]; 
};


const remove = (items, item) => {
    let newArray = items.filter(i => i !== item);
    return newArray;
};

export {choice, remove};