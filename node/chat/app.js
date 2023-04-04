const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
    res.send('<form action="/" method="POST"><input type="text" name="username"><br><button type="sumbit">Login</button></form>')
});
app.post('/',(req,res,next)=>{
    localStorage.setItem('username', req.body.username);
    res.send('<form action="/chat" method="POST"><input type="text" name="chat"><br><button type="sumbit">Send</button></form>')
})
    

app.post('/chat',(req,res,next)=>{
    fs.readFile("./chat.txt",(err,data)=>{
        if (err){
            console.log(err);
            const username = localStorage.getItem('username');
            const chat = req.body.chat;
            const content = username+ ' : ' + chat +' ';
            res.send('<form action="/chat" method="POST"><input type="text" name="chat"><br><button type="sumbit">Send</button></form>')
            fs.writeFile("./chat.txt",content,err=>{
                res.send('<form action="/chat" method="POST"><input type="text" name="chat"><button type="sumbit">Send1</button></form>');
            });
        }else{
        let string = data.toString();
        const username = localStorage.getItem('username');
        const chat = req.body.chat;
        const content = username+ ' : ' + chat +' ';
        fs.appendFile("./chat.txt",content,err=>{
            string = string+content;
            res.send(`<h3>${string}</h3><br><form action="/chat" method="POST"><input type="text" name="chat"><br><button type="sumbit">Send</button></form>`)
        });
                
    }})
        
})

app.listen(3000);