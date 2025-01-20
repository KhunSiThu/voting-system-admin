<template>
<Loading v-if="clickSubmit"></Loading>
<SideBar></SideBar>

<div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

    <CountDown></CountDown>

    <!-- Card with Soft Shadows -->
    <div class="w-[300px] mx-auto mt-16">
        <h1 class="text-2xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-10">Set Voting End Date</h1>

        <!-- Form Section with Minimalistic Inputs -->
        <form id="votingForm" action="" method="POST" @submit.prevent="setEndDate">
            <div class="mb-10">
                <label for="votingEndDate" class="block text-gray-700 dark:text-gray-400 text-sm font-medium mb-2">Select Voting End
                    Date</label>
                <input type="datetime-local" v-model="endDate" id="votingEndDate" name="votingEndDate" class="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" required>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center">
                <button type="submit" class="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150">
                    Set Voting End Date
                </button>
            </div>
        </form>

        <!-- Error Message -->
        <p v-if="err" class="text-red-500 text-center mt-4">{{ err }}</p>
    </div>

</div>
</template>

<script>
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import CountDown from '../components/CountDown'
import {
    ref
} from 'vue';
import {
    db
} from '@/firebase/config';
import {
    Timestamp
} from 'firebase/firestore';

export default {
    name: 'HomeView',
    components: {
        Loading,
        CountDown,
        SideBar
    },

    setup() {
        let endDate = ref(null);
        let err = ref("");
        const clickSubmit = ref(false);

        let setEndDate = async () => {
            if (!endDate.value) {
                err.value = "Please select a voting end date.";
                return;
            }

            // Check if the selected date is in the future
            const selectedDate = new Date(endDate.value);
            const now = new Date();

            if (selectedDate <= now) {
                err.value = "The voting end date must be in the future.";
                return;
            }

            clickSubmit.value = true

            try {
                await db.collection("admin").doc("deadline").set({
                    deadline: endDate.value
                });
                err.value = ""; // Reset error message
                clickSubmit.value = false;
                endDate.value = null;
            } catch (error) {
                clickSubmit.value = false;
                err.value = error.message;
            }
        }

        return {
            endDate,
            setEndDate,
            err,
            clickSubmit
        };
    }
}
</script>

<style scoped>
/* Optional custom styles */
</style>
