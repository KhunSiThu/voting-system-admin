<template>
<SideBar></SideBar>

<div v-if="MECHKing" class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <!-- Hero Section -->
    <section class="py-8 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg">
        <h1 class="text-3xl sm:text-5xl font-bold mb-2">Voting Results</h1>
        <p class="text-lg">Explore the results of the voting for King & Queen by category and department.</p>
    </section>

    <!-- Filter Buttons -->
    <section class="py-6 px-4">
        <ul class="flex flex-wrap justify-center gap-4">
            <li>
                <button @click="filterResult('whole')" class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                    Overall King & Queen
                </button>
            </li>
            <li>
                <button @click="filterResult('EC')" class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                    Electronic Engineering
                </button>
            </li>
            <li>
                <button @click="filterResult('EP')" class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                    Electrical Power Engineering
                </button>
            </li>
            <li>
                <button @click="filterResult('C')" class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
                    Civil Engineering
                </button>
            </li>
            <li>
                <button @click="filterResult('MECH')" class="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 transition">
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

                <div id="overallKing" class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topWholeKingCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>

                <!-- Candidates Table -->
                <div class="overflow-x-auto">
                    <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="voteResultsWholeKing">
                            <tr v-for="king in voteResultsWholeKing" :key="king.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="king.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                <!-- Overall Queen -->
                <div id="overallQueen" class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topqueenCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>
                <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                    <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                        </tr>
                    </thead>
                    <tbody v-if="voteResultsWholeQueen">
                        <tr v-for="queen in voteResultsWholeQueen" :key="queen.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                <img :src="queen.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.name }}</td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.voterCount }}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h1 v-if="ECShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Electronic Engineering Major Results</h1>
        <!-- EC -->
        <div v-if="ECShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
            <!-- Card 1 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                <div id="overallKing" class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topWholeKingCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>

                <!-- Candidates Table -->
                <div class="overflow-x-auto">
                    <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="ECKing">
                            <tr v-for="king in ECKing" :key="king.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="king.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                <!-- Overall Queen -->
                <div id="overallQueen" class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                    <div class="relative flex flex-col items-center">
                        <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topqueenCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>
                <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                    <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                        </tr>
                    </thead>
                    <tbody v-if="ECQueen">
                        <tr v-for="queen in ECQueen" :key="queen.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                <img :src="queen.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
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

        <h1 v-if="EPShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Electrical Power Engineering Major Results</h1>
        <!-- EP -->
        <div v-if="EPShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
            <!-- Card 1 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                <div id="overallKing" class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topWholeKingCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>

                <!-- Candidates Table -->
                <div class="overflow-x-auto">
                    <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="EPKing">
                            <tr v-for="king in EPKing" :key="king.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="king.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                <!-- Overall Queen -->
                <div id="overallQueen" class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                    <div class="relative flex flex-col items-center">
                        <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topqueenCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>
                <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                    <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                        </tr>
                    </thead>
                    <tbody v-if="EPQueen">
                        <tr v-for="queen in EPQueen" :key="queen.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                <img :src="queen.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
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

        <h1 v-if="CShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Civil Engineering Major Results</h1>
        <!-- C -->
        <div v-if="CShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
            <!-- Card 1 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                <div id="overallKing" class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>

                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topWholeKingCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>

                <!-- Candidates Table -->
                <div class="overflow-x-auto">
                    <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="CKing">
                            <tr v-for="king in CKing" :key="king.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="king.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                <!-- Overall Queen -->
                <div id="overallQueen" class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topqueenCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>
                <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                    <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                        </tr>
                    </thead>
                    <tbody v-if="CQueen">
                        <tr v-for="queen in CQueen" :key="queen.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                <img :src="queen.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
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

        <h1 v-if="MECHShow" class="text-center text-4xl font-bold mb-10 text-purple-500">Mechanical Engineering Major Results</h1>
        <!-- MECH -->
        <div v-if="MECHShow" class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-full">
            <!-- Card 1 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                <div id="overallKing" class="flex flex-col m-20 items-center border-blue-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-blue-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-blue-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-blue-500">KING</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-blue-500">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topWholeKingCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-blue-500">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>

                <!-- Candidates Table -->
                <div class="overflow-x-auto">
                    <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                        <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                                <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                            </tr>
                        </thead>
                        <tbody v-if="MECHKing">
                            <tr v-for="king in MECHKing" :key="king.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.number }}
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                    <img :src="king.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
                                </td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.name }}</td>
                                <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ king.voterCount }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">

                <!-- Overall Queen -->
                <div id="overallQueen" class="flex flex-col m-20 items-center border-pink-400 border-2 bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:shadow-pink-400 transition-all duration-500 animate-bounce-on-hover dark:bg-gray-800 dark:border-pink-500 dark:text-white">
                    <h1 class="text-center text-4xl font-bold mb-5 text-pink-500">QUEEN</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border border-pink-400">
                            <img src="https://em-content.zobj.net/source/microsoft/310/question-mark_2753.png" alt="topqueenCandidate Name" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute left-4 bottom-4 md:-bottom-8 items-center text-sm">
                            <span class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3 bg-pink-400">

                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2"></h2>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Total Votes - </p>
                    <p class="w-full text-left font-bold text-gray-700 dark:text-gray-300">Major - </p>
                </div>
                <table class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                    <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Total Votes</th>

                        </tr>
                    </thead>
                    <tbody v-if="MECHQueen">
                        <tr v-for="queen in MECHQueen" :key="queen.id" class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ queen.number }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                <img :src="queen.profileImage" alt="Candidate Name" class="w-16 h-16 mx-auto rounded-full object-cover border border-blue-500">
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
</div>

