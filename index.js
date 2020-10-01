function addString(previous,current){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(previous+' '+ current);

        },Math.random()*2000)
    })
}

async function add()
{
    let result = await addString('','A');
    result = await addString(result,'B');
    result = await addString(result,'C');
    console.log(result);
    console.log("successfully executed");
}

add();