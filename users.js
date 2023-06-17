const Users = []

const addUser = ({ id, name, room }) => {
    if (!name || !room) return { error: 'Username and room are required.' };
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    const ExistingUser = Users.find((user) => (user.name === name && user.room === room))
    if (ExistingUser) {
        return { error: 'User with this name already exists in this room.' }
    }
    const user = { id, name, room };
    Users.push(user);
    return { user }
}

const removeUser = (id) => {
    const index = Users.findIndex((user) => id === user.id)
    if (index !== -1) {
        return Users.splice(index, 1)[0];

    }
}

const getUser = (id) => {

    return (Users.find((user) => id === user.id))
}

const getAllUsers = (room) => (Users.filter((user) => user.room === room))

module.exports = { addUser, removeUser, getUser, getAllUsers }

