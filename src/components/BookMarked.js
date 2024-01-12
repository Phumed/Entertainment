import { React, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import movieApi from "../api/MovieApi";
import APIKey from "../api/MovieApiKey";
import { addBookMarkedInfo } from "../store/bookMarkedSlice";
import Listing from "./Listing";
import Footer from "./Footer";

function BookMarked() {
  const { bookmarked } = useSelector((state) => state.bookMarked); // from store
  // const { bookMarkedInfo } = useSelector((state) => state.bookMarked); // from store
  console.log(bookmarked);
  // const dispatch = useDispatch();
  // console.log(`bookMarked:`);
  // console.log(bookmarked);
  // console.log(`bookMarkedInfo: `);
  // console.log(bookMarkedInfo);

  // const isAvaliable = () => {
  //   return bookMarkedInfo.some((elements) => elements.imdbID === bookmarked.id);
  // };
  // console.log(`isAvaliable:${isAvaliable}`);
  // useEffect(() => {
  //   if (isAvaliable) {
  //     const fetchBookMarked = async () => {
  //       for (const movie of bookmarked) {
  //         console.log(movie.id);
  //         const res = await movieApi.get(`?apikey=${APIKey}&i=${movie.id}`);

  //         try {
  //           console.log(res.data);
  //           dispatch(addBookMarkedInfo(res.data));
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //     };
  //     fetchBookMarked();
  //   }
  // }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page="bookmarked" />
      <div className="flex-grow-1">
        <h2 className="w-75 mx-auto mt-4 text-center">BookMarked</h2>
        <Listing type="bookMarked" />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default BookMarked;
