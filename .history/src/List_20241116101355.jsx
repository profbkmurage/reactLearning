

function List() {
    const fruits = [{ id:1 ,name: 'Banana', carlories: 50 },
                    { id: 2,name: 'orange', carlories: 95 },
                    { id: 3,name: 'Tomato', carlories: 125 },
                    { id: 4,name: 'Kiwi', carlories: 150 }
                    // the id willl help to give the key value which is necessary for react to keep track of the data in the list
    ];
    // we can sort the list before we display it
    fruits.sort((a, b) => a.name.localeCompare(b.name));
    
    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name} &nbsp;
                                            {fruit.carlories}
                                            </li>);
    return (
        <ol>{listItems}</ol>
    )
}

export default List