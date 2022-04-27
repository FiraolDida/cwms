<template>
  <PageComponent title="User">
    <TableComponent :columnName="columns" :userData="tableData" @addUser="addUser" @updateUser="updateUser"/>

    <UserModalComponent :modalActive="modalStatus">
      <!-- header -->
      <div class="p-5">
        <div class="flex justify-start items-start">
          <h3 class="text-2xl font-semibold">
            User registration
          </h3>
        </div>
      </div>

      <!-- body -->
      <div class="p-6">
        <p>This information will be displayed to the user.</p>
        <form class="mt-5">
          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <label for="organization" class="block text-sm font-medium text-gray-700">Organization</label>
                <select id="organization" name="organization" autocomplete="organization-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Ogranization 1</option>
                  <option>Ogranization 1</option>
                  <option>Ogranization 1</option>
                </select>
            </div>
          </div>
          <div class="p-6 flex justify-end items-center">
            <button type="reset" @click="modalToggle()" class="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition ease-in-out duration-300 leading-snug whitespace-nowrap text-red-500 bg-transparent border border-red-500 hover:bg-red-600 hover:text-white">Cancel</button>
            <button v-show="addButton" type="submit" class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <button v-show="updateButton" type="submit" class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
          </div>
        </form>
      </div>
    </UserModalComponent>
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import TableComponent from '../components/TableComponent.vue';
import UserModalComponent from '../components/UserModalComponent.vue';
import { ref } from 'vue';

const modalStatus = ref(false)
const addButton = ref(false)
const updateButton = ref(false)
const columns = ['Name', 'Title', 'Status', 'Role']

const tableData = [
    {
        name: 'Firaol Dida',
        title: 'Software developer',
        status: 'Active',
        role: 'Admin'
    },
    {
        name: 'Robenus Dejene',
        title: 'Software developer',
        status: 'Inactive',
        role: 'Admin'
    }
]

const modalToggle = () => {
  modalStatus.value = !modalStatus.value
  addButton.value = false
  updateButton.value = false
}


function addUser($event){
  modalStatus.value = true
  addButton.value = true
}

function updateUser($event){
  modalStatus.value = true
  updateButton.value = true
}

</script>

<style>

</style>