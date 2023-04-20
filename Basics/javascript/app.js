const getFile = async filename =>{
    let res = await fetch(filename);
    let text = await res.text();
    return text
}

const data = JSON.parse(getFile('data.json'));