<Loading v-else></Loading>
</template>

<script>
import Loading from '../components/Loading'
import {
    ref,
    onMounted,
    computed
} from 'vue';
import SideBar from '@/components/SideBar.vue';
import getResults from '@/composables/getResults';

export default {
    components: {
    Loading,
        SideBar
    },

    setup() {

        // Define reactive variables
        const voteResultsWholeKing = ref([]);
        const voteResultsWholeQueen = ref([]);
        const topWholeKingCandidate = ref(null);
        const topWholeQueenCandidate = ref(null);

        const voteResultsMajorKing = ref([]);
        const voteResultsMajorQueen = ref([]);

        const ECKing = ref(null);
        const ECQueen = ref(null);

        const EPKing = ref(null);
        const EPQueen = ref(null);

        const CKing = ref(null);
        const CQueen = ref(null);

        const MECHKing = ref(null);
        const MECHQueen = ref(null);

        const wholeShow = ref(true);
        const ECShow = ref(false);
        const EPShow = ref(false);
        const CShow = ref(false);
        const MECHShow = ref(false);

        // Real-time fetching using onSnapshot
        const fetchResults = () => {
            // Set up listeners for real-time updates
            getResults('voteWholeKing', (results) => {
                voteResultsWholeKing.value = results;
                updateTopCandidates();
            });

            getResults('voteWholeQueen', (results) => {
                voteResultsWholeQueen.value = results;
                updateTopCandidates();
            });

            getResults('voteMajorKing', (results) => {
                voteResultsMajorKing.value = results;
                updateTopCandidates();
            });

            getResults('voteMajorQueen', (results) => {
                voteResultsMajorQueen.value = results;
                updateTopCandidates();
            });
        };

        const updateTopCandidates = () => {
            // Update top candidates for Whole King and Whole Queen
            if (voteResultsWholeKing.value.length > 0) {
                topWholeKingCandidate.value = voteResultsWholeKing.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                topWholeKingCandidate.value = null;
            }

            if (voteResultsWholeQueen.value.length > 0) {
                topWholeQueenCandidate.value = voteResultsWholeQueen.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                topWholeQueenCandidate.value = null;
            }

            // Filter and get top candidates for each major
            const filterECMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Electronic Engineering"));
            const filterECMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Electronic Engineering"));

            const filterEPMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Electrical Power Engineering"));
            const filterEPMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Electrical Power Engineering"));

            const filterCEMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Civil Engineering"));
            const filterCEMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Civil Engineering"));

            const filterMECHMajorKing = computed(() => voteResultsMajorKing.value.filter(king => king.major === "Mechanical Engineering"));
            const filterMECHMajorQueen = computed(() => voteResultsMajorQueen.value.filter(queen => queen.major === "Mechanical Engineering"));

            // Top candidates for each major
            if (filterECMajorKing.value.length > 0) {
                ECKing.value = filterECMajorKing.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                ECKing.value = null;
            }

            if (filterECMajorQueen.value.length > 0) {
                ECQueen.value = filterECMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                ECQueen.value = null;
            }

            if (filterEPMajorKing.value.length > 0) {
                EPKing.value = filterEPMajorKing.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                EPKing.value = null;
            }

            if (filterEPMajorQueen.value.length > 0) {
                EPQueen.value = filterEPMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                EPQueen.value = null;
            }

            if (filterCEMajorKing.value.length > 0) {
                CKing.value = filterCEMajorKing.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                CKing.value = null;
            }

            if (filterCEMajorQueen.value.length > 0) {
                CQueen.value = filterCEMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                CQueen.value = null;
            }

            if (filterMECHMajorKing.value.length > 0) {
                MECHKing.value = filterMECHMajorKing.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                MECHKing.value = null;
            }

            if (filterMECHMajorQueen.value.length > 0) {
                MECHQueen.value = filterMECHMajorQueen.value.sort((a, b) => b.voterCount - a.voterCount);
            } else {
                MECHQueen.value = null;
            }
        };
        const filterResult = (filter) => {
            // Reset all filter states
            wholeShow.value = false;
            ECShow.value = false;
            EPShow.value = false;
            CShow.value = false;
            MECHShow.value = false;

            // Set the active filter
            switch (filter) {
                case "whole":
                    wholeShow.value = true;
                    break;
                case "EC":
                    ECShow.value = true;
                    break;
                case "EP":
                    EPShow.value = true;
                    break;
                case "C":
                    CShow.value = true;
                    break;
                case "MECH":
                    MECHShow.value = true;
                    break;
                default:
                    console.warn(`Unknown filter: ${filter}`);
                    break;
            }
        };

        // Start fetching results on mounted
        onMounted(() => {
            fetchResults();
        });

        return {
            voteResultsWholeKing,
            voteResultsWholeQueen,
            voteResultsMajorKing,
            voteResultsMajorQueen,
            topWholeKingCandidate,
            topWholeQueenCandidate,
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
            MECHShow
        };
    }
};
</script>

<style>

</style>
