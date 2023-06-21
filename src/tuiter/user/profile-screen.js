import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
from "../services/auth-thunks";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    // console.log("currentUser:", currentUser)
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async() => { 
        const user = await dispatch(updateUserThunk(profile));
        console.log("updated user:", user);
        if (user) {
            alert("Profile updated successfully")
        } else {
            alert("Error updating profile");
        }
    };
    useEffect(() => {
        async function fetchData() {
            const { payload } = await dispatch(profileThunk());
            // console.log("payload:", payload)
            setProfile(payload);
        }
        fetchData();
    }, []);

    return (
    <div>
        <h1>Profile Screen</h1>
        {profile && (
            <div>
                <div>
                    <label>First Name</label>
                    <input type="text" value={profile.firstName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={profile.lastName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                    />
                </div>
            </div>
        )}
        <button
            onClick={() => {
                dispatch(logoutThunk());
                navigate("/login");
            }}>
            Logout
        </button>
        <button onClick={save}>Save</button>
    </div>);
}
export default ProfileScreen;