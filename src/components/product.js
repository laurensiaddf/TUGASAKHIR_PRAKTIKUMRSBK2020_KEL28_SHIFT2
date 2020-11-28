import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class product extends Component {
    state = {
        angka:0
    }
    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }
    shouldComponentUpdate(_,nextState) {
        if (this.state.angka !== nextState.angka && typeof nextState.angka === "number") {
            if (nextState.angka >5){
                alert(`SOLD OUT`)
                return false
            }
            return window.confirm('ADD TO CART?')
        }
        return false
    }
    componentDidUpdate() {
        alert(`SUCCESS ADD TO CART`)
    }

    render() {
        return (
        <div style={{textAlign:'center', display: 'inlineblock'}}>
            <Card hoverable style={{display: 'inline-block', width:350, margin:'30px', boxShadow:'0px 1px 1px'}}
            cover={<img alt="gambar1" height="380px" src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwdd9148df/ProductImages/2020/Lips/SPL/092920-Slim-Lip-Pencil-Allure-Best-Beauty-SPL834.jpg?sw=500&sfrm=jpg&q=70" />}>
                <Meta title="Slim Lip Pencil" description="$4.00" />
                <div>
                    <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                        Add to Cart
                    </Button>
                </div>
                <Text>Total cart : {this.state.angka}</Text>
            </Card>
        </div>
        );
    }
}
export default product;