import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/roles");
            setRoles(response.data.roles);
            // Set the first role ID as the default value
            if (response.data.roles.length > 0) {
                setRole(response.data.roles[0].id.toString());
            }
        } catch (error) {
            console.error("Error fetching roles:", error);
        }
    };

    const roleOptions = roles.map((role:{name:string, id:number}) => ({
        label: role.name,
        value: role.id,
    }));

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        
        // Check if Name field is empty
        if (!name.trim()) {
            setError("Name is required");
            return;
        }

        // Check if Email field is empty
        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        // Clear previous error
    setError("");

    try {
        // Make POST request to submit user data
        await axios.post("http://localhost:8000/api/users", {
            name: name,
            email: email,
            role_id: Number(role) 
        });

        // Navigate to "/users" after successful submission
        navigate("/users");
    } catch (error:any) {
        if (error.response && error.response.status === 422) {
            // Validation error occurred, display error messages
            const validationErrors = error.response.data.errors;
            if (validationErrors) {
                const errorMessage = Object.values(validationErrors).flat().join("\n");
                setError(errorMessage);
            }
        } else {
            // Other types of errors occurred, log the error
            console.error("Error submitting user data:", error);
            setError("An error occurred while submitting user data. Please try again later.");
        }
    }
    };

    return (
        <div className="flex justify-center mt-20 p-4">
            <div className="bg-gray-100 w-80 min-h-40 p-4">
                <h1 className="bg-blue-100 font-bold text-lg text-center p-2 mb-2">Add User</h1>
                <form className="w-full">
                    <div className="group w-full mb-2">
                        <label htmlFor="name">Name:</label>
                        <InputBox value={name} onChange={setName} type="text" />
                    </div>
                    <div className="group mb-2">
                        <label htmlFor="email">Email:</label>
                        <InputBox value={email} onChange={setEmail} type="email" />
                    </div>
                    <div className="group mb-2">
                        <label htmlFor="role">Role:</label>
                        <Dropdown value={role} onChange={(value) => setRole(value)} options={roleOptions} />
                    </div>
                    {error && <span className="text-red-500 mb-4">{error}</span>}
                    <div className="text-center">
                        <Button variant="success" label="Submit" onClick={(e:Event) => handleSubmit(e)} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
