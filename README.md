<h1 align="center"> SVG-Skeleton </h1>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img alt="Licence" src="https://img.shields.io/badge/license-MIT-green.svg" />
    </a>
    <a href="https://www.npmjs.org/package/svg-skeleton">
        <img alt="NPM" src="https://img.shields.io/badge/npm-v0.0.4-brightgreen.svg" />
    </a>
    <a href="">
        <img alt="Size" src="https://img.shields.io/badge/size-2kb-blue.svg" />
    </a>
</p>

## Why

Skeletal screen, we are no stranger to, and the biggest existence of the skeletal screen is due to the page rendering out of content for a long time, and use it to occupy the page, users to reduce the time to perceive white screen.

If the skeletal screen depend on core frameworks such as React / Vue, it will inevitably first need to parse the core library before rendering to the skeletal screen, which is undoubtedly not the best choice.

**SVG-Skeleton** is exactly what we've been looking for.

By SVG elements to describe the placeholder elements of the skeletal diagram, support JSX write SVG indifference, reuse SVG fragments, component-based mode.

[简体中文](./README.zh-CN.md)

## Installing

```sh
npm i svg-skeleton --save
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/svg-skeleton/dist/svg-skeleton.min.js"></script>
```

## Usage

### JSX Code

```js
import SVGSkeleton from 'svg-skeleton';

const { h, render } = SVGSkeleton;

// inside #shining animation
const Item = (
    <svg width="750" height="191">
        <circle cx="95" cy="102" r="63" fill="#edeff0" mask="url(#shining)" />
        <rect width="160" height="35" x="190" y="45" fill="#edeff0" mask="url(#shining)" />
        <rect width="400" height="35" x="190" y="90" fill="#edeff0" mask="url(#shining)" />
        <line x1="0" y1="190" x2="750" y2="190" stroke="#edeff0"></line>
    </svg>
);

const Page = ( ( ) => {
    let List = [ ];

    for ( let i = 0; i < 6; i++ ) {
        List.push( ( <Item y={ i == 0 ? 0 : i * 191 } /> ) );
    }

    return (
        <svg width="750" height="1334" fill="#fafafa">
            { List }
        </svg>
    );
} )( );

render( Page,  document.body );
```

### Output

<p align="center">
    <img src="./README/1.gif" width="250px">
</p>

## Diff

In order to try to position the elements of the bone screen the same as the design draft, you need the Diff function.

### Code

```js
const { diff } = SVGSkeleton;

render( diff( Page, require('./list.png') ),  document.body );
```

### Output

<p align="center">
    <img src="./README/2.gif" width="250px">
</p>

## Depend on [JSX & h](https://www.npmjs.com/package/babel-plugin-transform-react-jsx)

the setting will be similar to

```json
{
    "plugins": [
        [ "transform-react-jsx", { "pragma": "h" } ]
    ]
}
```

## License

[MIT](./LICENSE)
