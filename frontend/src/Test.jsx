import React, {useState} from 'react'
import { _listOfFood } from "./fetchFood.js"

// export default class Test extends React.Component{

//   state = {
//       loading: true,
//       person: null,
//   };

//   async componentDidMount() {
//       const url = "https://api.randomuser.me";
//       const response = await fetch(url);
//       const data = await response.json();
//       this.setState({person: data.results[0], loading: false})
//   }

//   render(){
//     return (
//         <div>
//             {this.state.loading || !this.state.person ? (
//                 <div>loading...</div>
//             ) : ( 
//                 <div>
//                     <div>{this.state.person.name.first}</div>
//                     <img src={this.state.person.picture.large} />
//                 </div>
//             )}
//         </div>
//       );
//   }  
  
// }

export default class Test extends React.Component{
    render() {
        return(
            <div>
                <h1>test</h1>
                {_listOfFood.map((dish, index)=>{
                    return <h1>{dish.title}</h1>
                })}
            </div>
        )
    }
}