<template>
    <div class="relative flex min-h-screen">
        <!-- sidebar -->
        <!-- <div class="bg-cyan-600 text-cyan-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
            :class=" showSidebar ? 'relative translate-x-0': '' "> -->
        <div class="bg-cyan-600 text-cyan-100 w-64 space-y-6 px-2 py-4 inset-y-0 left-0 md:relative md:translate-x-0 transform transition duration-200 ease-in-out"
            v-if="showSidebar">
            <a href="" class="flex items-center space-x-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <span class="text-2xl font-extrabold text-white">CWMS</span>
            </a>

            <nav>
                <div v-for="item in navigation" @click="clickOnMenu(item.to)" :key="item.name" >
                    <a :to="item.to" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded" active-class="bg-gray-900 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span class="text-white">{{ item.name }}</span>
                    </a>
                </div>
            </nav>
        </div>

        <!-- main content -->
        <div class="flex-1">
            <!-- header -->
            <div class="bg-white shadow px-2 py-4 flex justify-between">
                <div>
                    <button class="text-cyan-600 font-extrabold" @click="showSidebar = !showSidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>

                <div class="py-2">
                    <h1 class="font-bold text-gray-900">{{ title }}</h1>
                    <slot name="header"></slot>
                </div>

                <div class="flex items-center">
                    <!-- Profile dropdown -->
                    <Menu as="div" class="mr-3 relative">
                        <div>
                        <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">Open user menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                            <MenuItem v-for="item in userNavigation" @click="clickOnProfile(item.to)" :key="item.name" v-slot="{ active }">
                            <a :to="item.to" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                            </MenuItem>
                        </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>

            <!-- content -->
            <div class="p-8 text-cyan-700 font-extrabold">
                <div class="py-2">
                    <h1 class="font-bold text-gray-900">{{ title }}</h1>
                    <slot name="header"></slot>
                </div>
                <main>
                    <div>
                        <!-- Replace with your content -->
                        <div class="px-4 py-6">
                            <slot></slot>
                        </div>
                        <!-- /End replace -->
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    title: String,
})

const navigation = [
  { name: 'Dashboard', to: { name: 'Dashboard' }},
  { name: 'User', to: { name: 'User' }},
  { name: 'Organization', to: { name: 'Organization' }}
]

const userNavigation = [
  { name: 'Your Profile', to: { name: 'Profile' }},
  { name: 'Sign out', to: { name: 'Signout' }},
]

function clickOnMenu(to) {
    router.push({
        name: to
    })
}

const showSidebar = ref(true)

</script>

<style>

</style>