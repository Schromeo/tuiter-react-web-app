import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk, getProfileThunk }
from "../services/auth-thunks";
function ProfileScreen() {
    const location = useLocation();
    const sentuser = location.state.user;
    const { currentUser } = useSelector((state) => state.user);
    // console.log("currentUser:", currentUser)
    const [profile, setProfile] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async() => {
        console.log("profile:", profile);
        console.log("currentUser:", currentUser);
        console.log("about to update user:", sentuser.username, firstName, lastName)
        const user = await dispatch(updateUserThunk({ username: sentuser.username, firstName, lastName }));
        console.log("updated user:", user);
        if (user) {
            alert("Profile updated successfully")
        } else {
            alert("Error updating profile");
        }
    };
    useEffect(() => {
        console.log("user is logged in:", currentUser)
        if (currentUser) {
            async function fetchData() {
                await dispatch(getProfileThunk(currentUser.username)).then((user) => {
                    console.log("user from getProfileThunk:", user)
                    setProfile({...user, username: currentUser.username});
                })
            }
            fetchData();
        }
    }, []);

    return (
    <div>
        <h1>Profile Screen</h1>
        {sentuser && (
            <div>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout
            </button>
            <button onClick={save}>Save</button>
        </div>
    )}
    </div>);
}
export default ProfileScreen;