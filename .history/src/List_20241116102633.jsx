

function List() {
    const fruits = [{ id:1 ,name: 'Banana', carlories: 50 },
                    { id: 2,name: 'orange', carlories: 95 },
                    { id: 3,name: 'Tomato', carlories: 125 },
                    { id: 4,name: 'Kiwi', carlories: 150 }
                    // the id willl help to give the key value which is necessary for react to keep track of the data in the list
    ];
    // we can sort the list before we display it
    //fruits.sort((a, b) => a.name.localeCompare(b.name));  //this is using alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name));  //this is using reverse alphabetical 
    
    // sorting by numerical values
    // fruits.sort((a,b) => b.carlories - a.carlories)
    
    // sorting by a specific criterion eg. get all that are greater than 94
    const lowCarlories = fruits.filter(fruit => fruit.carlories < 94);
        
    const listItems = lowCarlories.map(lowCarlorie => <li key={lowCarlorie.id}>
                                            {lowCarlorie.name} &nbsp;
                                            {lowCarlorie.carlories}
                                            </li>);
    return (
        <ol>{listItems}</ol>
    )
}

export default List