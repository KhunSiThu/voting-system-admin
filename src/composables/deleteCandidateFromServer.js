import { db } from '@/firebase/config'; // Ensure this imports your Firestore instance correctly.

const deleteCandidateFromServer = async (candidateRollno) => {
    try {
        // Reference to the candidate document in Firestore using the roll number
        const candidateDocRef = db.collection('candidates').doc(candidateRollno);

        // Delete the candidate document
        await candidateDocRef.delete();

        console.log(`Candidate with Rollno: ${candidateRollno} deleted successfully`);
        return true;
    } catch (error) {
        console.error(`Error deleting candidate with Rollno: ${candidateRollno}`, error);
        return false;
    }
};

export default deleteCandidateFromServer;
