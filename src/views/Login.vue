<template>
    <div class="flex items-center justify-center sm:justify-end sm:pr-10 w-full h-screen bg-[url('/src/assets/images/signin.jpg')] bg-cover">
        <div class="bg-white/50 p-4 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
                <div class="min-h-full flex items-center justify-center py-12 px-4 pt-12 sm:px-6 lg:px-8">
                    <div class="max-w-md w-full space-y-8">
                        <div>
                            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>
                        <form class="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div class="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="email-address">Email address</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required="" placeholder="Email address"
                                    class="mt-2 appearance-none rounded-md relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                            </div>
                            <div class="py-5">
                                <label for="password">Password</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Password"
                                    class="mt-2 appearance-none rounded-md relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                            </div>
                            </div>

                            <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                            </div>
                            </div>

                            <div>
                                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

export default {
}
</script>