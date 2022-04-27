<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <!-- search and add user -->
        <div class="p-4 flex justify-between">
            <div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
                </div>
            </div>
            <div class="mt-1">
                <button type="button" @click="addUser()" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add User
                </button>
            </div>
        </div>

        <!-- table -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

            <!-- table head -->
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>

                    <!-- dynamic table column -->
                    <th v-for="column in columnName" :key="column" @click="sortByColumn(column)" class="px-6 py-3" scope="col">
                        {{ column }}
                    </th>

                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>

            <!-- table body -->
            <tbody>
                <!-- dynamic table body -->
                <tr v-if="userData.length === 0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="lead text-center" :colspan="columnName.length + 1">No data found.</td>
                </tr>

                <tr v-else v-for="data in userData" :key="data.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <!-- <td scope="row" class="px-6 py4"> {{ data['name'] }} </td>
                    <td scope="row" class="px-6 py4"> {{ data['title'] }} </td>
                    <td scope="row" class="px-6 py4"> {{ data['status'] }} </td>
                    <td scope="row" class="px-6 py4"> {{ data['role'] }} </td> -->
                    <td v-for="(user, key) in data" :key="key" scope="row" class="px-6"
                        :class="data['status'] === 'Active' && key === 'status' ? 'inline-flex px-6 mt-4 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full' : 
                        data['status'] === 'Inactive' && key === 'status' ? 'inline-flex px-6 mt-4 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full' : ''">
                        {{ user }}
                    </td>
                    <td class="px-6 py-4 text-left">
                        <button type="button" @click="updateUser()" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    columnName: Array,
    userData: Array 
})

const emit = defineEmits(['addUser', 'updateUser', 'deleteUser'])

function addUser() {
    emit('addUser', true)
}

function updateUser() {
    emit('updateUser', true)
}
</script>

<style>

</style>