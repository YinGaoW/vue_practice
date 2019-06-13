const http = require('http')
const urlModel = require('url')

const server = http.createServer()
server.on('request',(req,res) => {
    //const url = req.url
    const {pathname:url,query} = urlModel.parse(req.url,true)
    if(url === '/getScript'){
        let user = {
            name:'wyg',
            age:24,
            sex:'male'
        }
        var scriptStr = `${query.callback}(${JSON.stringify(user)})`
        res.end(scriptStr)
    }
    res.end('404')
})

server.listen(3000,()=>{
    console.log('server listen at http://127.0.0.1:3000');
})