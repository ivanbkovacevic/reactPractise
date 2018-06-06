import React from 'react';

const Colors = (props) => {

    let bojaSlova="white";

function promenaBoje(){
    console.log("promena boje");
    if(bojaSlova==="white"){
        bojaSlova="black";
    }else{bojaSlova="white"}
};
    

    let colors=props.colors;
    let colorsItem= colors.map((color)=>{
        
        let colorStyle ={
            color:bojaSlova,
            display:"in-line",
            backgroundColor:color.color,
            heigth:50,
            width:100,
            margin:10
        };
        return (<div onClick={()=>props.appFun(color.id)}  style={colorStyle} key={color.id}>{color.name}</div>);
    });

    console.log(colors+"u colors componenti");

    return (
            <div>
                {colorsItem}
                <button onClick={()=>promenaBoje}>Promeni boju slova</button>
                <p onClick={promenaBoje()}>promena boje</p>
            </div>
    );
};

export default Colors;