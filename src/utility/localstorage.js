function getSavedItem (){
    const items = localStorage.getItem('cardIds');
    if(items){
        return JSON.parse(items)
    }
    return []
}

function saveItemInLs (itemId){
    const itemsArr = getSavedItem()
    const exist = itemsArr.find(item => item === itemId)
    if(!exist){
        itemsArr.push(itemId)
        localStorage.setItem('cardIds', JSON.stringify(itemsArr))
    }
    
}

export { getSavedItem, saveItemInLs };

