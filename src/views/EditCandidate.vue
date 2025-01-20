<template>
    <Loading v-if="clickSubmit"></Loading>
    <SideBar></SideBar>



    <div
        class="sm:ml-64 h-screen relative flex flex-col justify-center items-center bg-gray-50 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

    <!-- Back Button -->
    <button @click="goBack"
        class="top-6 left-6 absolute z-50 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm mb-4 flex items-center transition-all duration-300">
        <i class="fa-solid fa-arrow-left mr-2"></i>
        Back
    </button>

        <h1 class="text-4xl font-semibold mb-6 text-center text-blue-700">Edit Candidate</h1>
        <div
            class="mx-auto p-20 w-full flex justify-center items-center gap-20 bg-white dark:bg-gray-800 transform transition-all">

            <form class="w-2/4">
                <div class="flex w-full space-x-10 items-center">
                    <div class="flex-1 space-y-10">
                        <!-- Candidate Name -->
                        <div>
                            <label for="candidateName"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Candidate
                                Name</label>
                            <input v-model="form.name" type="text" id="candidateName" placeholder="Enter candidate name"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.name }" />
                            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                        </div>

                        <!-- Candidate Number -->
                        <div>
                            <label for="candidateNumber"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Candidate
                                Number</label>
                            <input v-model="form.number" type="number" id="candidateNumber"
                                placeholder="Enter candidate number"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.number }" />
                            <p v-if="errors.number" class="text-red-500 text-sm mt-1">{{ errors.number }}</p>
                        </div>

                        <!-- Roll No -->
                        <div>
                            <label for="rollNo"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Roll
                                Number</label>
                            <input v-model="form.rollno" type="text" id="rollNo" placeholder="Enter roll number"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.rollno }" readonly />
                            <p v-if="errors.rollno" class="text-red-500 text-sm mt-1">{{ errors.rollno }}</p>
                        </div>

                        <!-- Gender -->
                        <div>
                            <label for="gender"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Gender</label>
                            <select v-model="form.gender" id="gender"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.gender }">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <p v-if="errors.gender" class="text-red-500 text-sm mt-1">{{ errors.gender }}</p>
                        </div>
                    </div>

                    <div class="flex-1 space-y-10">
                        <!-- Major -->
                        <div>
                            <label for="major"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Major</label>
                            <select v-model="form.major" id="major"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.major }">
                                <option value="">Select Major</option>
                                <option value="Electronic Engineering">Electronic Engineering</option>
                                <option value="Electrical Power Engineering">Electrical Power Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                            </select>
                            <p v-if="errors.major" class="text-red-500 text-sm mt-1">{{ errors.major }}</p>
                        </div>

                        <!-- Year -->
                        <div>
                            <label for="year"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Year</label>
                            <select v-model="form.year" id="year"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.year }">
                                <option value="">Select Year</option>
                                <option value="First">First Year</option>
                                <option value="Second">Second Year</option>
                                <option value="Third">Third Year</option>
                                <option value="Fourth">Fourth Year</option>
                                <option value="Fifth">Fifth Year</option>
                                <option value="Sixth">Sixth Year</option>
                            </select>
                            <p v-if="errors.year" class="text-red-500 text-sm mt-1">{{ errors.year }}</p>
                        </div>

                        <!-- Profile Image Upload -->
                        <div>
                            <label for="profileImage"
                                class="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Profile
                                Image</label>
                            <input type="file" id="profileImage" @change="handleFileUpload"
                                class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                :class="{ 'border-red-500': errors.profileImage }" />
                            <p v-if="errors.profileImage" class="text-red-500 text-sm mt-1">{{ errors.profileImage }}
                            </p>
                        </div>
                    </div>
                </div>
            </form>

            <!-- Candidate Profile -->
            <div class="text-center border-2 w-2/5 p-10 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl">
                <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Candidate Profile</h2>
                <div class="flex items-center justify-center space-y-6 lg:space-x-8 lg:space-y-0">

                    <!-- Profile Image Section -->
                    <div class="flex-none w-36 h-36 mb-8">
                        <img :src="form.profileImage ? profileImageUrl : 'https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png'"
                            alt="Profile Image"
                            class="w-full h-full object-cover border-2 border-blue-500 shadow-xl p-3" />

                        <h3 class="mt-3">Profile Image</h3>
                    </div>

                    <!-- Candidate Info Section -->
                    <div class="flex-1 space-y-4 text-left text-gray-700 dark:text-gray-300">
                        <div class="flex items-center justify-between space-x-4">
                            <p class="font-medium text-xl"><strong>Name :</strong></p>
                            <p class="text-lg text-gray-500 dark:text-gray-400">{{ form.name || 'Not provided' }}</p>
                        </div>
                        <div class="flex items-center justify-between space-x-4">
                            <p class="font-medium text-xl"><strong>Number :</strong></p>
                            <p class="text-lg text-gray-500 dark:text-gray-400">{{ form.number || 'Not provided' }}</p>
                        </div>
                        <div class="flex items-center justify-between space-x-4">
                            <p class="font-medium text-xl"><strong>Roll Number :</strong></p>
                            <p class="text-lg text-gray-500 dark:text-gray-400">{{ form.rollno || 'Not provided' }}</p>
                        </div>
                        <div class="flex items-center justify-between space-x-4">
                            <p class="font-medium text-xl"><strong>Major :</strong></p>
                            <p class="text-lg text-gray-500 dark:text-gray-400">{{ form.major || 'Not provided' }}</p>
                        </div>
                        <div class="flex items-center justify-between space-x-4">
                            <p class="font-medium text-xl"><strong>Year :</strong></p>
                            <p class="text-lg text-gray-500 dark:text-gray-400">{{ form.year || 'Not provided' }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Submit and Reset Buttons -->
        <div class="text-center mt-12 space-x-6">
            <button type="button" @click="resetForm"
                class="px-8 py-4 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 transform hover:scale-105">Reset</button>
            <button type="button" @click="updateCandidate"
                class="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">Update
                Candidate</button>
        </div>

        <p v-if="errors.updateerror" class="text-red-500 text-sm mt-3">{{ errors.updateerror }}</p>
    </div>
</template>

<script>
import Loading from '../components/Loading';
import {
    reactive,
    ref,
    onMounted
} from "vue";
import SideBar from "../components/SideBar";
import {
    db,
    storage
} from '@/firebase/config';
import {
    useRouter,
    useRoute
} from 'vue-router';

export default {
    components: {
        Loading,
        SideBar,
    },
    name: "EditCandidate",
    props: {
        id: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const router = useRouter();
        const route = useRoute();

        const form = reactive({
            name: "",
            number: "",
            rollno: "",
            major: "",
            year: "",
            gender: "",
            profileImage: null,
        });

        const errors = reactive({
            name: null,
            number: null,
            rollno: null,
            major: null,
            year: null,
            gender: null,
            profileImage: null,
            updateerror: null,
        });

        // Function to go back to the previous page
        const goBack = () => {
            router.back(); // Adjust based on your routing logic
        };

        const profileImageUrl = ref("");
        const clickSubmit = ref(false);

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    form.profileImage = reader.result;
                    profileImageUrl.value = reader.result; // This updates the image display immediately
                    errors.profileImage = null; // Clear any previous error if the image is valid
                };
                reader.readAsDataURL(file);
            } else {
                errors.profileImage = "Profile image is required.";
            }
        };

        const resetForm = () => {
            Object.keys(form).forEach((key) => (form[key] = ""));
            Object.keys(errors).forEach((key) => (errors[key] = null));
            form.profileImage = null;
        };

        const validateForm = () => {
            let isValid = true;
            if (!form.name) {
                errors.name = "Candidate Name is required.";
                isValid = false;
            }

            if (!form.number) {
                errors.number = "Candidate Number is required.";
                isValid = false;
            }

            if (!form.rollno) {
                errors.rollno = "Roll Number is required.";
                isValid = false;
            }

            if (!form.gender) {
                errors.gender = "Gender is required.";
                isValid = false;
            }

            if (!form.major) {
                errors.major = "Major is required.";
                isValid = false;
            }

            if (!form.year) {
                errors.year = "Year is required.";
                isValid = false;
            }

            return isValid;
        };

        const fetchCandidate = async () => {
            try {
                const docRef = db.collection("candidates").doc(props.id);
                const doc = await docRef.get();
                if (doc.exists) {
                    const data = doc.data();
                    Object.assign(form, data);
                    profileImageUrl.value = data.profileImage;
                } else {
                    router.push("/Candidates");
                }
            } catch (error) {
                console.error("Error fetching candidate data:", error);
            }
        };

        const updateCandidate = async () => {
            if (validateForm()) {
                clickSubmit.value = true;

                try {
                    await db.collection("candidates").doc(form.rollno).update({
                        name: form.name,
                        number: form.number,
                        rollno: form.rollno,
                        major: form.major,
                        gender: form.gender,
                        year: form.year,
                        profileImage: form.profileImage,
                    });
                    router.push("/Candidates");
                } catch (err) {
                    errors.updateerror = err.message;
                    clickSubmit.value = false;
                }
            }
        };

        onMounted(fetchCandidate);

        return {
            goBack,
            clickSubmit,
            form,
            errors,
            updateCandidate,
            handleFileUpload,
            resetForm,
            profileImageUrl,
        };
    },
};
</script>
