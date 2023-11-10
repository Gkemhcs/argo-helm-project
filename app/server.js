const express=require("express")
const app=express()
const client=require("prom-client")
const collectDefaultMetrics=client.collectDefaultMetrics({timeout:5000});
const counter=new client.Counter({name:"user_requests",help:"displays user requests",labelNames:["path"]})
const gauge=new client.Gauge({name:'latency',help:"this displays latency",labelNames:["path"]})
app.get("/",(req,res)=>{
    
    start=new Date()
    counter.inc({path:"/"});
    setTimeout(()=>{
    
        res.send("hello world")
        end=new Date()
        latency=end-start
        console.log(latency)
        gauge.set({path:'/'},latency)  
    },4000)
   
})
app.get("/health",(req,res)=>{
    counter.inc({path:"/health"});
    res.send("healthy")
})
   
app.get("/test",(req,res)=>{
    counter.inc({path:"/test"});
    start=new Date()
    counter.inc({path:"/"});
    setTimeout(()=>{
        res.send("ok")
        end=new Date()
    gauge.set({path:"/test"},end-start)  
      
    },2000)
    
})
app.get("/metrics",async(req,res)=>{
    res.set("Content-Type",client.register.contentType)
    res.end(await client.register.metrics())
})
app.listen(8080,()=>[
    console.log("sevrer started")
])