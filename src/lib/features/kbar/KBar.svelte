<script lang="ts">
	import { fly } from 'svelte/transition'
	import { kbarStore } from './store'

	let kbarBinding: HTMLDivElement
	let previousActiveElement: any

	$: ({ visible } = $kbarStore)

	export function hide(restoreFocus = false) {
		console.log('Hide KBar')
		kbarStore.hide()
		if (restoreFocus) {
			previousActiveElement.focus()
		}
	}
	export function show() {
		console.log('Show KBar')
		kbarStore.setSearch('')
		kbarStore.setCurrentRootAction(null)
		kbarStore.show()
		previousActiveElement = document.activeElement
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (
			(event.ctrlKey && event.key === 'k') ||
			(event.metaKey && event.key === 'k')
		) {
			event.preventDefault()
			if (visible) {
				hide(true)
			} else {
				show()
			}
		}
		if (event.key === 'Escape') {
			if (visible) {
				event.preventDefault()
				hide(true)
			}
		}
	}
	function handleWindowClick(event: any) {
		if (
			visible &&
			kbarBinding &&
			!kbarBinding.contains(event.target) &&
			kbarBinding !== event.target
		) {
			hide()
		} else {
			event.stopPropagation()
		}
	}
</script>

<svelte:window on:keydown={handleWindowKeydown} on:click={handleWindowClick} />

{#if visible}
	<div class="kbar__position-container">
		<div
			role="dialog"
			class={'kbar__dialog-default'}
			bind:this={kbarBinding}
			in:fly={{ y: 200 }}
			out:fly={{ y: 0 }}
		>
			KBar
		</div>
	</div>
{/if}
