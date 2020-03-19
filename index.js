const timerMaker=()=>{
    let tempTime=new Date();
    const nextTime=process.env.NODE_ENV=="development"?(name=>{
        const newTime=new Date();
        console.log(name,"took",newTime-tempTime,"ms");
        tempTime=newTime;
    }):()=>null;
    return nextTime;
};
let timer=timerMaker();
module.exports = {timerMaker,timer};
