

function List() {
    const fruits = ['Banana', 'orange', 'Tomato', 'Kiwi'];

    const listItems = fruits.map(fruit => <li key={fruit.indexOf(fruit) }>{fruit}</li>);
    return (
        <ul>{listItems}</ul>
    )
}

export default List