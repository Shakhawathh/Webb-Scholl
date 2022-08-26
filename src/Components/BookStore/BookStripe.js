import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useRole from "../../Hooks/useRole";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import BookStripeForm from "./BookStripeForm";

const BookStripe = ({ bookData }) => {
  const stripePromise = loadStripe(
    "pk_test_51LWltUCPn2JHPi081EFxPygcOJOvtghmISJBIxeobWbHIH1BT7TgPBEQoF6YZ75OqiFMJVXZEbfBGwefP5I2InKr005L3Un3xL"
  );
  const [role] = useRole();
  const [user] = useAuthState(auth);
  return (
    <div class="hero bg-base-300">
      <div class="hero-content flex-col">
        <div class="card flex-shrink-0">
          <div class="card-body lg:w-96 p-5">
            <h1 className="text-xl font-mono uppercase border-b border-gray-500 pb-1 mb-2">
              <i class="fa-solid fa-circle-info"></i> Account Info
            </h1>
            <div className="flex gap-6 justify-items-start">
              <h1>
                <i class="fa-solid fa-id-card-clip"></i> Name:
              </h1>
              <h1 className="text-setart">{user?.displayName}</h1>
            </div>
            <div className="flex gap-6 justify-items-start">
              <h1>
                <i class="fa-solid fa-envelope"></i> Email:
              </h1>
              <h1 className="text-setart">{user?.email}</h1>
            </div>
            <div className="flex gap-6 justify-items-start">
              <h1>
                <i class="fa-solid fa-bookmark"></i> Role:
              </h1>
              <h1 className="text-setart">
                {role === "admin" ? "Admin" : "User"}
              </h1>
            </div>
            <div className="flex gap-6 justify-items-start">
              <h1>
                <i class="fa-solid fa-square-phone"></i> Phone:
              </h1>
              <h1 className="text-setart">
                {user?.Phone ? user?.phone : "----"}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-lg border-b border-gray-500 font-mono mt-4 uppercase">
          Fully secured payment guarantee{" "}
          <i class="fa-solid text-primary fa-credit-card"></i>
        </h1>
        <div class="card rounded-lg flex-shrink-0 w-full border border-neutral bg-base-100">
          <Elements stripe={stripePromise}>
            <BookStripeForm
              totalAmount={bookData?.price}
              orderInfo={bookData}
            ></BookStripeForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default BookStripe;
