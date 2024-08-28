<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-12">
            <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="flex-1">
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-pink-200 transition-colors duration-300">
                                    <i class='bx bx-home-alt mr-2'></i>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <i class='bx bx-chevron-right text-white'></i>
                                    <a href="#" class="ml-1 text-sm font-medium text-white hover:text-pink-200 md:ml-2 transition-colors duration-300">Current Page</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div class="col-span-2"></div>
            </div>
            <div id="cta-content" class="max-w-screen-md mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">
                        Unlock Blockchain Insights in Real-Time
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-light text-white text-lg">
                        Stay ahead of the curve with our cutting-edge blockchain analysis tool. Discover trends, track transactions, and gain valuable insights from the latest blockchain data.
                    </p>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">
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
