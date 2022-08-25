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
const mapNum=[3,4,5,4,3]
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
// const numArrayRandom=shuffle(numArray)
// console.log('numArray')
// alert('numArrayRandom1')
// alert(numArrayRandom)

// alert('numarray')
// const numArrayRandomMap=new Array(5)
for(let i=0 ;i<6;i++){
  for (let j=0;j<sigen_num[i];j++){
    sigen.push(i)
  }
}
// alert(sigen)
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
// alert(sigenRandom)
// count=0
// let check=0
// for(let i=0;i<mapNum.length;i++){
//   for(let j=0;j<mapNum[i];j++){
//     if(j==0){
//       numArrayRandomMap[i]=new Array(mapNum[i])
//     }
//     if(sigenRandom[count]==5){
//       numArrayRandomMap[i][j]=7
//       check=1
//     }
//     else{
//       numArrayRandomMap[i][j]=numArrayRandom[count-check]
//     }
//     count=count+1
//   }
// }
// alert(numArrayRandomMap)

export const App=()=> {
const [dame,setDame]=useState(0)
let dame_num=1
  // console.log('start')
  const func= ()=>{
    alert('start')
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
      console.log(numArrayRandomMap[i][j])
      if(numArrayRandomMap[i][j]==6||numArrayRandomMap[i][j]==8){//6か8のとき，隣り合わせチェックが必要なとき
        if(i<Math.floor(mapNum.length/2)){//半分より上のとき
          if(j==mapNum[i]-1){//一番右を見ているとき
            //
          }
          else{//一番右以外を見ているとき，隣に数字が有るとき
              if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
                console.log(111)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
          }
          if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の左を見る
            console.log(222)
            // setDame((prev)=>prev+1)
            dame_num=dame_num+1

          }
          if(numArrayRandomMap[i+1][j+1]==6||numArrayRandomMap[i+1][j+1]==8){//下の右を見る
            console.log(333)
            // setDame((prev)=>prev+1)
            dame_num=dame_num+1

          }
        }
        else if(i==mapNum.length-1){//一番下のとき
          if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
            console.log(111)
            // setDame((prev)=>prev+1)
            dame_num=dame_num+1

          }
        }
        else{//半分より下のとき
          if(j==mapNum[i]-1){//一番右を見ているとき
            if(numArrayRandomMap[i+1][j-1]==6||numArrayRandomMap[i+1][j-1]==8){//下の左を見る
              console.log(222)
              // setDame((prev)=>prev+1)
              dame_num=dame_num+1
            }
          }
          else if(j==0){
            if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の右を見る
              console.log(333)
              // setDame((prev)=>prev+1)
              dame_num=dame_num+1
            }
            if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
              console.log(111)
                  // setDame((prev)=>prev+1)
                  dame_num=dame_num+1
                }
          }
          else{
          if(numArrayRandomMap[i][j+1]==6||numArrayRandomMap[i][j+1]==8){ //同列の右を見る
            console.log(111)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
              if(numArrayRandomMap[i+1][j-1]==6||numArrayRandomMap[i+1][j-1]==8){//下の左を見る
                console.log(222)
                // setDame((prev)=>prev+1)
                dame_num=dame_num+1
              }
              if(numArrayRandomMap[i+1][j]==6||numArrayRandomMap[i+1][j]==8){//下の右を見る
                console.log(333)
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
  let numArrayRandom=func()

  let tobasu=0
  return (
    <>
    <div>{dame}</div>
    <div>{numArrayRandom}</div>
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

