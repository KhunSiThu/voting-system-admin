<template>
    <div>
        <SideBar />
        <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
            <!-- Page Header -->
            <section class="bg-white dark:bg-gray-800 text-center py-10">
                <h1 class="text-3xl sm:text-4xl font-bold mb-4">Manage Users</h1>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Add, edit, or remove users and view detailed information.
                </p>
            </section>

            <!-- Loading State -->
            <div v-if="isLoading" class="flex items-center justify-center w-full py-20">
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

            <!-- Main Content -->
            <section v-else class="py-8 px-4 sm:px-8 bg-gray-100 dark:bg-gray-900">
                <!-- Menu Buttons -->
                <div class="flex flex-wrap gap-4 mb-8">
                    <button @click="setActiveSection('controlUser')" :class="[
                        'px-6 py-2 rounded-md font-semibold transition-all',
                        activeSection === 'controlUser'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800',
                    ]">
                        Control User
                    </button>
                    <button @click="setActiveSection('allStudents')" :class="[
                        'px-6 py-2 rounded-md font-semibold transition-all',
                        activeSection === 'allStudents'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800',
                    ]">
                        All Students
                    </button>
                    <button @click="setActiveSection('allTeachers')" :class="[
                        'px-6 py-2 rounded-md font-semibold transition-all',
                        activeSection === 'allTeachers'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800',
                    ]">
                        All Teachers
                    </button>
                </div>

                <!-- Sections -->
                <section v-if="activeSection === 'controlUser'"
                    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between space-x-10">
                    <!-- Students Limit Section -->
                    <div class="w-full">
                        <h1 class="text-2xl font-bold mb-4">Students Limit</h1>
                        <div class="overflow-x-auto">
                            <table
                                class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                                <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                    <tr>
                                        <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            Major
                                        </th>
                                        <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            Students Limit
                                        </th>
                                        <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(limit, index) in studentLimits" :key="index"
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            {{ limit.major }}
                                        </td>
                                        <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            {{ limit.limit }}
                                        </td>
                                        <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            <button @click="openEditLimitModal(limit, index)"
                                                class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Generate Teacher ID Section -->
                    <div class="w-full">
                        <div class="flex justify-between items-center mb-4">
                            <h1 class="text-2xl font-bold">Generate Teacher ID</h1>
                            <button @click="generateTeacherModal = true"
                                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                                Generate Now +
                            </button>
                        </div>
                        <div class="overflow-x-auto" v-if="teacherIds">
                            <table
                                class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                                <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                    <tr>
                                        <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            Teacher ID
                                        </th>
                                        <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            User
                                        </th>
                                        <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="teacher in teacherIds" :key="teacher.teacherId"
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            {{ teacher.teacherId }}
                                        </td>
                                        <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            {{ teacher.user }}
                                        </td>
                                        <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                            <button @click="openDeleteTeacherIdModal(teacher.id)"
                                                class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else class="text-center text-gray-500 dark:text-gray-400">
                            No teacher IDs found.
                        </div>
                    </div>
                </section>

                <!-- All Students Section -->
                <section v-if="activeSection === 'allStudents'"
                    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h1 class="text-2xl font-bold mb-4">All Students</h1>
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Profile Image
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Name
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Roll No
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Major
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Year
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="student in students" :key="student.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="student.profileImage" :alt="student.name"
                                            class="w-10 h-10 rounded-full mx-auto" />
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        {{ student.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        {{ student.rollno }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        {{ student.major }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        {{ student.year }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <button
                                            class="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                                            @click="openDeleteModal(student)">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- All Teachers Section -->
                <section v-if="activeSection === 'allTeachers'"
                    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h1 class="text-2xl font-bold mb-4">All Teachers</h1>
                    <div class="overflow-x-auto">
                        <table
                            class="table-auto w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
                            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Profile Image
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Name
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Teacher ID
                                    </th>
                                    <th class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="teacher in teachers" :key="teacher.id"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <img :src="teacher.profileImage" :alt="teacher.name"
                                            class="w-10 h-10 rounded-full mx-auto" />
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        {{ teacher.name }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        {{ teacher.teacherId }}
                                    </td>

                                    <td class="px-4 py-2 border border-gray-300 dark:border-gray-600">
                                        <button
                                            class="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                                            @click="openDeleteTeacherModal(teacher)">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </div>

        <!-- Generate TeacherId Modal -->
        <div v-if="generateTeacherModal"
            class="flex bg-blur overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <button type="button" @click="generateTeacherModal = flase"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure to generate Teacher ID ?
                        </h3>
                        <button type="button" @click="generateTeacherModal = flase"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            No, cancel
                        </button>
                        <button @click="generateTeacherId" type="button"
                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Yes, I'm sure
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Delete Confirmation Modal -->
        <div v-if="isDeleteModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
                <h2 class="text-xl font-bold mb-4">Delete Student</h2>
                <p class="mb-4">Are you sure you want to delete {{ selectedUser.name }}?</p>
                <div class="flex justify-end">
                    <button type="button" @click="closeDeleteModal"
                        class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all mr-2">
                        Cancel
                    </button>
                    <button type="button" @click="confirmDelete"
                        class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                        Delete
                    </button>
                </div>
            </div>
        </div>


        <!-- Delete Confirmation Modal -->
        <div v-if="isDeleteTeacherModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
                <h2 class="text-xl font-bold mb-4">Delete Teacher</h2>
                <p class="mb-4">Are you sure you want to delete {{ selectedUser.name }}?</p>
                <div class="flex justify-end">
                    <button type="button" @click="closeDeleteModal"
                        class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all mr-2">
                        Cancel
                    </button>
                    <button type="button" @click="confirmDeleteTeacher"
                        class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                        Delete
                    </button>
                </div>
            </div>
        </div>

        <!-- Edit Student Limit Modal -->
        <div v-if="isEditLimitModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
                <h2 class="text-xl font-bold mb-4">Edit Student Limit</h2>
                <form @submit.prevent="saveStudentLimit">
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">Major</label>
                        <input v-model="selectedLimit.major" type="text"
                            class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" disabled />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">Students Limit</label>
                        <input v-model="selectedLimit.limit" type="number"
                            class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="closeEditLimitModal"
                            class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all mr-2">
                            Cancel
                        </button>
                        <button type="submit"
                            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                            <div v-if="click" role="status">
                                <svg aria-hidden="true"
                                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                            <span v-else>Save</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Delete Teacher ID Confirmation Modal -->
        <div v-if="isDeleteTeacherIdModalOpen"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
                <h2 class="text-xl font-bold mb-4">Delete Teacher ID</h2>
                <p class="mb-4">Are you sure you want to delete this teacher ID?</p>
                <div class="flex justify-end">
                    <button type="button" @click="closeDeleteTeacherIdModal"
                        class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all mr-2">
                        Cancel
                    </button>
                    <button type="button" @click="confirmDeleteTeacherId"
                        class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import useDeleteTeacherId from "@/composables/deleteTeacherId";
import listenToAllTeacherIds from "@/composables/getAllTeacherId";
import getAllUser from "@/composables/getAllUser";
import getStudentLimit from "@/composables/getStudentLimit";
import { db } from "@/firebase/config";
import { onUnmounted } from "vue";
import { ref, onMounted } from "vue";

export default {
    components: {
        SideBar,
    },
    setup() {
        // Reactive state variables
        const isLoading = ref(true);
        const activeSection = ref("controlUser");
        const students = ref([]);
        const teachers = ref([]);

        const isEditModalOpen = ref(false);
        const isDeleteModalOpen = ref(false);
        const isDeleteTeacherModalOpen = ref(false);
        const isEditLimitModalOpen = ref(false);
        const isDeleteTeacherIdModalOpen = ref(false);
        const selectedUser = ref({});
        const selectedLimit = ref({});
        const selectedTeacherIdIndex = ref(null);

        const generateTeacherModal = ref(false);

        const click = ref(false);

        let { teacherIds } = listenToAllTeacherIds();

        // Initial student limits
        const studentLimits = ref([
            {
                major: "Electronic Engineering",
                limit: 0,
            },
            {
                major: "Electrical Power Engineering",
                limit: 0,
            },
            {
                major: "Civil Engineering",
                limit: 0,
            },
            {
                major: "Mechanical Engineering",
                limit: 0,
            },
        ]);

        // Mapping for major names & Firebase short codes
        const majorMapping = {
            "Electronic Engineering": "EC",
            "Electrical Power Engineering": "EP",
            "Civil Engineering": "CE",
            "Mechanical Engineering": "MECH",
        };

        const saveStudentLimit = async () => {
            click.value = true;
            if (selectedLimit.value.index !== undefined) {
                try {
                    const docRef = db.collection("admin").doc("student-limit");
                    const shortCode = majorMapping[selectedLimit.value.major]; // Get the short code for the major
                    const updateData = {
                        [shortCode]: selectedLimit.value.limit,
                    }; // Prepare the update data

                    // Update the Firebase document
                    await docRef.set(updateData, {
                        merge: true,
                    });

                    // Update the local state
                    studentLimits.value[selectedLimit.value.index].limit =
                        selectedLimit.value.limit;
                    click.value = false;
                    closeEditLimitModal();
                } catch (error) {
                    console.error("Error updating student limit:", error);
                }
            }
        };

        const fetchStudentLimits = async () => {
            try {
                const limits = await getStudentLimit();
                if (limits.value) {
                    studentLimits.value = studentLimits.value.map((student) => {
                        const shortCode = majorMapping[student.major]; // Find matching short code
                        return {
                            ...student,
                            limit: limits.value[shortCode] ?? student.limit, // Update only if found in Firebase
                        };
                    });
                } else {
                    console.warn("No student limits found in Firebase.");
                }
            } catch (error) {
                console.error("Error fetching student limits:", error);
            }
        };

        // Set the active section
        const setActiveSection = (section) => {
            activeSection.value = section;
        };

        // Generate a new teacher ID
        const generateTeacherId = async () => {
            const id = `T${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

            // Set Data to Firebase (teacherId)
            let teacherID = {
                teacherId: id,
                user: false,
            };

            try {
                await db.collection("teacherID").doc().set(teacherID);
                console.log("Teacher ID successfully generated and stored:", id);
            } catch (error) {
                console.error("Error generating and storing teacher ID:", error);
                throw error; // Re-throw the error if you want to handle it elsewhere
            }

            generateTeacherModal.value = false;
        };

        // Open the delete teacher ID modal
        const openDeleteTeacherIdModal = (index) => {
            selectedTeacherIdIndex.value = index;
            isDeleteTeacherIdModalOpen.value = true;
        };

        // Close the delete teacher ID modal
        const closeDeleteTeacherIdModal = () => {
            isDeleteTeacherIdModalOpen.value = false;
        };

        // Confirm deletion
        const confirmDeleteTeacherId = async () => {
            if (selectedTeacherIdIndex.value) {
                await useDeleteTeacherId(selectedTeacherIdIndex.value);
                closeDeleteTeacherIdModal();
            }
        };

        // Open the edit limit modal
        const openEditLimitModal = (limit, index) => {
            selectedLimit.value = {
                ...limit,
                index,
            };
            isEditLimitModalOpen.value = true;
        };

        // Close the edit limit modal
        const closeEditLimitModal = () => {
            isEditLimitModalOpen.value = false;
            resetSelectedLimit();
        };

        // Reset the selected limit
        const resetSelectedLimit = () => {
            selectedLimit.value = {};
        };

        // Save the updated student details
        const saveStudent = () => {
            const index = students.value.findIndex((s) => s.id === selectedUser.value.id);
            if (index !== -1) {
                students.value[index] = {
                    ...selectedUser.value,
                };
            }
            closeEditModal();
        };

        // Open the delete student modal
        const openDeleteModal = (student) => {
            selectedUser.value = {
                ...student,
            };
            isDeleteModalOpen.value = true;
        };

        // Close the delete student modal
        const closeDeleteModal = () => {
            isDeleteModalOpen.value = false;
            isDeleteTeacherModalOpen.value = false;
        };

        const confirmDelete = async () => {
            try {
                // Check if selectedUser and its ID exist
                if (!selectedUser.value || !selectedUser.value.id) {
                    throw new Error("No student selected for deletion.");
                }

                // Reference to the student document in Firestore
                const studentRef = db.collection("students").doc(selectedUser.value.id);

                // Delete the document
                await studentRef.delete();

                // Update the local state to remove the deleted student
                students.value = students.value.filter((s) => s.id !== selectedUser.value.id);

                // Close the delete modal
                closeDeleteModal();

                console.log("Student deleted successfully!");
            } catch (error) {
                console.error("Error deleting student:", error);
            }
        };

        // Open the delete student modal
        const openDeleteTeacherModal = (teacher) => {
            selectedUser.value = {
                ...teacher,
            };
            isDeleteTeacherModalOpen.value = true;
        };


        const confirmDeleteTeacher = async () => {
            try {
                // Check if selectedUser and its ID exist
                if (!selectedUser.value || !selectedUser.value.id) {
                    throw new Error("No teacher selected for deletion.");
                }

                // Reference to the teacher document in Firestore
                const teacherRef = db.collection("teachers").doc(selectedUser.value.id);

                // Delete the document
                await teacherRef.delete();

                // Update the local state to remove the deleted teacher
                teachers.value = teachers.value.filter((s) => s.id !== selectedUser.value.id);

                // Close the delete modal
                closeDeleteModal();

                console.log("teacher deleted successfully!");
            } catch (error) {
                console.error("Error deleting teacher:", error);
            }
        };

        onMounted(async () => {
            try {
                // Fetch student limits
                await fetchStudentLimits();

                // Fetch students
                let {
                    users: studentsData,
                    error: studentsError,
                    load: loadStudents,
                } = getAllUser("students");
                await loadStudents();
                if (studentsError.value) {
                    throw new Error("Failed to fetch students: " + studentsError.value);
                }
                students.value = studentsData.value;

                // Fetch teachers
                let {
                    users: teachersData,
                    error: teachersError,
                    load: loadTeachers,
                } = getAllUser("teachers");
                await loadTeachers();
                if (teachersError.value) {
                    throw new Error("Failed to fetch teachers: " + teachersError.value);
                }
                teachers.value = teachersData.value;

                // Update loading state
                isLoading.value = false;
            } catch (error) {
                console.error("Error during component mount:", error);
                isLoading.value = false;
            }
        });

        // Expose state and methods to the template
        return {
            click,
            isLoading,
            activeSection,
            students,
            teachers,
            studentLimits,
            teacherIds,
            isEditModalOpen,
            isDeleteModalOpen,
            isDeleteTeacherModalOpen,
            isEditLimitModalOpen,
            isDeleteTeacherIdModalOpen,
            selectedUser,
            selectedLimit,
            selectedTeacherIdIndex,
            setActiveSection,
            generateTeacherId,
            openDeleteTeacherIdModal,
            closeDeleteTeacherIdModal,
            confirmDeleteTeacherId,
            openEditLimitModal,
            closeEditLimitModal,
            saveStudentLimit,
            saveStudent,
            openDeleteModal,
            closeDeleteModal,
            confirmDelete,
            openDeleteTeacherModal,
            confirmDeleteTeacher,


            generateTeacherModal,
        };
    },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
