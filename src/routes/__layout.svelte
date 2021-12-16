<script>
	import Topbar from './../Navbar/Topbar.svelte';
	import '../app.css';
	let dark_mode_on = false;
</script>

<!-- Page wrapper -->
<div class="{dark_mode_on === true ? 'dark' : ''}">
	<div class="bg-gray-50 dark:bg-paradiso-900 text-gray-700 dark:text-spanish-white h-screen">
		<!-- Topbar -->
		<Topbar bind:dark_mode_on/>
		
		<!-- Page Content -->
		<div class="mx-5">
			<slot />
		</div>
	</div>
</div>
