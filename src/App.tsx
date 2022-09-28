import React from 'react';
import {useState,useEffect,useRef,useMemo} from 'react'
import Button from '@mui/material/Button'

import logo from './logo.svg';
import './App.css';
import img1 from './images/Brick.svg';//レンガ
import img2 from './images/Lumber.svg';//木材
import img3 from './images/Ore.svg';//岩
import img4 from './images/Grain.svg';//麦
import img5 from './images/Wool.svg';//羊
import img6 from './images/Nothing.svg'//砂漠
import img7 from './images/sea.svg'//海
import img8 from './images/Gold.svg'//砂金
import img1png from './images/Brick.png'
import img2png from './images/Lumber.png'
import img3png from './images/Ore.png'
import img4png from './images/Grain.png'
import img5png from './images/Wool.png'
import img6png from './images/Nothing.png'
import img7png from './images/sea.png'
import img8png from './images/Gold.png'

// import styled from '@emotion/styled'
// const container=`
// 	display: flex;, /* flexbox */
// 	flex-wrap: wrap; /* 折返し指定 */
// `

// const container div {
// 	width: 25%;
// }
import { dirname } from 'path';
import { arrayBuffer } from 'stream/consumers';
// console.log('hei')
const svgList=[img1,img2,img3,img4,img5,img6,img7,img8]
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// console.log(window[1])
// console.log(window[0])
// console.log(window.window.innerWidth)
// console.log(window.window.innerHeight)
// console.log(window.innerHeight)

const sigen_num=[3,4,3,4,4,1]//Brick,Lumber,Ore,Grain,Wool,Nothing
const sigen: number[] = [];
const sigenCoordinate=new Array(19)
const mapNum=[3,4,5,4,3]
// alert(sigenCoordinate)
const imageSize_=100
// function defineSize(): number {
//   if(window.innerWidth<window.innerHeight){
//   // alert('width')

//     return 100+Math.floor(((window.innerWidth)-(100*8))/8)
//   }
//   else if(window.innerHeight<window.innerWidth){
//     // alert('height')
//     return 100+Math.floor(((window.innerHeight)-(100*7))/7)
//   }

//   else{
//     // alert('a')
//     return 0
//   }
// }
const defineSize=(): number=> {
  if(window.innerWidth<window.innerHeight){
    return 100+Math.floor(((window.innerWidth)-(100*8))/8)
  }
  else if(window.innerHeight<window.innerWidth){
    return 100+Math.floor(((window.innerHeight)-(100*7))/7)
  }
  else{
    return 0
  }
}
const defineImageLabelSize=(): number=> {
    return 100+Math.floor(((window.innerWidth)-(100*8))/8)
    return 100+Math.floor(((window.innerWidth)-(100*8))/8)
}
const imageSize=defineSize()
const strokeWidth=imageSize*0.05
const imageLabelSize=defineImageLabelSize()
const imageLabelFontSize=imageLabelSize/10
// alert(window.innerWidth)
// alert(imageSize)
const haba=[imageSize,imageSize/2,0,imageSize/2,imageSize]
let count=0
for (let i=0;i<mapNum.length;i++){
  for(let j=0;j<mapNum[i];j++){
  sigenCoordinate[count]=new Array(2)
  sigenCoordinate[count][0]=[j*imageSize+haba[i]]
  sigenCoordinate[count][1]=[i*imageSize]
  count=count+1
  }
}


const habaSea=[imageSize*1.5,imageSize,imageSize/2,0,imageSize/2,imageSize,imageSize*1.5]
const sigen_num1=[3,4,3,4,4,1]//Brick,Lumber,Ore,Grain,Wool,Nothing
const mapNum1=[3,4,5,4,3]
const mapNum1XY=[[[2,1],[2,2],[2,3]],[[3,1],[3,2],[3,3],[3,4]],[[4,0],[4,1],[4,2],[4,3],[4,4]],[[5,0],[5,1],[5,2],[5,3]],[[6,0],[6,1],[6,2]]]
const sigenCoordinate1=new Array(19)
count=0
for(let i=0;i<mapNum1.length;i++){
  for(let j=0;j<mapNum1[i];j++){
    sigenCoordinate1[count]=new Array(2)
    sigenCoordinate1[count][0]=[mapNum1XY[i][j][1]*imageSize+habaSea[i+2]]
    sigenCoordinate1[count][1]=[mapNum1XY[i][j][0]*imageSize]
    count=count+1
  }
}

