'use strict';

/* Напишите функцию `pipe`, композирующую передаваемые в нее аргументы слева
направо. `const pipe = (...fns) => x => ...` А если хоть один из аргументов
окажется не функционального типа, то `pipe` должен выбросить ошибку.
Например, если у нас есть три функции:
```js
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
```
И нам нужно скомпозировать их так `const f = pipe(inc, twice, cube);`
то при вызове `const x = f(5);` нужно ожидать, что `x` примет значение `1728`.
А если мы скомпозируем `const f = pipe(inc, inc);` то при вызове
`const x = f(7);` значение `x` будет `9`. Но если мы передадим не функцию в
`pipe`, например: `const f = pipe(inc, 7, cube);` то, не дожидаясь вызова `f`,
сразу получим ошибку. */


const pipe = (...fns) => x => {
  let res = x;

  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new Error('all arguments will be functions');
    }
    res = fns[i](res);
  }
  return res;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

console.log(f(5));

module.exports = { pipe };
