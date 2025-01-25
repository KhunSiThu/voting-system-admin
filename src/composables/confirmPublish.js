import { db } from "@/firebase/config";

const confirmPublish =  (candidate) => {
 let loadConfirm = async () => {
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

        // Close the modal after publishing
        showModal.value = false;
        alert("Result has been published!");
    } catch (error) {
        console.error("Error publishing result: ", error);
        alert("Failed to publish the result. Please try again.");
    }
 }

 return {loadConfirm}
};

export default confirmPublish;