const sigenCoordinate2=new Array(12)
const mapNum2=[4,2,3,1,1,1]
// const mapNum=[[0,0,0,0],[0,3],[0,5],[0],[0],[0]]
const mapNum2XY=[[[1,0],[1,1],[1,2],[1,3]],[[2,0],[2,4]],[[3,0],[3,5],[3,7]],[[4,5]],[[5,4]],[[6,3]]]
// alert(mapNum2XY.length)
count=0
for (let i=0;i<mapNum2.length;i++){
  for(let j=0;j<mapNum2[i];j++){
  sigenCoordinate2[count]=new Array(2)
  sigenCoordinate2[count][0]=[mapNum2XY[i][j][1]*imageSize+habaSea[i+1]]
  sigenCoordinate2[count][1]=[mapNum2XY[i][j][0]*imageSize]
  count=count+1
  }
}

const sigenCoordinate3=new Array(13)
const mapNum3=[5,2,2,1,1,1,1]
// const mapNum=[[0,0,0,0],[0,3],[0,5],[0],[0],[0]]
const mapNum3XY=[[[0,0],[0,1],[0,2],[0,3],[0,4]],[[1,4],[1,5]],[[2,5],[2,6]],[[3,6]],[[4,6]],[[5,5]],[[6,4]]]
// alert(mapNum3XY.length)
count=0
for (let i=0;i<mapNum3.length;i++){
  for(let j=0;j<mapNum3[i];j++){
  sigenCoordinate3[count]=new Array(2)
  sigenCoordinate3[count][0]=[mapNum3XY[i][j][1]*imageSize+habaSea[i]]
  sigenCoordinate3[count][1]=[mapNum3XY[i][j][0]*imageSize]
  count=count+1
  }
}


