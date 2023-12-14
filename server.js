const http = require ('node:http');
http.createServer((req,res)=>{
    res.writeHead (200,{'Content-Type': 'text/plain'});
    const now = new Date().getHours();
    const momentOfDay = now >5 && now< 12? 1: now>= 12&& now < 20? 2:3;
    let message = "";
    switch (momentOfDay){
        case 1 :
            message = "Buen día!";
            break;
        case 2 :
            message = "Buenas tardes!";
            break;
        case 3 :
            message = "Buenas noches!";
            break;         
        default:
            message= "No te daludo"    
    }
    res.end (message);
        
}).listen(3000);
console.log('Servidor corriendo en http://localhost:3000');