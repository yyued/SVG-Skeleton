# APIER.js

基于 [axios](https://github.com/axios/axios) 扩展的网络请求 API 管理模块。

## 依赖

* Promise
* [axios](https://github.com/axios/axios)

## 安装

通过使用 npm 安装

```sh
npm i apierjs --save
```

或者 直接下载 [APIER.min.js](https://github.com/yyued/APIER/blob/master/dist/APIER.min.js) 外链使用

```html
<script src="./APIER.min.js"></script>
```

## 简单使用

```js
import APIER from 'apierjs';

(async () => {
    const API = new APIER({
        test: 'https://legox.org/mock/a3e67a40-863c-11e7-9085-0ba4558c07dc',
    });

    const data = await API.test();
    console.log( data );
})();
```

## 全局配置项

| 参数名 | 描述 | 类型 | 默认值 |
|-|-|-|-|
| method | 请求方式 | String | POST |
| host | 主域 | String | - |
| debug | 是否调试 | Boolean | false |
| isMock | 是否请求模拟接口 | Boolean | false |
| error | 错误回调 | Function | - |
| interceptor | 请求前后拦截器 | Object | - |
| ...... | axios 配置项 | [axios config](https://github.com/axios/axios#request-config) | - |

```js
const url = {
    test: '...',
};

const option = {
    method: 'GET',
};

const API = new APIER( option, url );

await API.test();
```

## 局部配置项

参数 与 全局配置项 相同

**优先级**：局部配置项 > 全局配置项

```js
const API = new APIER({
    test: {
        method: 'GET',
        url: '...',
    }
});

await API.test();
```

## 调用时配置项

参数 与 全局配置项 相同

**优先级**：调用时配置项 > 局部配置项 > 全局配置项

```js
const API = new APIER({
    test: '...',
});

// { id: 1 } 为 data
await API.test({ id: 1 });
await API.test({ method: 'GET' }, { id: 1 });
```

## 模拟接口

```js
const option = {
    isMock: true,
}

const mock = {
    test: '...',
}

const url = {
    test: '...',
}

const API = new APIER( option, mock, url );

await API.test();
```

## 错误回调

```js
const error = ( e, key, option ) => {
    // ...
}

const option = { error };

const url = {
    test: '...',
}

const API = new APIER( option, url );

await API.test();
```

## 前后拦截器

```js
// 支持 Promise 异步拦截
const interceptor = {
    before ( key, option ) {
        return new Promise(( resolve, reject ) => {
            setTimeout(( ) => {
                console.log( '自定义前拦截器' );
                resolve();
            }, 1000);
        })
    },
    after ( key, option, response ) {
        console.log( '自定义后拦截器', key );
    },
}

const option = { interceptor };

const url = {
    test: '...',
}

const API = new APIER( option, url );

await API.test();
```

## 自定义请求方式

```js
const API = new APIER({
    test: {
        method: 'custom',
        url: '...',
    }
})

API.$method('custom', ( data ) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            resolve( data );
        }, 3000);
    });
});

await API.test();
```

## 调试模式

```js
const option = { debug: true };

const url = {
    test: '...',
}

const API = new APIER( option, url );

await API.test();

// 调试模式下，记录请求耗时等信息
console.log( API.$history );
```

## 获取 URL

```js
const API = new APIER( { test: '...' } );

console.log( API.test.getURL() ); // ...
```

## RESTful 请求规范

```js
const API = new APIER( { test: '...' } );

await API.test.GET( [option], data );
await API.test.POST( [option], data );
await API.test.PUT( [option], data );
await API.test.DELETE( [option], data );
```

## 独立请求

在 独立请求 下 全局配置 / 拦截器 / 错误回调 仍有效

```js
const API = new APIER();

await API.$request( url );
await API.$request( url, data );
await API.$request( url, option, data );
```

## 许可

[MIT](./LICENSE)
