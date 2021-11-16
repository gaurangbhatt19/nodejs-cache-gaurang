const cacheStorage= require('./cache')
const nodeCache=new cacheStorage.setCache(1000)
nodeCache.setCacheValue(1,"1")
console.log(nodeCache.getValue(1))
