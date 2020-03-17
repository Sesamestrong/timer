const timerMaker=()=>{
    let tempTime=new Date();
    const nextTime=name=>{
        const newTime=new Date();
        console.log(name,"took",newTime-tempTime,"ms");
        tempTime=newTime;
    };
    return nextTime;
};
let timer=timerMaker();
module.exports = {timerMaker,timer};
