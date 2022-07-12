<script lang="ts">
	export let coords: any
	export let size: any
</script>

<div class="background-shape-wrapper">
	<div class="background-shape" />
	<div class="circle" />
</div>
<div class="svg-shape-wrapper">
	<svg>
		<circle cx={coords.x} cy={coords.y} r={size} />
	</svg>
</div>

<style lang="postcss">
	.background-shape-wrapper {
		@apply absolute z-0 top-0 left-0 right-0 h-full overflow-hidden;
	}
	.background-shape {
		position: relative;
		left: 0;
		right: 0;
		width: 100%;
		height: 14rem;
		transform: rotate(-4deg) scaleX(1.8) scaleY(3) translateX(10%);
		@apply origin-center;
		/* z-index: -10; */
		opacity: 0.5;
	}

	.svg-shape-wrapper {
		@apply fixed z-50 top-0 left-0 right-0 h-full overflow-hidden pointer-events-none;
		@apply mix-blend-difference hidden;
	}
	@screen md {
		.svg-shape-wrapper {
			@apply block;
		}
	}

	svg {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 0;
	}

	circle {
		@apply fill-yellow;
	}
</style>
