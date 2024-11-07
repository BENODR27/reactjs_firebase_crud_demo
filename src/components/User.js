// src/CRUD.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../configs/firebaseConfig';

function User() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');


  //collection reference
  const usersCollectionRef = collection(db, 'users');


  //methods
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    await updateDoc(userDoc, { age: age + 1 });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [createUser, updateUser, deleteUser]);

//methods end


  return (
    <div>
      <h1>CRUD App with Firebase</h1>
      <input
        placeholder="Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
            <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
