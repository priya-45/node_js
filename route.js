const http=require("http")

const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        res.end("it is a home page")
    }else if (req.url=="/about"){
        res.end("it is a about page")
    }else {
        res.end("page not found")
    }
})
server.listen(7890)