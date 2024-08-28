<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <div class="flex bg-gradient-to-r from-pink-500 to-purple-600">
        <!-- Sidebar -->
        <div class="w-64 bg-opacity-20 backdrop-filter backdrop-blur-lg bg-pink-200 dark:bg-purple-900 h-screen rounded-r-lg shadow-lg">
            <nav class="mt-10">
                <a href="#" class="flex items-center px-6 py-2 text-white hover:bg-pink-300 hover:bg-opacity-30 rounded-lg transition duration-300">
                    <i class='bx bxs-home mr-3'></i>
                    Home
                </a>
                <a href="#" class="flex items-center px-6 py-2 mt-4 text-white hover:bg-pink-300 hover:bg-opacity-30 rounded-lg transition duration-300">
                    <i class='bx bxs-info-circle mr-3'></i>
                    About
                </a>
                <a href="#" class="flex items-center px-6 py-2 mt-4 text-white hover:bg-pink-300 hover:bg-opacity-30 rounded-lg transition duration-300">
                    <i class='bx bxs-contact mr-3'></i>
                    Contact
                </a>
                <button class="flex items-center px-6 py-2 mt-4 text-white hover:bg-pink-300 hover:bg-opacity-30 rounded-lg shadow-md transition duration-300">
                    <i class='bx bx-message-rounded-dots mr-3'></i>
                    Hey there
                </button>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col items-center justify-center">
            <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                Hello World
            </button>
            <footer id="footer-section" class="flex-1 bg-opacity-20 backdrop-filter backdrop-blur-lg bg-pink-200 dark:bg-purple-900 w-full rounded-lg shadow-lg">
                <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto dark:border-purple-700 lg:my-8">
                    <div id="footer-content" class="text-center">
                        <div class="flex">
                            <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition duration-300">
                                <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                                ChainSight: Blockchain Analytics
                            </a>
                        </div>
                    </div>
                    <div class="flex">
                        <div id="footer-text" class="flex-1 block text-sm text-center text-white">
                            © 2023 ChainSight. Empowering blockchain insights with cutting-edge analytics.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
