import React, { Component, useImperativeHandle } from "react";
import axios from 'axios';

class Inventory extends Component{
    constructor() {
        super();
        this.state = {
            inventoryItems: [],userID:'b56045a6-6a1c-424f-89ca-9d988212d6f7'
        }
    }

    componentDidMount()
    {
        const url = "https://localhost:7001/items";
        /*useEffect(() => {
            fetch(url).then(response => response.json()).then(data => console.log(data));
        }, []);*/

        axios.get(url,{params:{userId:this.state.userID}}).then(Res => {
            console.log(Res.data)
            this.setState({
                inventoryItems: Res.data
        })
        });
    }
    render()
    {
       
        const { inventoryItems,userID } = this.state
        
        return (<>            
            <div>
                 
                <h1>Inventory Items</h1>

                <table className="">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Created Date</td>
                    </tr>             
                {
                    inventoryItems.length ?
                            inventoryItems.map(item => 
                                <tr key={item.catalogItemId}>
                                    <td>{item.catalogItemId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.acquiredDate}</td>
                                </tr>
                        ) : null                       
                }
            </table>
            </div>
        </>
        );
    }
}

export default Inventory