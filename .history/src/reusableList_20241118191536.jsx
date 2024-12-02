import propTypes from 'prop-types';

function ReusableList(props) {
    const cartegory = props.cartegory; 
    const itemList = props.items;
    
    const listItems = itemList.map(item => <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.calories}</b>
                                </li> );
    return (<>
        <h3 className='list-cartegory'>{cartegory}</h3>
        <ol className='list-item'>{listItems}</ol>
    </>)
}

ReusableList.propTypes = {
    items : propTypes.array,
    cartegory : propTypes.string
}

ReusableList.defaultProps = {
    cartegory: ''
}

export default ReusableList;