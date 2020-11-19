<template>
  <div class="cssload-preload-juggle">
	<div class="cssload-ball"></div>
	<div class="cssload-ball"></div>
	<div class="cssload-ball"></div>
</div>
</template>

<style scoped>
.cssload-preload-juggle {
	width: 525px;
	height: 525px;
	position: absolute;
	margin-top: -53px;
	left: 45%;
	margin-left: -223px;
}
.cssload-preload-juggle div {
	position: absolute;
	width: 37px;
	height: 37px;
	border-radius: 18.5px;
	background: rgb(36,214,84);
	margin-top: 263px;
	margin-left: 263px;
	animation: cssload-juggle 2.73s linear infinite;
		-o-animation: cssload-juggle 2.73s linear infinite;
		-ms-animation: cssload-juggle 2.73s linear infinite;
		-webkit-animation: cssload-juggle 2.73s linear infinite;
		-moz-animation: cssload-juggle 2.73s linear infinite;
}
.cssload-preload-juggle div:nth-child(1) {
	animation-delay: -0.91s;
		-o-animation-delay: -0.91s;
		-ms-animation-delay: -0.91s;
		-webkit-animation-delay: -0.91s;
		-moz-animation-delay: -0.91s;
}
.cssload-preload-juggle div:nth-child(2) {
	animation-delay: -1.82s;
		-o-animation-delay: -1.82s;
		-ms-animation-delay: -1.82s;
		-webkit-animation-delay: -1.82s;
		-moz-animation-delay: -1.82s;
}



@keyframes cssload-juggle {
	0% {
		transform: translateX(0px) translateY(0px);
	}
	12.5% {
		transform: translateX(48.5px) translateY(-100px) scale(1.1);
		background: rgb(48,177,217);
	}
	25% {
		transform: translateX(96px) translateY(0px);
		animation-timing-function: ease-out;
	}
	37.5% {
		transform: translateX(48.5px) translateY(100px);
	}
	50% {
		transform: translateX(0px) translateY(0px);
	}
	62.5% {
		transform: translateX(-48.5px) translateY(-100px) scale(1.1);
		animation-timing-function: ease-in;
	}
	75% {
		transform: translateX(-96px) translateY(0px);
		animation-timing-function: ease-out;
	}
	87.5% {
		transform: translateX(-48.5px) translateY(100px);
	}
	100% {
		transform: translateX(0px) translateY(0px);
	}
}

@-o-keyframes cssload-juggle {
	0% {
		-o-transform: translateX(0px) translateY(0px);
	}
	12.5% {
		-o-transform: translateX(48.5px) translateY(-100px) scale(1.1);
		background: rgb(48,177,217);
	}
	25% {
		-o-transform: translateX(96px) translateY(0px);
		-o-animation-timing-function: ease-out;
	}
	37.5% {
		-o-transform: translateX(48.5px) translateY(100px);
	}
	50% {
		-o-transform: translateX(0px) translateY(0px);
	}
	62.5% {
		-o-transform: translateX(-48.5px) translateY(-100px) scale(1.1);
		-o-animation-timing-function: ease-in;
	}
	75% {
		-o-transform: translateX(-96px) translateY(0px);
		-o-animation-timing-function: ease-out;
	}
	87.5% {
		-o-transform: translateX(-48.5px) translateY(100px);
	}
	100% {
		-o-transform: translateX(0px) translateY(0px);
	}
}

@-ms-keyframes cssload-juggle {
	0% {
		-ms-transform: translateX(0px) translateY(0px);
	}
	12.5% {
		-ms-transform: translateX(48.5px) translateY(-100px) scale(1.1);
		background: rgb(48,177,217);
	}
	25% {
		-ms-transform: translateX(96px) translateY(0px);
		-ms-animation-timing-function: ease-out;
	}
	37.5% {
		-ms-transform: translateX(48.5px) translateY(100px);
	}
	50% {
		-ms-transform: translateX(0px) translateY(0px);
	}
	62.5% {
		-ms-transform: translateX(-48.5px) translateY(-100px) scale(1.1);
		-ms-animation-timing-function: ease-in;
	}
	75% {
		-ms-transform: translateX(-96px) translateY(0px);
		-ms-animation-timing-function: ease-out;
	}
	87.5% {
		-ms-transform: translateX(-48.5px) translateY(100px);
	}
	100% {
		-ms-transform: translateX(0px) translateY(0px);
	}
}

@-webkit-keyframes cssload-juggle {
	0% {
		-webkit-transform: translateX(0px) translateY(0px);
	}
	12.5% {
		-webkit-transform: translateX(48.5px) translateY(-100px) scale(1.1);
		background: rgb(48,177,217);
	}
	25% {
		-webkit-transform: translateX(96px) translateY(0px);
		-webkit-animation-timing-function: ease-out;
	}
	37.5% {
		-webkit-transform: translateX(48.5px) translateY(100px);
	}
	50% {
		-webkit-transform: translateX(0px) translateY(0px);
	}
	62.5% {
		-webkit-transform: translateX(-48.5px) translateY(-100px) scale(1.1);
		-webkit-animation-timing-function: ease-in;
	}
	75% {
		-webkit-transform: translateX(-96px) translateY(0px);
		-webkit-animation-timing-function: ease-out;
	}
	87.5% {
		-webkit-transform: translateX(-48.5px) translateY(100px);
	}
	100% {
		-webkit-transform: translateX(0px) translateY(0px);
	}
}

@-moz-keyframes cssload-juggle {
	0% {
		-moz-transform: translateX(0px) translateY(0px);
	}
	12.5% {
		-moz-transform: translateX(48.5px) translateY(-100px) scale(1.1);
		background: rgb(48,177,217);
	}
	25% {
		-moz-transform: translateX(96px) translateY(0px);
		-moz-animation-timing-function: ease-out;
	}
	37.5% {
		-moz-transform: translateX(48.5px) translateY(100px);
	}
	50% {
		-moz-transform: translateX(0px) translateY(0px);
	}
	62.5% {
		-moz-transform: translateX(-48.5px) translateY(-100px) scale(1.1);
		-moz-animation-timing-function: ease-in;
	}
	75% {
		-moz-transform: translateX(-96px) translateY(0px);
		-moz-animation-timing-function: ease-out;
	}
	87.5% {
		-moz-transform: translateX(-48.5px) translateY(100px);
	}
	100% {
		-moz-transform: translateX(0px) translateY(0px);
	}
}
</style>