const numArray=[2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
const numArray3=[2,3,4,5,6,8,9,10,11]
for(let i=0 ;i<6;i++){
  for (let j=0;j<sigen_num[i];j++){
    sigen.push(i)
  }
}

const sigenRandom=shuffle(sigen)
const sigenRandom2=[6,6,6,6,6,6,6,6,6,6,6,6]
const sigen3=[0,0,1,2,2,3,4,6,6,6,6,7,7]
// const sigenRandom3=[2,4,6,7,6,0,2,1,6,7,6,0,3]
// const sigenRandom3=shuffle(sigen3)
// const sigenRandom3Check=[[[0]],[[0]],[[0]],[[0,2]],[[1,2]],[[0,2]],[[1]],[[0,2]],[[1]],[[2]],[[1]],[[1]]]
const sigenRandom3Check=[[[[1]]],[[[2]]],[[[3]]],[[[4],[5]]],[[[5],[6]]],[[[6],[7]]],[[[7],[8]]],[[[8],[9]]],[[[9]]],[[[10]]],[[[11]]],[[[12]]]]
// const sigenRandom3Check=[[[1]],[[2]],[[3]],[[4,5]],[[5,6]],[[6,7]],[[7,8]],[[8,9]],[[9]],[[10]],[[11]],[[12]]]


export const App=()=> {
// alert(window[1])
// console.log(window[1])
// console.log(window[0])
// console.log(window.window.innerWidth)
// console.log(window.window.innerHeight)
// console.log(window.innerHeight)





// window.addEventListener('resize', updateSize);
const [dame,setDame]=useState(0)
let dame_num=1
  // console.log('start')
  const func= ()=>{
    // alert('start')
    // let numArrayRandomMap=new Array(5)
    let numArrayRandom=shuffle(numArray)

    while(dame_num!=0){
      let numArrayRandomMap=new Array(5)
      let check=0
      dame_num=0
      count=0
      numArrayRandom=shuffle(numArray)

      for(let i=0;i<mapNum.length;i++){ //数字番号のランダム生成
        for(let j=0;j<mapNum[i];j++){
          if(j==0){
            numArrayRandomMap[i]=new Array(mapNum[i])
          }
          if(sigenRandom[count]==5){
            numArrayRandomMap[i][j]=7
            check=1
          }
          else{
            numArrayRandomMap[i][j]=numArrayRandom[count-check]
          }
          count=count+1
        }
      }
    for(let i=0;i<mapNum.length;i++){//数字番号のランダム生成で赤が隣り合っているかの判定
    count=0
    // console.log(i)
    for(let j=0;j<mapNum[i];j++){
      // console.log(numArrayRandomMap[i][j])
      if(numArrayRandomMap[i][j]==6||numArrayRandomMap[i][j]==8){//6か8のとき，隣り合わせチェックが必要なとき
        if(i<Math.floor(mapNum.length/2)){//半分より上のとき
          if(j==mapNum[i]-1){//一番右を見ているとき
            //
          }
          else{//一番右以外を見ているとき，隣に数字が有るとき
              if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
                // console.log(111)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
          }
          if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の左を見る
            // console.log(222)
            // setDame((prev)=>prev+1)
            dame_num=dame_num+1

          }
          if(numArrayRandomMap[i+1][j+1]==6||numArrayRandomMap[i+1][j+1]==8){//下の右を見る
            // console.log(333)
            // setDame((prev)=>prev+1)
            dame_num=dame_num+1

          }
        }
        else if(i==mapNum.length-1){//一番下のとき
          if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
            // console.log(111)
            // setDame((prev)=>prev+1)
            dame_num=dame_num+1

          }
        }
        else{//半分より下のとき
          if(j==mapNum[i]-1){//一番右を見ているとき
            if(numArrayRandomMap[i+1][j-1]==6||numArrayRandomMap[i+1][j-1]==8){//下の左を見る
              // console.log(222)
              // setDame((prev)=>prev+1)
              dame_num=dame_num+1
            }
          }
          else if(j==0){
            if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の右を見る
              // console.log(333)
              // setDame((prev)=>prev+1)
              dame_num=dame_num+1
            }
            if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
              // console.log(111)
                  // setDame((prev)=>prev+1)
                  dame_num=dame_num+1
                }
          }
          else{
          if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
            // console.log(111)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
              if(numArrayRandomMap[i+1][j-1]==6||numArrayRandomMap[i+1][j-1]==8){//下の左を見る
                // console.log(222)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
              if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の右を見る
                // console.log(333)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
            }
        }

        }
      }
    }
    // alert(dame_num)
    // dame_num=0
  }
  return numArrayRandom
  }
  const islandGenerate=()=>{
    dame_num=1
    let sigenArrayRandom=shuffle(sigen3)
    // console.log('start')
    // console.log(sigenRandom3Check[0][0][0])
    // console.log(sigenArrayRandom[0])
    while(dame_num!=0){
      sigenArrayRandom=shuffle(sigen3)
      dame_num=0
      for(let i=0;i<sigen3.length-1;i++){
        // console.log('istart')
        // console.log(i)
        for(let j=0;j<sigenRandom3Check[i][0].length;j++){
          // console.log(j)
          // console.log(sigenRandom3Check[i])
          if(sigenArrayRandom[i]==7){
            // console.log('a')
            // console.log(sigenRandom3Check[i][j][0])
            if(sigenArrayRandom[sigenRandom3Check[i][0][j][0]]==7){
              dame_num=1
            }
          }
        }
      }
    }
    return sigenArrayRandom
  }
  let numArrayRandom=func()
  let sigenRandom3=islandGenerate()//マップの資源13
  const func3=()=>{
    let dame_num=1
    let numArrayRandom3=shuffle(numArray3)
    // console.log(numArrayRandom3)
    // console.log('YYYYYYYYYYYYYYYYYYYY')
    while(dame_num!=0){
      dame_num=0
      let check=0
      numArrayRandom3=shuffle(numArray3)
      //マップと資源を関連付けた配列を作る．
      let num13=new Array(13)
      let count=0
      for(let i=0;i<sigen3.length;i++){
        if(sigenRandom3[i]!=6){
          num13[i]=numArrayRandom3[count]
          count=count+1
        }
        else{
          num13[i]=-1
        }
      }
      // console.log(num13)
      for(let i=0;i<sigen3.length-1;i++){
        if(sigenRandom3[i]==7){
          if(num13[i]==8 || num13[i]==6){
            dame_num=1+dame_num
            // console.log('aitu')
            // console.log(i)
          }
        }
        if(sigenRandom3[i]==6){
          check=check+1
        }
        else{
          for(let j=0;j<sigenRandom3Check[i][0].length;j++){
            if(num13[i]==6||num13[i]==8)
              if(num13[sigenRandom3Check[i][0][j][0]]==6||num13[sigenRandom3Check[i][0][j][0]]==8){
                dame_num=1+dame_num
                // console.log('tonari')
                // console.log(i)
            }
          }
        }
      }
      if(sigenRandom3[12]==7){
        if(num13[12]==6||num13[12]==8){
          dame_num=1+dame_num
          // console.log('saigo')
        }
      }
      // alert('jijiji')
      // alert(dame_num)
      // dame_num=0
      
    }
    return numArrayRandom3
  }

    // let numArrayRandom3=func3()
