/* packages */
import { useEffect } from "react";
/* hooks */
import { useAppDispatch } from "./useAppDispatch";
/* firebase */
import { storageRef } from "../lib/firebase/firebase";
/* store */
import { setImageUrlData } from "../store/slices/imageUrlDataSlice";

export const useFetchImage = () => {
  try {
    const dispatch = useAppDispatch();

    useEffect(() => {
      const fetchImageFn = async () => {
        const fetchAllImage = await storageRef.listAll();
        const N = Math.floor(Math.random() * fetchAllImage.items.length);
        const imagePath = fetchAllImage.items[N].fullPath;

        const fetchImageUrl = await storageRef.child(imagePath).getDownloadURL();
        dispatch(setImageUrlData(fetchImageUrl));
      };

      fetchImageFn();
    }, []);
  } catch (err: unknown) {
    console.log(err);
  }
};
