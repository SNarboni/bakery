import React from 'react'

class List extends React.Component {
    render() {
        return (
            <div>
                <p>List</p>
                <ul>
                    {this.props.itemList.map((items,index) => {
                        return(
                            <li key={index}>
                                {`name : ${items.name}`}<br/>{`price : ${items.price} €`}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List;
