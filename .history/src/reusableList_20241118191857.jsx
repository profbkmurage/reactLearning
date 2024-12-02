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
    cartegory : propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes
    }))
}

ReusableList.defaultProps = {
    cartegory: 'Cartegory',
    items: []
}

export default ReusableList;