 class setCache{
    constructor(timeout){
        this.timeoutValue=timeout;
        this.mapCache=new Map();
        setTimeout(()=>{                            // clear cache after timeout
            this.mapCache.clear();
        },this.timeoutValue)
    } 
     setCacheValue(key,value){
         try{
         this.mapCache.set(key,value)
         }
         catch(err){

         }
    }
    
     getValue(key){
        try{
        if(this.mapCache.has(key)){
          return this.mapCache.get(key);
        }else{
            return null;
        }

        }catch(err){

        }
    }
 
}

module.exports.setCache =setCache

