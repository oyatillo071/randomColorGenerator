import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../../store/userSlice";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

function UserForm() {
  const users = useSelector((state) => state.users);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editUser, setEditUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      dispatch(updateUser({ id: editUser.id, name, email }));
      setEditUser(null);
    } else {
      dispatch(addUser({ id: Date.now(), name, email }));
    }

    setName("");
    setEmail("");
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    if (editUser && editUser.id === id) {
      setEditUser(null);
    }
  };

  return (
    <div
      className={`container mx-auto pt-10  bg-${
        mode === "light" ? "white" : "black"
      } text-${mode === "light" ? "black" : "white"}`}
    >
      {/* Forma */}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center w-full  justify-between p-5 mt-5 gap-5 rounded-md border ${
          mode === "light" ? "bg-white" : "bg-[#2b2b2b]"
        } mx-auto max-w-96`}
      >
        <h1 className="text-2xl font-bold text-center mb-5">User Management</h1>
        <div className="w-full">
          <label className="block">Name:</label>
          <input
            type="text"
            className={`w-full rounded-md px-2 py-1 border ${
              mode === "light" ? "border-black" : "border-white"
            } bg-${mode === "light" ? "white" : "[#2b2b2b]"} text-${
              mode === "light" ? "black" : "white"
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label className="block">Email:</label>
          <input
            type="email"
            className={`w-full rounded-md px-2 py-1 border ${
              mode === "light" ? "border-black" : "border-white"
            } bg-${mode === "light" ? "white" : "[#2b2b2b]"} text-${
              mode === "light" ? "black" : "white"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`rounded-md w-8/12 px-3 py-1 bg-${
            mode == "light" ? "black" : "white"
          }
             text-${mode != "light" ? "black" : "white"}`}
        >
          {editUser ? "Update" : "Add"}
        </button>
        {editUser && (
          <button
            type="button"
            onClick={() => {
              setEditUser(null);
              setName("");
              setEmail("");
            }}
            className="rounded-md w-8/12 px-3 py-1 bg-gray-500 text-white"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Foydalanuvchilar ro'yxati */}
      <div className="mt-10 text-center w-full px-2">
        <h2 className="text-xl font-semibold">Users List:</h2>
        {users.length === 0 ? (
          <p>No users available. Add some users!</p>
        ) : (
          <ul className="mt-5 max-w-[800px] w-full mx-auto">
            {users.map((user) => (
              <li
                key={user.id}
                className={`flex items-center justify-between border p-3 rounded-md mb-3 bg-${
                  mode === "light" ? "white" : "[#2b2b2b]"
                } text-${mode === "light" ? "black" : "white"} border-${
                  mode === "light" ? "black" : "white"
                }`}
              >
                <div className="flex items-center gap-5 flex-wrap">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleEdit(user)}
                  >
                    <Pencil1Icon />
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleDelete(user.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserForm;
