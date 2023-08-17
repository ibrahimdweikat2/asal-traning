import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors());


app.get('/',(req,res)=>{
    res.json([{
        id:1,
        name:'ibrahim'
    },
    {
        id:2,
        name:'ibrahimss'
    },
    {
        id:3,
        name:'ibrahim'
    },
    {
        id:4,
        name:'ibrahim'
    },
])
});

app.listen(4000,()=>console.log("app listening on port 4000"));