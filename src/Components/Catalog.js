import React, { Component } from "react";
import { useEffect } from "react";
import axios from 'axios'
import table from '../CSS/table.css'


class Catalog extends Component{
    constructor() {
        super();
        this.state = {
            catalogItems: []
        }
    }

    
    componentDidMount()
    {
        const url = "https://localhost:7223/items";
        /*useEffect(() => {
            fetch(url).then(response => response.json()).then(data => console.log(data));
        }, []);*/

        axios.get(url).then(Res => {
            console.log(Res.data)
            this.setState({
                catalogItems: Res.data
        })
        });
    }
    render()
    {
        const {catalogItems}=this.state
        return (<>            
            <div>
                <h1>Catalog Items</h1>

                <table className="">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Created Date</td>
                    </tr>             
                {
                    catalogItems.length ?
                            catalogItems.map(item => 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.createdDate}</td>
                                </tr>
                        ) : null                       
                }
            </table>
            </div>
        </>
        );
    }
}
export default Catalog