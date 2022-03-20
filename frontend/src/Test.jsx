import React, { useState, useEffect }from 'react'
import fetchFood from "./fetchFood"

// const [data, setData] = useState([])


// useEffect(() => {
//     fetch()
// }, [])


// class Test extends Component {

//     constructor() {
//         super()
//         this.state = { data: [] }
//     }
//     async getData() {
//         const response = fetchFood()
//         const result = await response.json()
//         this.setState({ data: result })
//         console.log(response)
//     }

//     async test(){
//         const value = await fetchFood()
//         console.log(value)
//     }

//     render() {
//         let { data } = this.state
//         return (
//             <div>
//                 Test
//                 <div>
//                     { data }
//                 </div>
//                 test 2
//             </div>
//         )
//     }
// }

const Test = () =>{
    const[data, setData] = useState([])

    // useEffect(() => {
    //     fetchFood().then((data) => setData(data))
    // })

    // if(!data) return <div>loading... </div>

    // return(
    //     <div>
    //         <ul>
    //             {data.map((dish) => (
    //                 <li key={dish.title}></li>
    //             ))}
    //         </ul>
    //     </div>
    // )

    useEffect(() => {
        const getFood = async () => {
            const data = await fetchFood()
            setData(data)
        }

        
        getFood()

        return () => {
            
        }
    }, [])

    return(
        <div>
            <ul>
                {data.map((dish) => (
                    <li key={dish.title}></li>
                ))}
            </ul>
        </div>
    )

}

export default Test