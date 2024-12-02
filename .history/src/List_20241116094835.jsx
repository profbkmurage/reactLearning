

function List() {
    const fruits = ['Banana', 'orange', 'Tomato', 'Kiwi'];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return (
        <ol>{listItems}</ol>
    )
}

export default List