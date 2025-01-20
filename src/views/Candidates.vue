<template>
    <SideBar></SideBar>

    <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

        <!-- Candidates Page for Admin Site -->
        <section class="bg-white dark:bg-gray-800 text-center py-10">
            <h1 style="font-size: 2.5rem; margin-bottom: 10px;">Manage Candidates</h1>
            <p style="font-size: 1rem; margin-bottom: 20px;">Add, edit, or remove candidates and view detailed
                information.</p>
        </section>

        <!-- Loading -->
        <div v-if="loading" class="flex items-center justify-center w-full py-20">
            <div role="status">
                <svg aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>


        <!-- Candidate Sections -->
        <section v-else class="py-16 px-5 bg-gray-100 dark:bg-gray-900">
            <!-- Filter and Search Section -->
            <div class="px-5 py-4 mb-5 border-2 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <!-- Add New Candidate Button -->
                <div class="w-full md:w-auto text-center md:text-left">
                    <router-link :to="{ name: 'AddCandidates' }"
                        class="bg-green-500 text-white p-3 rounded text-sm sm:text-base w-full md:w-auto dark:bg-blue-600 dark:text-white">
                        Add New Candidate
                    </router-link>
                </div>
                <!-- Major Filter Dropdown -->
                <div class="w-full md:w-auto flex items-center">
                    <select v-model="selectedMajor"
                        class="px-4 py-2 border border-gray-300 rounded-lg text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="all">All Majors</option>
                        <option v-for="major in uniqueMajors" :key="major" :value="major">
                            {{ major }}
                        </option>
                    </select>
                </div>
                <!-- King/Queen Filter Dropdown -->
                <div class="w-full md:w-auto flex items-center">
                    <select v-model="selectedRole"
                        class="px-4 py-2 border border-gray-300 rounded-lg text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="all">All Roles</option>
                        <option value="king">King</option>
                        <option value="queen">Queen</option>
                    </select>
                </div>
                <!-- Search Input -->
                <div class="w-full md:w-auto flex items-center">
                    <input v-model="searchValue" id="searchInput" placeholder="Search by Name or Number"
                        class="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-80 text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                </div>
            </div>

            <div v-if="error">
                <p class="text-red-500">{{ error }}</p>
            </div>

            <!-- Candidates Table -->
            <div v-else class="overflow-x-auto">
                <table
                    class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                    <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Number</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Profile Image</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Roll No</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Major</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Role</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Year</th>
                            <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="candidate in filterCandidates" :key="candidate.rollno"
                            class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ candidate.number }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                <img :src="candidate.profileImage" alt="Candidate Name"
                                    class="w-16 h-16 mx-auto rounded-full object-cover border"
                                    :class="candidate.gender === 'male' ? 'border-blue-500' : 'border-pink-400'">
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ candidate.name }}</td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ candidate.rollno }}
                            </td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ candidate.major }}</td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ candidate.gender ===
                                'male' ? 'King' : 'Queen' }}</td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">{{ candidate.year }}</td>
                            <td class="px-4 py-2 border border-gray-300 dark:border-gray-600 ">
                                <button
                                    class="bg-blue-500 text-white px-3 py-1 rounded  hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 mr-3">
                                    <router-link v-if="candidate.rollno"
                                        :to="{ name: 'EditCandidate', params: { id: candidate.rollno } }">
                                        <i class="fa-solid fa-user-pen"></i> Edit
                                    </router-link>
                                </button>

                                <button v-if="candidate.rollno" @click="openDeleteModal(candidate.rollno)"
                                    class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"><i
                                        class="fa-regular fa-trash-can"></i> Delete </button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Delete Confirmation Modal -->
        <div v-if="showModal" class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 ">
            <div class="bg-white rounded-lg p-6 w-96 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <h2 class="text-xl font-semibold text-center mb-4">Confirm Deletion</h2>
                <p class="text-center mb-6">Are you sure you want to delete this candidate?</p>
                <div class="flex justify-between">
                    <button @click="closeDeleteModal"
                        class="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">Cancel</button>
                    <button @click="deleteCandidate(selectedRollno)"
                        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import getAllCandidates from '@/composables/getAllCandidates';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';

import {
    computed,
    onMounted,
    ref
} from 'vue';

import deleteCandidateFromServer from '@/composables/deleteCandidateFromServer';

export default {
    name: 'HomeView',
    components: {
        Loading,
        SideBar,
    },
    setup() {
        const searchValue = ref("");
        const selectedMajor = ref("all");
        const selectedRole = ref("all");

        const loading = ref(true);
        const showModal = ref(false); // State to control the modal visibility
        const selectedRollno = ref(null); // Store the rollno of the candidate to delete

        const {
            candidates,
            error,
            load,
        } = getAllCandidates();

        // Call the load function to fetch candidates
        onMounted(async () => {
            await load();
            loading.value = false; // Set loading to false once data is loaded
        });

        // Get unique majors for the dropdown
        const uniqueMajors = computed(() => {
            const majors = candidates.value.map((candidate) => candidate.major);
            return Array.from(new Set(majors)); // Remove duplicates
        });

        // Filter candidates by search, major, and role
        const filterCandidates = computed(() => {
            const search = searchValue.value.toLowerCase();
            return candidates.value.filter((candidate) => {
                const matchesSearch =
                    candidate.name.toLowerCase().includes(search) ||
                    candidate.number.toString().includes(search) ||
                    candidate.rollno.toString().includes(search);
                const matchesMajor =
                    selectedMajor.value === "all" ||
                    candidate.major.toLowerCase() === selectedMajor.value.toLowerCase();
                const matchesRole =
                    selectedRole.value === "all" ||
                    (selectedRole.value === "king" && candidate.gender === "male") ||
                    (selectedRole.value === "queen" && candidate.gender === "female");
                return matchesSearch && matchesMajor && matchesRole;
            });
        });

        // Function to open the delete confirmation modal
        const openDeleteModal = (rollno) => {
            selectedRollno.value = rollno;
            showModal.value = true;
        };

        // Function to close the delete confirmation modal
        const closeDeleteModal = () => {
            showModal.value = false;
        };

        // Function to confirm deletion
        const deleteCandidate = async (rollno) => {
            try {
                // Delete candidate from the server (Firebase Firestore)
                await deleteCandidateFromServer(rollno);

                // Remove candidate from the local list (candidates)
                const index = candidates.value.findIndex(c => c.rollno === rollno);
                if (index !== -1) {
                    candidates.value.splice(index, 1); // Remove the candidate from the local list
                }

                console.log(`Candidate with Rollno: ${rollno} deleted successfully`);
                closeDeleteModal(); // Close the modal after deletion
            } catch (error) {
                console.error("Failed to delete candidate:", error);
            }
        };

        return {
            filterCandidates,
            uniqueMajors,
            selectedMajor,
            selectedRole,
            error,
            searchValue,
            loading,
            openDeleteModal,
            closeDeleteModal,
            deleteCandidate,
            showModal,
            selectedRollno,
        };
    },
};
</script>
