import React, { useState, useContext, useEffect, useId } from "react";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";

import "./View.css";
function View() {
  const [userDetail, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const { userId } = postDetails;
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          {console.log(postDetails)}
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        { userDetail &&
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetail.username}</p>
            <p>{userDetail.phone}</p>
          </div>
        }
      </div>
    </div>
  );
}
export default View;
