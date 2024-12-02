import prop from 'prop-types';

function ReusableList(props) {
    const cartegory = props.cartegory; 
    const itemList = props.items;
    
    const listItems = itemList.map(item => <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.calories}</b>
                                </li> );
    return (<>
        <h3>{cartegory}</h3>
        <ol>{listItems}</ol>
    </>)
}

ReusableList.prop = {
    items : prop.string,
    cartegory : prop.string
}

export default ReusableList;