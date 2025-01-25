<template>
    <SideBar></SideBar>

    <div v-if="voteResultsWholeKing.length > 0 && voteResultsMajorQueen.length > 0"
        class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <!-- Hero Section -->
        <section class="py-8 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg">
            <h1 class="text-3xl sm:text-5xl font-bold mb-2">Voting Results</h1>
            <p class="text-lg">Explore the results of the voting for King & Queen by category and department.</p>
        </section>

        <!-- Filter Buttons -->
        <section class="py-6 px-4">
            <ul class="flex flex-wrap justify-center gap-4">
                <li>
                    <button @click="filterResult('whole')"
                        class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                        Overall King & Queen
                    </button>
                </li>
                <li>
                    <button @click="filterResult('EC')"
                        class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                        Electronic Engineering
                    </button>
                </li>
                <li>
                    <button @click="filterResult('EP')"
                        class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                        Electrical Power Engineering
                    </button>
                </li>
                <li>
                    <button @click="filterResult('C')"
                        class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                        Civil Engineering
                    </button>
                </li>
                <li>
                    <button @click="filterResult('MECH')"
                        class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                        Mechanical Engineering
                    </button>
                </li>
            </ul>
        </section>

        <!-- Results Display Section -->
        <section class="py-8 px-4">
            <h1 v-if="wholeShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Over All Results</h1>
            <!-- Whole -->
            <div v-if="wholeShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                    <div v-if="king.whole" id="overallKing"
                        class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                                <img :src="king.whole.profileImage" alt="topWholeKingCandidate Name"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">
                                    {{ king.whole.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ king.whole.name }}
                        </h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            king.whole.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{
                            king.whole.major }}</p>
                        <!-- Publish Button -->
                        <button @click="openModal(king.whole, 'wholeKing')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition 'text-blue-400 hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400">
                            <span>Publish</span>
                        </button>
                    </div>

                    <!-- Candidates Table -->
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                                </tr>
                            </thead>
                            <tbody v-if="voteResultsWholeKing">
                                <tr v-for="king in voteResultsWholeKing" :key="king.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="king.profileImage" alt="Candidate Name"
                                            class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount
                                        }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                    <!-- Overall Queen -->
                    <div v-if="queen.whole" id="overallQueen"
                        class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                                <img :src="queen.whole.profileImage" alt="topqueenCandidate Name"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">
                                    {{ queen.whole.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ queen.whole.name }}
                        </h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            queen.whole.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{
                            queen.whole.major }}</p>
                        <!-- Publish Button -->
                        <button @click="openModal(queen.whole,'wholeQueen')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400">
                            <span>Publish</span>
                        </button>
                    </div>
                    <table
                        class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="voteResultsWholeQueen">
                            <tr v-for="queen in voteResultsWholeQueen" :key="queen.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="queen.profileImage" alt="Candidate Name"
                                        class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h1 v-if="ECShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Electronic Engineering Major
                Results</h1>
            <!-- EC -->
            <div v-if="ECShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                    <div v-if="king.EC" id="overallKing"
                        class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                                <img :src="king.EC.profileImage" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">
                                    {{ king.EC.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ king.EC.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            king.EC.voterCount }}</p>
                                                    <!-- Publish Button -->
                        <button @click="openModal(king.EC, 'ECKing')"
                            class="mt-7 w-28 font-bold  hover:text-white border rounded-lg py-2 px-3 transition 'text-blue-400 hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400">
                            <span>Publish</span>
                        </button>

                    </div>

                    <!-- Candidates Table -->
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                                </tr>
                            </thead>
                            <tbody v-if="ECKing">
                                <tr v-for="king in ECKing" :key="king.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="king.profileImage" alt="Candidate Name"
                                            class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount
                                        }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                    <!-- Overall Queen -->
                    <div v-if="queen.EC" id="overallQueen"
                        class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <div class="relative flex flex-col items-center">
                            <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                                <img :src="queen.EC.profileImage" alt="topqueenCandidate Name"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">
                                    {{ queen.EC.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ queen.EC.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            queen.EC.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ queen.EC.major
                            }}</p>
                            <!-- Publish Button -->
                        <button @click="openModal(queen.EC,'ECQueen')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400">
                            <span>Publish</span>
                        </button>
                    </div>
                    <table
                        class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="ECQueen">
                            <tr v-for="queen in ECQueen" :key="queen.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="queen.profileImage" alt="Candidate Name"
                                        class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Add More Cards Dynamically -->
            </div>

            <h1 v-if="EPShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Electrical Power Engineering
                Major Results</h1>
            <!-- EP -->
            <div v-if="EPShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                    <div v-if="king.EP" id="overallKing"
                        class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                                <img :src="king.EP.profileImage" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">
                                    {{ king.EP.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ king.EP.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            king.EP.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ king.EP.major
                            }}</p>

                        <!-- Publish Button -->
                        <button @click="openModal(king.EP,'EPKing')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400">
                            <span>Publish</span>
                        </button>
                    </div>  

                    <!-- Candidates Table -->
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                                </tr>
                            </thead>
                            <tbody v-if="EPKing">
                                <tr v-for="king in EPKing" :key="king.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="king.profileImage" alt="Candidate Name"
                                            class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount
                                        }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                    <!-- Overall Queen -->
                    <div v-if="queen.EP" id="overallQueen"
                        class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <div class="relative flex flex-col items-center">
                            <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                                <img :src="queen.EP.profileImage" alt="topqueenCandidate Name"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">
                                    {{ queen.EP.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ queen.EP.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            queen.EP.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ queen.EP.major
                            }}</p>

                            <!-- Publish Button -->
                        <button @click="openModal(queen.EP,'EPQueen')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400">
                            <span>Publish</span>
                        </button>
                    </div>  
                    <table
                        class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="EPQueen">
                            <tr v-for="queen in EPQueen" :key="queen.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="queen.profileImage" alt="Candidate Name"
                                        class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Add More Cards Dynamically -->
            </div>

            <h1 v-if="CShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Civil Engineering Major
                Results</h1>
            <!-- C -->
            <div v-if="CShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                    <div v-if="king.C" id="overallKing"
                        class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>

                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                                <img :src="king.C.profileImage" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">
                                    {{ king.C.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ king.C.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            king.C.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ king.C.major
                            }}</p>

                             <!-- Publish Button -->
                        <button @click="openModal(king.C,'CQueen')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400">
                            <span>Publish</span>
                        </button>
                    </div> 

                    <!-- Candidates Table -->
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                                </tr>
                            </thead>
                            <tbody v-if="CKing">
                                <tr v-for="king in CKing" :key="king.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="king.profileImage" alt="Candidate Name"
                                            class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount
                                        }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                    <!-- Overall Queen -->
                    <div v-if="queen.C" id="overallQueen"
                        class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                                <img :src="queen.C.profileImage" alt="topqueenCandidate Name"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">
                                    {{ queen.C.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ queen.C.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            queen.C.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{ queen.C.major
                            }}</p>

                            <!-- Publish Button -->
                        <button @click="openModal(queen.C,'CQueen')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400">
                            <span>Publish</span>
                        </button>
                    </div>  
                    <table
                        class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="CQueen">
                            <tr v-for="queen in CQueen" :key="queen.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="queen.profileImage" alt="Candidate Name"
                                        class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Add More Cards Dynamically -->
            </div>

            <h1 v-if="MECHShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Mechanical Engineering
                Major Results</h1>
            <!-- MECH -->
            <div v-if="MECHShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                    <div v-if="king.MECH" id="overallKing"
                        class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                                <img :src="king.MECH.profileImage" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">
                                    {{ king.MECH.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ king.MECH.name }}</h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            king.MECH.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{
                            king.MECH.major }}</p>

                            <!-- Publish Button -->
                        <button @click="openModal(king.MECH,'MECHKing')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400">
                            <span>Publish</span>
                        </button>
                    </div>  

                    <!-- Candidates Table -->
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                                </tr>
                            </thead>
                            <tbody v-if="MECHKing">
                                <tr v-for="king in MECHKing" :key="king.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="king.profileImage" alt="Candidate Name"
                                            class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount
                                        }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                    <!-- Overall Queen -->
                    <div v-if="queen.MECH" id="overallQueen"
                        class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                        <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                                <img :src="queen.MECH.profileImage" alt="topqueenCandidate Name"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">
                                    {{ queen.MECH.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ queen.MECH.name }}
                        </h2>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - {{
                            queen.MECH.voterCount }}</p>
                        <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - {{
                            queen.MECH.major }}</p>

                            <!-- Publish Button -->
                        <button @click="openModal(queen.MECH,'MECHQueen')"
                            class="mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400">
                            <span>Publish</span>
                        </button>
                    </div>  
                    <table
                        class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="MECHQueen">
                            <tr v-for="queen in MECHQueen" :key="queen.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="queen.profileImage" alt="Candidate Name"
                                        class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Add More Cards Dynamically -->
            </div>
        </section>

        <!-- Modal -->
        <div v-if="showModal"
            class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300">
            <div
                class="bg-white rounded-lg p-8 shadow-xl dark:bg-gray-800 dark:text-white w-96 max-w-md transform transition-all duration-300 scale-95 hover:scale-100">

                <!-- Confirmation Message -->
                <p class="text-base text-gray-700 dark:text-gray-300 text-center mb-4">
                    Are you sure you want to publish the results for this candidate? Once published, the result will be
                    visible on the site and cannot be undone.
                </p>

                <!-- Buttons -->
                <div class="flex justify-center gap-4">
                    <!-- Confirm Button -->
                    <button @click="confirmPublish(publishData)"
                        class="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-200 ease-in-out focus:outline-none">
                        Yes, Publish Result
                    </button>
                    <!-- Cancel Button -->
                    <button @click="closeModal"
                        class="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-200 ease-in-out focus:outline-none">
                        No, Cancel
                    </button>
                </div>

                <!-- Info Text -->
                <div class="mt-4 text-center">
                    <p class="text-xs text-gray-500 dark:text-gray-400">If you're sure about the result, you can publish
                        it. Otherwise, you can cancel and make further adjustments.</p>
                </div>
            </div>
        </div>

    </div>

    <Loading v-else></Loading>
