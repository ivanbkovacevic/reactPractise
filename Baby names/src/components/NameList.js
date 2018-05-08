import React, { Component } from 'react';

class NameList extends Component {
    render() {

        const { data, filterText, addFavorite } = this.props;

        const NameList = data.filter(name=>{
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        }).map(name=>{
            return (
              <li key={name.id}
               className={name.sex}
               onClick={()=>addFavorite(name.id)}
               >
               {name.name}
               </li>
            );
        })
 
         return (
             <div >             
                 <ul>
                     {NameList}            
                 </ul>
             </div>
         );
     }
 }
export default NameList;