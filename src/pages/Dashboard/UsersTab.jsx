import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMenu } from "react-icons/lu";
import Profile from "../../assets/imgs/womanprofile.jpg";
import { useFixedBar } from "../../Context/Fixcontext";
import { IoSearchOutline } from "react-icons/io5";
import { BellIcon } from "@heroicons/react/24/solid";
import {
  getAllUsers,
  deleteUser,
  resetErrorAndRemoval,
} from "../../redux/actions/AdminActions";
import ConfirmRemovalAlert from "../../components/reusables/ConfirmRemovalAlert";
import { toast } from "react-toastify";
import Fixbars from "../../components/try.fixbar";
const UsersTab = () => {
  const { toggleWidth } = useFixedBar();
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();
  const [userToDelete, setUserToDelete] = useState("");
  const dispatch = useDispatch();

  const { error, loading, userRemoval, userList } = useSelector(
    (state) => state.admin
  );
  const { payload: users = [] } = userList || {};
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(resetErrorAndRemoval());
  }, [userRemoval, dispatch]);
  const openDeleteConfirmBox = (user) => {
    if (userRemoval) {
      toast.success("User has been removed.");
    }
    setUserToDelete(user);
    setIsOpen(true);
  };

  const closeDeleteConfirmBox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="trydashboard_wrapper">
        <Fixbars />
        <main className="Dashboard-contents">
          <nav className="dashNav">
            <div className="icons-in">
              <LuMenu
                cursor={"pointer"}
                onClick={() => {
                  toggleWidth();
                  setIsVisible(true);
                }}
                className="icon"
              />
              {isVisible && (
                <LuMenu
                  cursor={"pointer"}
                  onClick={() => {
                    toggleWidth();
                    setIsVisible(false);
                  }}
                  color="#fff"
                  className="icon3"
                />
              )}
              <form action="#">
                <IoSearchOutline className="icon2" />
                <input type="text" />
              </form>
            </div>
            <span className="profile">
              <BellIcon className="iconss2" />
              <img src={Profile} alt="Woman profile" />
            </span>
          </nav>
          <div style={{ padding: "20px" }}>
            {error && (
              <div
                style={{
                  border: "1px solid red",
                  padding: "10px",
                  color: "red",
                  marginBottom: "20px",
                }}
              >
                <strong>Oops!</strong> {error}
              </div>
            )}
            {loading ? (
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <div
                  className="spinner"
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "5px solid #ccc",
                    borderTopColor: "orange",
                    borderRadius: "50%",
                    animation: "spin 0.65s linear infinite",
                  }}
                ></div>
                <style>{`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
              </div>
            ) : (
              <div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        Name
                      </th>
                      <th
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        Registered
                      </th>
                      <th
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        Admin
                      </th>
                      <th
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        Active Status
                      </th>
                      <th
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {user.name}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {user.email}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {new Date(user.createdAt).toDateString()}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {user.isAdmin === true ? (
                            <span style={{ color: "orange" }}>✔</span>
                          ) : (
                            ""
                          )}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {user.active ? (
                            <span style={{ color: "green" }}>Active</span>
                          ) : (
                            <span style={{ color: "red" }}>Inactive</span>
                          )}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid #ccc",
                              padding: "5px 10px",
                              cursor: "pointer",
                              color: user._id,
                            }}
                            onClick={() => openDeleteConfirmBox(user)}
                          >
                            Remove User
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isOpen && (
                  <ConfirmRemovalAlert
                    isOpen={isOpen}
                    onClose={closeDeleteConfirmBox}
                    cancelRef={cancelRef}
                    itemToDelete={userToDelete}
                    deleteAction={() => dispatch(deleteUser(userToDelete._id))}
                  />
                )}
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
};

export default UsersTab;
