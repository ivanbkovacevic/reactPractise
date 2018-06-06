import React, { Component } from 'react';

class Drilovanje extends Component {
    
        render() {
            let ljudi =this.props.family;
            let osobe= ljudi.map(x=>{
                return <p>{x.ime}</p>
                {
                  x.hobi.map(y=>{
                      return <p>{y.ime}</p>
                  })
                }

            })
    
           var  list=[{value: 'One', list:[{value: 'abc', selected: false}, {value: 'eee',  selected: false}]},
            {value: 'Two', list: [{value: 'psr', selected: false}]}];
            return <div className="widget">
             {osobe}
            {
               list.map((item, index) => {
            return (
              <div key={index}>
                <ul >{item.value}</ul>
               {
                item.list.map((subitem, i) => {
                  return (
                     <ul ><li>{subitem.value}</li></ul>
                  )
                })
               }
              </div>
            )
          })
          }
            
           
               </div>;
        }
      }

export default Drilovanje;