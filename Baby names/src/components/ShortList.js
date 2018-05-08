import React, { Component } from 'react';

class ShortList extends Component {
    render() {
       
       const { data , favorites } = this.props;
       const idList = favorites.map(id=>{
            const { name, sex } = data[id]
            console.log(name)
            return (
                <li key={id} className={sex}>{name}</li>
            )
       })
    
        return (
            <div className="demo">
                <p>Click on the name to short listed it</p>
                <ul>
                    {idList}
                </ul>
            </div>
        );
    }
}

export default ShortList;