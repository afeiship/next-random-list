# next-random-list
> Random a list

## install:
```bash
npm install -S afeiship/next-random-list --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-random-list';
import 'next-random';

const list = nx.randomList(function(){
  return nx.random(1,100)
},5);

// [4,20,11,32,98]
```
