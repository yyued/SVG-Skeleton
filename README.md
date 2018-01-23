<h1 align="center"> SVG-Skeleton </h1>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img alt="Licence" src="https://img.shields.io/badge/license-MIT-green.svg" />
    </a>
    <a href="https://www.npmjs.org/package/svg-skeleton">
        <img alt="NPM" src="https://img.shields.io/badge/npm-v0.2.0-brightgreen.svg" />
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

const Item = (
    <svg width="750" height="170">
        <rect width="750" height="170" x="0" y="0" fill="#fafafa" rx="0" ry="0"/>
        <circle cx="71.5" cy="86.5" r="36.5" fill="#edeff0"/>
        <rect width="106" height="35" x="135" y="50" fill="#edeff0" rx="0" ry="0"/>
        <rect width="196" height="35" x="135" y="90" fill="#edeff0" rx="0" ry="0"/>
    </svg>
);

const Page = ( ( ) => {
    let List = [ ];

    for ( let i = 0; i < 10; i++ ) {
        List.push( ( <Item y={ i == 0 ? 0 : i * ( 170 + 20 ) } /> ) );
    }

    return (
        <svg width="750" height="1334">
            { List }
        </svg>
    );
} )( );

render( Page,  document.body );
```

### Output

<p align="center">
    <img src="./README/iPhone7.png" width="250px">
</p>

## License

[MIT](./LICENSE)
