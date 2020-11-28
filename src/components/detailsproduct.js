import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class detailsproduct extends Component {
    state = {
        lihatbenefit : false
    }
    ubahlihatbenefit = () => {
        this.setState(() => {
            return {lihatbenefit : !this.state.lihatbenefit}
        })
    }
    componentWillUnmount() {
        alert('HIDE DETAILS PRODUCTS?')
    }

    render() {
        return (
        <Card hoverable title=" Details Products" size="small" style={{ Align:'center', width: '100%', boxShadow:'0px 1px 1px'}}>
            <p style={{margin:'2px'}}>Name Products : Slim Lip Pencil</p>
            <p style={{margin:'2px'}}>Type : Natural Lip Pencil</p>
            <p style={{margin:'2px'}}>Price : $4.00</p>
            <p style={{margin:'2px'}}>Stocks: 5</p>
            <div style={{Align:'center', display: 'inlineblock'}}>
                <a onClick={this.ubahlihatbenefit}>{this.state.lihatbenefit ? 'Minimize' : 'View'} BENEFIT!</a>
                {this.state.lihatbenefit ? <p>30% OFF AT CHECKOUT</p> : ''}
            </div>
        </Card>
        );
    }
}

export default detailsproduct;