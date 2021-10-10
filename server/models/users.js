const { pool, client } = require('../db/usersDB');


const createUser = async (name, surname, email, password, address) => {

    try {
      const response = await pool.query('INSERT INTO users (name, surname, email, password, address) VALUES ($1, $2, $3, $4, $5)', [name, surname, email, password, address])
      return response.rowCount;
    } catch (err) {
      console.log(err.stack)
    }
  };
  

  const getUser = async (email) => {
    try {
      const response = await pool.query('SELECT * FROM users WHERE email=$1', [email])
      return response.rows
    } catch (err) {
      console.log(err.stack)
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await pool.query('SELECT * FROM users')
      return response.rows
    } catch (err) {
      console.log(err.stack)
    }
  }

  const updateAnUser = async (newName, newSurname, newEmail, oldEmail, newAddress) => {
    try {
  
      const response = await pool.query('UPDATE users SET name=$1, surname=$2, email=$3, address=$5 WHERE email=$4', [newName, newSurname, newEmail, oldEmail, newAddress]);
      return response.rowCount
    } catch (error) {
      console.log(err.stack)
      
    }
  }

  const updatePassword = async (password, email) => {
    try {
      const response = await pool.query('UPDATE users SET password=$1 WHERE email=$2', [password, email]);
      return response.rowCount
    } catch (error) {
      console.log(err.stack)
      
    }
  }

  const deleteOneUser = async (email) => {
    try {
      const response = await pool.query('DELETE FROM users WHERE email=$1', [email])
      return response.rowCount;
    } catch (err) {
      console.log(err.stack)
    }
  }


  module.exports = { createUser, getUser, getAllUsers, updateAnUser, deleteOneUser, updatePassword }