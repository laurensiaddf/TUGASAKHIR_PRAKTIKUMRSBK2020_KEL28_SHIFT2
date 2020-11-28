import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class detailspicture extends Component {
    state = {
        viewproduct : "Natural Lip Pencil"
    }
    ubahviewproduct = () => {
        this.setState((state) => {
            if (state.viewproduct === "Natural Lip Pencil"){
                return {viewproduct : "Flower, Dollu Pink, Rose, Sand Pink, Pinky, Edge Pink, Bloom"}
            } else {
                return {viewproduct : "Natural Lip Pencil"}
            }
        })
    }
    componentWillUnmount() {
        alert('HIDE DETAILS PICTURES?')
    }
    
    render() {
        return (
        <Card size="small" style={{boxShadow:'0px 1px 1px'}}>
            <Row justify="center">
                <Col>
                    <Image width={150} src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8c900173/ProductImages/2016/Lips/Suede_Matte_Lip_Liner/800897064129_suedemattelipliner_lifesabeach_main.jpg?sw=459&sfrm=jpg&q=70"/>
                </Col>
                <Col>
                    <Image width={150} src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa4131a8b/ProductImages/Lips/Retractable_Lip_Liner/800897143459_retractablelipliner_jewel_main.jpg?sw=459&sfrm=jpg&q=70"/>
                </Col>
                <Col>
                    <Image width={150} src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw251900b6/ProductImages/2017/Lips/Slide_On_Lip_Pencil_2017/800897839482_slideonlippencil_summertease_main.jpg?sw=459&sfrm=jpg&q=70"/>
                </Col>
                <Col>
                    <Image width={150} src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw9cc9c91e/ProductImages/2019/Lips/Line_And_Load_All_In_One_Lippie/800897169947_lineandloadallinonelippie_girlplease_main.jpg?sw=459&sfrm=jpg&q=70"/>
                </Col>
            </Row>
            <div style={{Align:'center', display: 'inlineblock'}}>
                <a onClick={this.ubahviewproduct}> View Product!</a>
                <p>{this.state.viewproduct}</p>
            </div>
        </Card>
        );
    }
}
export default detailspicture;