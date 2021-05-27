const express = require('express');
const app = express();

app.get('/', (req, res) => { 
  let str=''
  for (let index = 1; index < 50; index++) {
    if(index%2 ===0){
      str += '<p>'+index+' Soy Par!</p>' ;
    }
    else {
      str += '<p>'+index+' Soy Impar! </p>'  ;
    }
  }
  res.send(`${str}`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));