<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="flex-1">
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-400 dark:hover:text-white">
                                    <i class='bx bx-home-alt mr-2'></i>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <i class='bx bx-chevron-right text-gray-400'></i>
                                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-purple-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Current Page</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div class="col-span-2"></div>
            </div>
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Unlock Blockchain Insights in Real-Time
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Stay ahead of the curve with our cutting-edge blockchain analysis tool. Discover trends, track transactions, and gain valuable insights from the latest blockchain data.
                    </p>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        Start Analyzing Now
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
