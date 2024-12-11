const BASE_URL = ''; //The backend url for users

// Get all users
export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};

// Get user by ID
export const getUserById = async (userId: string) => {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user with ID: ${userId}`);
    }
    return response.json();
};

// Create a new user
export const createUser = async (userData: any) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return response.json();
};

// Update a user
export const updateUser = async (userId: string, userData: any) => {
    const response = await fetch(`${BASE_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error(`Failed to update user with ID: ${userId}`);
    }
    return response.json();
};

// Delete a user
export const deleteUser = async (userId: string) => {
    const response = await fetch(`${BASE_URL}/${userId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete user with ID: ${userId}`);
    }
    return response.json();
};
