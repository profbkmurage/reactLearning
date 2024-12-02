

function List() {
    const fruits = [{ name: 'Banana', carlories: 50 },
                    { name: 'orange', carlories: 95 },
                    { name: 'Tomato', carlories: 125 },
                    { name: 'Kiwi', carlories: 150 }
    ];

    const listItems = fruits.map(fruit => <li key={fruit.indexOf(fruit) }>{fruit}</li>);
    return (
        <ul>{listItems}</ul>
    )
}

export default List