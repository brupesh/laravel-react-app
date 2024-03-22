import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users');
            setUsers(response.data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <>
            <div className="flex m-4 justify-center">
                <div className="min-w-80">
                    <div className="text-right text-white w-full py-2 ">
                        <Button variant='success' label='Create User' onClick={() => navigate("/")} />
                    </div>
                    <div className="bg-gray-700 text-white w-full py-2 px-4 ">
                        <h1>List of Users</h1>
                    </div>
                    <div className="p-4 bg-gray-200">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user:{id:number, name:string, email: string, role:{name:string}}) => (
                                        <tr key={user?.id} className="odd:bg-white even:bg-gray-50 border-b">
                                            <td className="px-6 py-4">{user?.name}</td>
                                            <td className="px-6 py-4">{user?.email}</td>
                                            <td className="px-6 py-4">{user?.role?.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
