# numeraX
A compiler that compiles basic math notation to renderable TeX code. Just load up the file in your browser. (You first need to have [JSEP](http://jsep.from.so/))

You first need to download it.
- You can download it from the releases
- You can install it via `npm install numerax`

```HTML
<script src="/path/to/jsep.js"></script>
<script src="/path/to/numeraX.js" ></script>
```

And then it's just very simple to use it:

```JavaScript
// compiles to: "\frac{2}{3} + 4"
const awesomeTeX = numeraX.compile("2 / 3 + 4");
```

## How to build?
run:
```
% npm run setup
```

then you can go with
```
% tsc -w
```
To have some fun in watch mode and when you were ready for the heavy use go with:
```
% num run build
```
to have it minified for you...

<br />
<a href="http://www.karyfoundation.org/">
    <img src="http://www.karyfoundation.org/foundation/logo/github-full-horse.png" width="250"/>
</a>