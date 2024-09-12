import React, { useEffect } from "react";
import './algo1.css'
import { memoryPart } from "./buildMem";


let initiMem = memoryPart;
let color = ['#e0aaff','#c77dff','#9d4edd','#7b2cbf','#5a189a','#3c096c','#240046','#10002b'];
let idx = 0;
let code = [];
let EF = 0;

function create(){
    // First fit
    initiMem.forEach(ele=>{
        console.log(`ele of initiMem ${ele}`);
        code.push(ele);
    });
    let inp = document.querySelector('#algo1');
    let value = inp.value;
    inp.value = '';
    let flag = true;
    let check = true;
    let rep = [];
    let IF = -1, bestIdx = -1;

    for(let i = 0;i<code.length;i++){
        if(code[i]==-1){
            rep.push(-1);
            continue;
        }

        if(code[i]>=value && code[i+1] != -1){
            check = false;
            if(code[i]-value > IF){
                IF = parseInt(code[i]-value);
                bestIdx = i;
            }
            flag = false;
        }
    } 
    

    if(flag) EF+=parseInt(value);
    let ef = document.querySelector('.ef');
    ef.innerHTML = EF;
    
    for (let i = 0; i < code.length; i++) {
        if(i == bestIdx){
            rep.push(value);
            rep.push(-1);
            rep.push(code[i]-value);
        }else{
            rep.push(code[i]);
        }   
    }
    
    if(check) return;
    code = rep;
    let insertProcess = document.querySelector('.Process-space');
    let temp = [];
    idx = 0;
    for(let i = 0;i<code.length;i++){
        const div = document.createElement('div');
        div.textContent = code[i];
        if(code[i] == -1) continue;
        if(i<code.length-1 && code[i+1] == -1){
            div.style.backgroundColor = 'rgba(0, 0, 0,0.5)';
        }
        else{
            div.style.backgroundColor = color[(idx++)%(8)];
        } 
        div.style.width = code[i] + 'px';
        div.classList.add('sp');
        temp.push(div);
    }
    
    initiMem = code;
    code = [];
    console.log('here');
    console.log(temp);
    insertProcess.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.innerText = 'Process Allocation';
    insertProcess.appendChild(h3);
    temp.forEach(element => {
        insertProcess.appendChild(element);
    });
}

function memCre(){
    let box = document.querySelector('.try');
    box.innerHTML = '';
    idx = 0;
    memoryPart.forEach(ele=>{
        if(ele != -1){
            let sp = document.createElement('div');
            sp.classList.add('sp');
            sp.style.width = ele + 'px';
            sp.style.backgroundColor = color[(idx++)%8];
            sp.innerText = ele;
            console.log(`this is box ${box}`);
            box.appendChild(sp);
        }
    })
}

const algo4 = () =>{
    useEffect(()=>{
        memCre();
    });
    return (
        <>
            <div className="layer1">
                <div className="layer2">
                    <input type="" placeholder="Enter process size space seprated" className="inputBox" id="algo1"/>
                   <span>
                    <button className="part" onClick={create}>Run Process</button>
                    </span> 
                    <div className="main">
                        <div className="Process-space">
                        </div>  
                        <div className="Memory-space">
                            <h3>Memory partition</h3>
                            <div className="try"></div>

                            <h3>External Fragmentation</h3>
                            <div className="ef">0</div>  
 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default algo4;