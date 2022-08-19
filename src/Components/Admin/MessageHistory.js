import React from "react";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";

const MessageHistory = ({ message, refetch }) => {
    const handleDelete = (id) => {
        (async () => {
          const { data } = await primaryAxios.delete(`/message/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire(`message Is Now Removed`, {
              icon: "success",
              className: "rounded-xl",
            });
            refetch();
          }
        })();
      };
  return (
    <div class="card hover:bg-base-100 bg-base-300 rounded-none p-0">
      <div class="card-body px-2 py-2 flex-row justify-between items-center">
        <div>
        <h2 class="text-lg font-bold">{message?.title}</h2>
        <p>{message?.details}</p>
        </div>
        <button onClick={() => handleDelete(message?._id)} className="btn btn-sm bg-base-300 btn-ghost text-red-500"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  );
};

export default MessageHistory;
