import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Typography } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;
const { Text } = Typography;

function Counter() {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount (count - 1);
    };
    
    useEffect(() => {
        if (count >0) {
            alert(`CART IS UPDATE!`);
        }
    }, [count]);

    return (
        <div>
            <div>
                <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={countUp}>
                    Add to Cart
                </Button>
            </div>
            <div>
                <Button type="danger" shape="round" style={{margin:'7px 25px 0px 25px'}} onClick={countDown}>
                    Remove Cart
                </Button>
            </div>
            <Text>Total cart : {count}</Text>
            </div>
    );
}

export default class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: [],
            visible: false,
            name: "",
            price: "",
            brand: "",
            image_link: "",
        };
    }
    
    componentDidMount() {
        axios({
            method: "get",
            url: "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner",
            headers: {
                accept: "*/*",
            },
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
                shop: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
        <div>
            {this.state.shop.map((results) => {
                return (
                <div key={results.id} style={{textAlign:'center', display:'inline-block'}}>
                    <Card hoverable style={{textAlign:'center', display: 'inline-block', width:350, margin:'30px', boxShadow:'1px 2px 1px 0.1px', borderRadius:'20px'}}
                    cover={<img alt="gambar1"maxWidth="30px" src={results.image_link} />}>
                        <Meta title={results.name} description={results.price} />
                        <div>
                            <p>Brand : {results.brand}</p>
                        </div>
                        <div>
                            <Counter />
                        </div>
                    </Card>
                </div>
                );
            })}
        </div>
        );
    }
}