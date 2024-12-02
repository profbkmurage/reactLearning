
function reusableList(props) {
    const cartegory = props.cartegory;
    const itemList = props.items;
    
    const listItems = itemList.map(item => <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.calories}</b>
                                </li> );
    return(<ol>{listItems}</ol>)
}

export default reusableList;