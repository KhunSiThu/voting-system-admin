import { db } from "@/firebase/config";
import { ref } from "vue";

let getAllUser = (table) => {
    let users = ref([]);
    let error = ref("");

    let load = async () => {
      try {
        let response = await db.collection(table).get();
        users.value = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }; // Include the document ID
        });
      } catch (err) {
        error.value = err.message;
      }
    };

    return { users, error, load };
};

export default getAllUser;