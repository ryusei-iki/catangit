import React from 'react';
import {useState,useEffect,useRef,useMemo} from 'react'
import logo from './logo.svg';
import './App.css';
import img1 from './images/Brick.svg';
import img2 from './images/Lumber.svg';
import img3 from './images/Ore.svg';
import img4 from './images/Grain.svg';
import img5 from './images/Wool.svg';
import img6 from './images/Nothing.svg'
import { dirname } from 'path';
console.log('hei')
const svgList=[img1,img2,img3,img4,img5,img6]
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const sigen_num=[3,4,3,4,4,1]//Brick,Lumber,Ore,Grain,Wool,Nothing
const sigen: number[] = [];
const sigenCoordinate=new Array(19)
const mapNum=[3,4,5,4,5]
// alert(sigenCoordinate)
const imageSize=100
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

const numArray=[2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
const numArrayRandom=shuffle(numArray)
console.log('numArray')
// alert('numarray')
const numArrayRandomMap=new Array(5)
for(let i=0 ;i<6;i++){
  for (let j=0;j<sigen_num[i];j++){
    sigen.push(i)
  }
}
// const sigenRandom=shuffle(sigen)
// count=0
// for(let i=0;i<mapNum.length;i++){
//   for(let j=0;j<mapNum[i];j++){
//     if(j==0){
//       numArrayRandomMap[i]=new Array(mapNum[i])
//     }
//     if(numArrayRandom[count]==5){
//       //pass
//     }
//     else{
//       numArrayRandomMap[i][j]=numArrayRandom[count]
//     }
//     count=count+1
//   }
// }
const sigenRandom=shuffle(sigen)
count=0
for(let i=0;i<mapNum.length;i++){
  for(let j=0;j<mapNum[i];j++){
    if(j==0){
      numArrayRandomMap[i]=new Array(mapNum[i])
    }
    if(numArrayRandom[count]==5){
      //pass
    }
    else{
      numArrayRandomMap[i][j]=numArrayRandom[count]
    }
    count=count+1
  }
}
export const App=()=> {
const [dame,setDame]=useState(0)

  console.log('start')
  useEffect(()=>{
    // alert('effect')
    for(let i=0;i<Math.floor(mapNum.length/2);i++){
    count=0
    console.log(i)
    for(let j=0;j<mapNum[i];j++){
      console.log(j)
      if(numArrayRandomMap[i][j]==6||numArrayRandomMap[i][j]==8){
        // console.log('ddd')
          if(j==mapNum[i]-1){
            if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の左を見る
              console.log(11)
              setDame((prev)=>prev+1)
            }
            if(numArrayRandomMap[i+1][j+1]==6||numArrayRandomMap[i+1][j+1]==8){//下の右を見る
              console.log(22)
              setDame((prev)=>prev+1)

            }
          }
          else{
            if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
              console.log(33)
              setDame((prev)=>prev+1)


            }
            if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の左を見る
              console.log(44)
              setDame((prev)=>prev+1)

            }
            if(numArrayRandomMap[i+1][j+1]==6||numArrayRandomMap[i+1][j+1]==8){//下の右を見る
              console.log(55)
              setDame((prev)=>prev+1)

            }
          }
        }
      }
    }},[])

  let tobasu=0
  return (
    <>
    {/* <div>{dame}</div> */}
    <div>{numArrayRandomMap}</div>
        <svg width={imageSize*5} height={imageSize*5}>
  {sigenRandom.map((sigen,index)=>{return <><image xlinkHref={svgList[sigen]} x={sigenCoordinate[index][0]}y={sigenCoordinate[index][1]}/>

  {(()=>{if(sigen!=5) {if(numArrayRandom[index+tobasu]==6 || numArrayRandom[index+tobasu]==8){ return (<text x={Number(sigenCoordinate[index][0])+imageSize/2}y={Number(sigenCoordinate[index][1])+imageSize/2}style={{fill:'red'}} >{numArrayRandom[index+tobasu]}</text>)}else{{ return (<text x={Number(sigenCoordinate[index][0])+imageSize/2}y={Number(sigenCoordinate[index][1])+imageSize/2}style={{fill:'black'}} >{numArrayRandom[index+tobasu]}</text>)}}} else{tobasu=-1}})()}

  </>})}

  </svg>



    <div>
      レンガBrick
    </div>
    <div>
      木Lumber
    </div>
    <div>
      鉄Ore
    </div>
    <div>
      麦Grain
    </div>
    <div>
      羊Wool
    </div>
<div>
  砂漠Nothing
</div>
<div>
  砂金Gold
</div>
    <div>
      海Sea
    </div>
    </>
  );
}

