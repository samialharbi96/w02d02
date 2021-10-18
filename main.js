const addOne = (arr) => {
let res =[ ];
arr.forEach(element => {
    res.push((element + 1)
    )
});
return res 
  };


  const addexclamation = (arr)=> {
    let arr2={};
    arr2.push("!"  + element);
  
  }
     return arr2;

     const addonebymapn =(arr)=>{
       let arr3 =[];
       arr.map((element)=> {
         arr3.push(element+1);
       })
       return att3;
     }


     const addquestion =(arr) =>{
       let res =arr.map((element)=>{
         return element + "?";
       })
       return res;
     }


     const forlooptwotothe =(arr) => {
       let res =arr.map((item, index)=>{
         return Math.pow(2, item);

       })
     return res;
     
      };



const typenum =(arr) =>{
  let arr6 = arr.filer((item, index)=>{
    return typeof item === "number"
  })
  return arr6;
}     




const containsand =(arr)=> {
  let arr7 = arr.filter((item, index)=>{
    return item.includes("and");
  })
  return arr7;
}


const addvaluse = (arr)=>{
  let arr8 =arr.filter((item, index)=>{
    return item % 2;
  })
  return arr8;
}



const addvalues =(arr)=>{
  let arr9 =arr.reduce((acc, item)=>{
    return item + acc;
  })
  return arr9;
}


const countnumberofelements =( arr)=>{
  
  let arr10 = arr.reduce((acc,item, index)=>{


    return index;
  })
  return arr10;
}






