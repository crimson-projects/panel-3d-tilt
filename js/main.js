var $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {
	// var sxPos = cx / $panel.width() * 100 - 100;
	// var syPos = cy / $panel.height() * 100 - 100;
	var sxPos = (cx / $body.width()*100 - 50)*2 ;
	var syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.03 * sxPos,
		rotationX: 0.03 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -400",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.03 * sxPos,
		rotationX: 0.03 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -200",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})

initTilt();

console.clear();