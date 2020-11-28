import React, { useState, useContext } from 'react';
import Select from '../elements/select';
import Link from '../elements/link';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const themes = {
    light:{
        id: 1,
        foreground: '#000000',
        background: "#eeeeee",
    },
    dark:{
        id: 2,
        foreground: "#ffffff",
        background: "#222222",
    },
};

const ThemeContext = React.createContext(themes.light);

function CardSaya(props) {
    return (
    <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
        <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src={props.src}></img>
        <p style={{margin:'2px'}}>{props.nama}</p>
        <p style={{margin:'2px'}}>{props.nim}</p>
        <Select>
            <option value="">Kelas</option>
            <option value="1">A</option>
            <option value="2">B</option>
        </Select>
    </Card>
 );
}

function ThemedButton() {
    const { changeTheme } = useContext(ThemeContext);
    return (
    <Link onClick={changeTheme}>
        CHANGE THEME
    </Link>
    );
   }

export default function MyCard() {
        const [theme, setTheme] = useState(themes.dark);
        const changeTheme = () =>{
            if (theme.id === themes.light.id){
                setTheme(themes.dark);
            }
            else{
                setTheme(themes.light);
            }
        };

        return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div style={{ background: theme.background, color: theme.foreground, textAlign:'center', fontFamily:'Roboto', fontSize:'24px', height:'83vh'}}>
                <CardSaya src="https://i.ibb.co/Gskw0Dn/Laurensia.jpg" nama="Laurensia Divina Dewi Fortuna" nim="21120117120010"></CardSaya>
                <CardSaya src="https://i.ibb.co/KWnJPm2/Mahani.jpg" nama="Mahani Halwa" nim="21120117140016"></CardSaya>
            <div>
                <ThemedButton />
            </div>
            </div>
        </ThemeContext.Provider>
        );
}