</template>

<script>
import Loading from "../components/Loading";
import {
    ref,
    onMounted,
    computed
} from "vue";
import SideBar from "@/components/SideBar.vue";
import getResults from "@/composables/getResults";
import { db } from "@/firebase/config";

export default {
    components: {
        Loading,
        SideBar,
    },

    setup() {
        // Define reactive variables
        const voteResultsWholeKing = ref([]);
        const voteResultsWholeQueen = ref([]);
        const voteResultsMajorKing = ref([]);
        const voteResultsMajorQueen = ref([]);

        const wholeShow = ref(true);
        const ECShow = ref(false);
        const EPShow = ref(false);
        const CShow = ref(false);
        const MECHShow = ref(false);

        const king = ref({
            whole: null,
            EC: null,
            EP: null,
            C: null,
            MECH: null,
        });

        const queen = ref({
            whole: null,
            EC: null,
            EP: null,
            C: null,
            MECH: null,
        });

        // Computed properties for filtered results by major
        const ECKing = computed(() =>
            voteResultsMajorKing.value.filter(
                (king) => king.major === "Electronic Engineering"
            )
        );
        const ECQueen = computed(() =>
            voteResultsMajorQueen.value.filter(
                (queen) => queen.major === "Electronic Engineering"
            )
        );

        const EPKing = computed(() =>
            voteResultsMajorKing.value.filter(
                (king) => king.major === "Electrical Power Engineering"
            )
        );
        const EPQueen = computed(() =>
            voteResultsMajorQueen.value.filter(
                (queen) => queen.major === "Electrical Power Engineering"
            )
        );

        const CKing = computed(() =>
            voteResultsMajorKing.value.filter(
                (king) => king.major === "Civil Engineering"
            )
        );
        const CQueen = computed(() =>
            voteResultsMajorQueen.value.filter(
                (queen) => queen.major === "Civil Engineering"
            )
        );

        const MECHKing = computed(() =>
            voteResultsMajorKing.value.filter(
                (king) => king.major === "Mechanical Engineering"
            )
        );
        const MECHQueen = computed(() =>
            voteResultsMajorQueen.value.filter(
                (queen) => queen.major === "Mechanical Engineering"
            )
        );

        // Real-time fetching using onSnapshot
        const fetchResults = () => {
            // Set up listeners for real-time updates
            getResults("voteWholeKing", (results) => {
                voteResultsWholeKing.value = results;
                updateTopCandidates();
            });

            getResults("voteWholeQueen", (results) => {
                voteResultsWholeQueen.value = results;
                updateTopCandidates();
            });

            getResults("voteMajorKing", (results) => {
                voteResultsMajorKing.value = results;
                updateTopCandidates();
            });

            getResults("voteMajorQueen", (results) => {
                voteResultsMajorQueen.value = results;
                updateTopCandidates();
            });
        };

        const updateTopCandidates = () => {
            // Update top candidates based on sorted voter count
            king.value.whole =
                voteResultsWholeKing.value.length > 0 ?
                    voteResultsWholeKing.value[0] :
                    null;
            queen.value.whole =
                voteResultsWholeQueen.value.length > 0 ?
                    voteResultsWholeQueen.value[0] :
                    null;

            king.value.EC = ECKing.value.length > 0 ? ECKing.value[0] : null;
            queen.value.EC = ECQueen.value.length > 0 ? ECQueen.value[0] : null;

            king.value.EP = EPKing.value.length > 0 ? EPKing.value[0] : null;
            queen.value.EP = EPQueen.value.length > 0 ? EPQueen.value[0] : null;

            king.value.C = CKing.value.length > 0 ? CKing.value[0] : null;
            queen.value.C = CQueen.value.length > 0 ? CQueen.value[0] : null;

            king.value.MECH = MECHKing.value.length > 0 ? MECHKing.value[0] : null;
            queen.value.MECH = MECHQueen.value.length > 0 ? MECHQueen.value[0] : null;
        };

        const filterResult = (filter) => {
            // Reset all filter states
            wholeShow.value = filter === "whole";
            ECShow.value = filter === "EC";
            EPShow.value = filter === "EP";
            CShow.value = filter === "C";
            MECHShow.value = filter === "MECH";
        };

        // Start fetching results on mounted
        onMounted(() => {
            fetchResults();
        });

        const showModal = ref(false);
        const publishData = ref(null);

        const openModal = (candidate, objName) => {

            publishData.value = {
                objName: objName, ...candidate
            };
            showModal.value = true;
        };

        const closeModal = () => {
            showModal.value = false;
        };

        const confirmPublish = async (candidate) => {
            try {
                let eventYear = new Date().getFullYear().toString();  // Ensure it's a string
                // Create the dynamic results data
                const resultsData = {
                    [candidate.objName]: { ...candidate }
                };

                // Make sure the document reference is correctly set up with the event year as a string
                const docRef = await db
                    .collection("results")
                    .doc(eventYear)  // Ensure eventYear is a string
                    .set(resultsData, { merge: true });  // Use 'merge: true' to avoid overwriting the entire document

                // console.log("Document written with ID: ", docRef.id);

                // Close the modal after publishing
                // showModal.value = false;
                alert("Result has been published!");
            } catch (error) {
                console.error("Error publishing result: ", error);
                alert("Failed to publish the result. Please try again.");
            }

            showModal.value = false;
        };




        return {
            voteResultsWholeKing,
            voteResultsWholeQueen,
            voteResultsMajorKing,
            voteResultsMajorQueen,

            ECKing,
            ECQueen,
            EPKing,
            EPQueen,
            CKing,
            CQueen,
            MECHKing,
            MECHQueen,

            filterResult,
            wholeShow,
            ECShow,
            EPShow,
            CShow,
            MECHShow,

            king,
            queen,

            showModal,
            openModal,
            closeModal,
            confirmPublish,
            publishData
        };
    },
};
</script>

<style></style>
