parallax.js
===============

簡単にスクロールでのパララックスエフェクトをかける事ができます。

##必要な物
jquery(1.9以上)


##サンプル
###html
```html
<div>
	<h1>Sample div</h1>
	<p class="parallax el1" deta-depth="0">sample div</p>
	<p class="parallax el2" deta-depth="2">sample div</p>
	<p class="parallax el3" deta-depth="3">sample div</p>
	<p class="parallax el4" deta-depth="4">sample div</p>
	<p class="parallax el5" deta-depth="5">sample div</p>
</div>
```

###css
```css
.parallax {
	position: relative;
}
.parallax p {
	position: absolute;
}
.parallax .p1 {
	top: 80px;
	left: 20px;
}
.parallax .p2 {
	top: 650px;
	left: 250px;
}
.parallax .p3 {
	top: 1900px;
	left: 80px;
}
.parallax .p4 {
	top: 160px;
	left: 440px;
}
.parallax .p5 {
	top: 200px;
	left: 230px;
}
```

###js
```js
$(function() {
	$('.parallax').parallax();
});
```

エフェクトをかけたい要素をcssでabsoluteにし、ポジションを指定します。
それらの要素に対して、parallaxメソッドを呼んでください。
data-depthの値が大きいほど、スクロールスピードが遅くなります。（奥に設置されているイメージ）