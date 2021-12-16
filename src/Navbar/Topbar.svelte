<script lang="ts">
    import Switch from './../FormComponents/Switch.svelte'
    import FaChessPawn from 'svelte-icons/fa/FaChessPawn.svelte'
    import MdBrightnessMedium from 'svelte-icons/md/MdBrightnessMedium.svelte'
    export let dark_mode_on = false; 
</script>

<!-- Top Bar -->
<div class="flex py-4 space-x-3 justify-between items-center">
    <!-- Left Menu -->
    <div class="flex space-x-3 ml-4">
        <!-- Logo -->
        <a href="/" class="w-6 h-6 text-green-500">
            <FaChessPawn/>
        </a>
        <!-- About -->
        <a href="/about" class="text-semibold space-x-3  hover:shadow-sm">About</a>
        
        <!-- Tutorials -->
        <a href="/tutorials" class="text-semibold hover:shadow-sm">Tutorials</a>
    </div>


    <!-- Right Menu with dark mode toggle and languages-->
    <div class="flex space-x-2 px-2">
            <label for="darkModeToggle" class="flex items-center cursor-pointer ">
                <!-- label -->
                <div class="mr-3 w-8 h-8">
                    <MdBrightnessMedium/>
                </div>
                <!-- toggle -->
                <Switch bind:checked={dark_mode_on}/>
              </label>

        <button class="text-gray-800 hover:text-white bg-blue-300 rounded-sm hover:bg-blue-600 px-1">ENG</button>
        <button class="text-gray-800 hover:text-white bg-blue-300 rounded-sm hover:bg-blue-600 px-1">JAP</button>
        <button class="text-gray-800 hover:text-white bg-blue-300 rounded-sm hover:bg-blue-600 px-1">GER</button>
    </div>

    <!-- Mobile Menu Button -->

    <!-- Mobile Menu -->
</div>