let numArrayRandom3=func3()
// let numArrayRandom3=func3()
  const [loop,setLoop]=useState(0)
  useEffect(()=>{
    let numArrayRandom3=func3()
  },[loop])
  const [landView,setLandView]=useState(0)
  const [seaView,setSeaView]=useState(0)

  // const sigenRandom3=shuffle(sigen3)
  // console.log(sigenRandm3)
  let tobasu11=0
  let tobasu12=0
  let tobasu3=0
  return (
    <>
    <Button variant='contained' onClick={()=>setLandView((prev)=>prev*(-1)+1)}>陸カタン表示</Button>
    <Button variant='contained' onClick={()=>setSeaView((prev)=>prev*(-1)+1)}>海カタン表示</Button>

    <Button variant="contained" onClick={()=>setLoop((prev)=>prev+1)}>数字だけ変更</Button>
    <h1 style={{fontSize:imageSize/6}}>{'資源と色の組み合わせ'}</h1>
    {/* <div>
      <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>レンガBrick</h2>
      <img src={img1png} width={imageLabelSize}></img>

      <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>木Lumber</h2>
    <img src={img2png}width={imageLabelSize}></img>
    <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>鉄Ore</h2>
      <img src={img3png}width={imageLabelSize}></img>
 

      <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>麦Grain</h2>

      <img src={img4png}width={imageLabelSize}></img>
      <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>羊Wool</h2>


      <img src={img5png}width={imageLabelSize}></img>
      <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>砂漠Nothing</h2>

  <img src={img6png}width={imageLabelSize}></img>
  <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>海Sea</h2>

  <img src={img7png}width={imageLabelSize}></img>
  <h2 style={{fontSize:100 , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>砂金Gold</h2>

  <img src={img8png}width={imageLabelSize}></img>
    </div> */}
    <div style={{inlineSize:imageLabelSize*8}}>
      <img src={img1png} width={imageLabelSize}></img>
    <img src={img2png}width={imageLabelSize}></img>
      <img src={img3png}width={imageLabelSize}></img>
      <img src={img4png}width={imageLabelSize}></img>
      <img src={img5png}width={imageLabelSize}></img>
  <img src={img6png}width={imageLabelSize}></img>
  <img src={img7png}width={imageLabelSize}></img>
<img src={img8png}width={imageLabelSize}></img>


    </div>
    <div style={{inlineSize:imageLabelSize*8}}>
    <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>レンガBrick</h2>

    <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>木Lumber</h2>

    <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>鉄Ore</h2>

    <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>麦Grain</h2>

    <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>羊Wool</h2>

    <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>砂漠Nothing</h2>

  <h2 style={{fontSize:imageLabelFontSize , inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>海Sea</h2>

    <h2 style={{fontSize:imageLabelFontSize, inlineSize:imageLabelSize,wordBreak:'break-all',display:'inline-flex'}}>砂金Gold</h2>
    </div>
    {/* <div>

      <img src={img1png} width={imageLabelSize}></img>
<img src={img2png}width={imageLabelSize}></img>
<img src={img3png}width={imageLabelSize}></img>
<img src={img4png}width={imageLabelSize}></img>
<img src={img5png}width={imageLabelSize}></img>
<img src={img6png}width={imageLabelSize}></img>
<img src={img7png}width={imageLabelSize}></img>
<img src={img8png}width={imageLabelSize}></img>
    </div> */}
    <div>{landView}</div>
    {(()=>{if (landView==1) return <><h1 style={{fontSize:imageSize/6}}>陸カタン</h1>
<svg width={imageSize*5} height={imageSize*5}>
{sigenRandom.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate[index][0]}y={sigenCoordinate[index][1]}width={imageSize} height={imageSize}/>

{(()=>{if(sigen!=5) {if(numArrayRandom[index+tobasu11]==6 || numArrayRandom[index+tobasu11]==8){ return (<text x={Number(sigenCoordinate[index][0])}y={Number(sigenCoordinate[index][1])+imageSize*0.9}style={{fill:'red',fontSize:imageSize}}  >{numArrayRandom[index+tobasu11]}</text>)}else{{ return (<text x={Number(sigenCoordinate[index][0])}y={Number(sigenCoordinate[index][1])+imageSize*0.9}style={{fill:'black',fontSize:imageSize}} >{numArrayRandom[index+tobasu11]}</text>)}}} else{tobasu11=-1}})()}
{ <rect x={sigenCoordinate[index][0]}y={sigenCoordinate[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}
</svg></> })()}
{(()=>{if (seaView==1)return <>
  <h1 style={{fontSize:imageSize/6}}>海カタン</h1>
  <svg width={imageSize*8} height={imageSize*7}>

  {sigenRandom.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate1[index][0]}y={sigenCoordinate1[index][1]}width={imageSize} height={imageSize}/>
  {(()=>{if(sigen!=5) {if(numArrayRandom[index+tobasu12]==6 || numArrayRandom[index+tobasu12]==8){ return (<text x={Number(sigenCoordinate1[index][0])}y={Number(sigenCoordinate1[index][1])+imageSize*0.9}style={{fill:'red',fontSize:imageSize}} >{numArrayRandom[index+tobasu12]}</text>)}else{{ return (<text x={Number(sigenCoordinate1[index][0])}y={Number(sigenCoordinate1[index][1])+imageSize*0.9}style={{fill:'black',fontSize:imageSize}} >{numArrayRandom[index+tobasu12]}</text>)}}} else{tobasu12=-1}})()}
  { <rect x={sigenCoordinate1[index][0]}y={sigenCoordinate1[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}
{sigenRandom2.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate2[index][0]}y={sigenCoordinate2[index][1]}width={imageSize} height={imageSize}/>
{ <rect x={sigenCoordinate2[index][0]}y={sigenCoordinate2[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}
{sigenRandom3.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate3[index][0]}y={sigenCoordinate3[index][1]}width={imageSize} height={imageSize}/>
{(()=>{if(sigen!=6) {if(numArrayRandom3[index+tobasu3]==6 || numArrayRandom3[index+tobasu3]==8){ return (<text x={Number(sigenCoordinate3[index][0])}y={Number(sigenCoordinate3[index][1])+imageSize*0.9}style={{fill:'red',fontSize:imageSize}} >{numArrayRandom3[index+tobasu3]}</text>)}else{{ return (<text x={Number(sigenCoordinate3[index][0])}y={Number(sigenCoordinate3[index][1])+imageSize*0.9}style={{fill:'black',fontSize:imageSize}} >{numArrayRandom3[index+tobasu3]}</text>)}}} else{tobasu3=-1+tobasu3}})()}
{ <rect x={sigenCoordinate3[index][0]}y={sigenCoordinate3[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}

</svg>
</>})()}
    {/* <h1 style={{fontSize:imageSize/6}}>陸カタン</h1>


        <svg width={imageSize*5} height={imageSize*5}>

  {sigenRandom.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate[index][0]}y={sigenCoordinate[index][1]}width={imageSize} height={imageSize}/>

  {(()=>{if(sigen!=5) {if(numArrayRandom[index+tobasu11]==6 || numArrayRandom[index+tobasu11]==8){ return (<text x={Number(sigenCoordinate[index][0])}y={Number(sigenCoordinate[index][1])+imageSize*0.9}style={{fill:'red',fontSize:imageSize}}  >{numArrayRandom[index+tobasu11]}</text>)}else{{ return (<text x={Number(sigenCoordinate[index][0])}y={Number(sigenCoordinate[index][1])+imageSize*0.9}style={{fill:'black',fontSize:imageSize}} >{numArrayRandom[index+tobasu11]}</text>)}}} else{tobasu11=-1}})()}
{ <rect x={sigenCoordinate[index][0]}y={sigenCoordinate[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
  </>})}
  </svg> */}
  {/* <h1 style={{fontSize:imageSize/6}}>海カタン</h1>
  <svg width={imageSize*8} height={imageSize*7}>

  {sigenRandom.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate1[index][0]}y={sigenCoordinate1[index][1]}width={imageSize} height={imageSize}/>
  {(()=>{if(sigen!=5) {if(numArrayRandom[index+tobasu12]==6 || numArrayRandom[index+tobasu12]==8){ return (<text x={Number(sigenCoordinate1[index][0])}y={Number(sigenCoordinate1[index][1])+imageSize*0.9}style={{fill:'red',fontSize:imageSize}} >{numArrayRandom[index+tobasu12]}</text>)}else{{ return (<text x={Number(sigenCoordinate1[index][0])}y={Number(sigenCoordinate1[index][1])+imageSize*0.9}style={{fill:'black',fontSize:imageSize}} >{numArrayRandom[index+tobasu12]}</text>)}}} else{tobasu12=-1}})()}
  { <rect x={sigenCoordinate1[index][0]}y={sigenCoordinate1[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}
{sigenRandom2.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate2[index][0]}y={sigenCoordinate2[index][1]}width={imageSize} height={imageSize}/>
{ <rect x={sigenCoordinate2[index][0]}y={sigenCoordinate2[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}
{sigenRandom3.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate3[index][0]}y={sigenCoordinate3[index][1]}width={imageSize} height={imageSize}/>
{(()=>{if(sigen!=6) {if(numArrayRandom3[index+tobasu3]==6 || numArrayRandom3[index+tobasu3]==8){ return (<text x={Number(sigenCoordinate3[index][0])}y={Number(sigenCoordinate3[index][1])+imageSize*0.9}style={{fill:'red',fontSize:imageSize}} >{numArrayRandom3[index+tobasu3]}</text>)}else{{ return (<text x={Number(sigenCoordinate3[index][0])}y={Number(sigenCoordinate3[index][1])+imageSize*0.9}style={{fill:'black',fontSize:imageSize}} >{numArrayRandom3[index+tobasu3]}</text>)}}} else{tobasu3=-1+tobasu3}})()}
{ <rect x={sigenCoordinate3[index][0]}y={sigenCoordinate3[index][1]}width={imageSize} height={imageSize}fill='none' stroke="black" stroke-width={strokeWidth}/>}
</>})}

</svg> */}
    </>
  );
}

