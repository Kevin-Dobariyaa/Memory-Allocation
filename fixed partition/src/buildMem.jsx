import React from "react";
import './createMemory.css';

let color = ['#e0aaff','#c77dff','#9d4edd','#7b2cbf','#5a189a','#3c096c','#240046','#10002b']
let idx = 0;
let memoryPart = [];
function getRandomColor() {
    return color[(idx++)%8];
}

let memForExp;
function createComp(){
    let inp = document.querySelector('#inpBox');
    let size = inp.value;
    memoryPart.push(Number(size));
    memoryPart.push(-1);
    inp.value = '';
    let sp = document.createElement('div');
    sp.classList.add('sp');
    sp.style.width = size + 'px';
    sp.style.backgroundColor = getRandomColor();
    sp.innerText = size;
    let box = document.querySelector('.container');
    box.appendChild(sp);
    let mov = document.querySelector('.mov');
    console.log(mov);
    memForExp = mov.innerHTML;
    localStorage.setItem('mmm',mov.innerHTML);
    // console.log(document.querySelector('.mem'));
    // document.querySelector('.mem').appendChild(sp);

    console.log(mov);
}

function dis() {
    // document.querySelector('.another').style.display = 'block';
    // document.querySelector('.build').style.display = 'none';
    // console.log(mov);
    // console.dir(mov);                                                                                                                                        
    // console.log(memoryPart);
    // console.dir(memoryPart);

}

const BuildMem = () => {
    return (
        <>
            <div className="build">
                <h1>Design Memory</h1>
                <input type="number" placeholder="Enter size of memory component" className="inputBox" id="inpBox" />
                <span>
                <button className="part" onClick={createComp}>Create Part</button>
                </span>                                                                                                                                         
    
                <button className="cmp" onClick={dis}>
                    Finish</button>

                <div className="mov">
                    <div className="container"></div>
                </div>
            </div>
        </>
    );
};

export {memoryPart,memForExp};
export default BuildMem;