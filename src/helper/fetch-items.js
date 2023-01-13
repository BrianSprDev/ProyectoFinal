import { getFirestore, collection, getDocs } from "firebase/firestore";

export const GetItems = async () => {
  const db = getFirestore();
  const collectionRef = collection(db, "items");
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default {
  GetItems,
};
