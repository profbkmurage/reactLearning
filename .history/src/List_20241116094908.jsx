

function List() {
    const fruits = ['Banana', 'orange', 'Tomato', 'Kiwi'];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return (
        <ul>{listItems}</ul>
    )
}

export default List