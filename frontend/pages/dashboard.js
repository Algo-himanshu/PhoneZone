import React from "react";
import UserRoute from "../public/components/routes/UserRoute";
import { userContext } from "../context";
import { useContext, useState } from "react";
import ProfileModal from "../public/components/ProfileModal";
import { useRouter } from "next/router";

function dashboard() {
  const [state] = useContext(userContext);
  const settingsData = [
    { icon: "🛒", title: "Order" },
    { icon: "🔒", title: "Security Offers" },
    { icon: "🏠", title: "Address", route: "/alladdress" },
    { icon: "💳", title: "Payment Option" },
    { icon: "📜", title: "Purchase History" },
    { icon: "⚙️", title: "Settings" },
  ];
  const userProfile = {
    profilePic: "DP.jpeg",
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
  };
  const [showModal, setShowModal] = useState(false);
  const [profilePic, setProfilePic] = useState(userProfile.profilePic);
  const router = useRouter();

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleUpdate = async (file) => {
    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const { data } = await axios.post("/api/updateProfilePic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfilePic(data.profilePic);
      handleClose();
    } catch (err) {
      console.error("Error updating profile picture:", err);
    }
  };

  const handleRemove = async () => {
    try {
      const { data } = await axios.post("/api/removeProfilePic");
      setProfilePic(null);
      handleClose();
    } catch (err) {
      console.error("Error removing profile picture:", err);
    }
  };
  const handleNavigation = (route) => {
    if (route) {
      router.push(route); // Navigate to the given route
    }
  };

  return (
    <div className="bg-white dashboard-contentt">
      <div className="dashboard-content">
        <div className="displayInfo">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="profilePic" onClick={handleClick}>
              <img
                src={userProfile.profilePic || "default-profile.png"}
                alt="Profile"
              />
            </div>
            <ProfileModal
              showModal={showModal}
              onClose={handleClose}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
            <div className="ms-5 d-flex flex-column bd-highlight mb-3">
              <div className="userName">{userProfile.name}</div>
              <div className="email">{userProfile.email}</div>
              <div className="phoneNumber">{userProfile.phoneNumber}</div>
            </div>
          </div>
        </div>
        <div className="settingContainer">
          <div className="headerr">Settings</div>
          <div className="setting">
            {settingsData.map((item, index) => (
              <div
                className="cardd"
                key={index}
                onClick={() => handleNavigation(item.route)}
              >
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;

// <UserRoute>
//       <div className="container color-black"></div>
//     </UserRoute>
