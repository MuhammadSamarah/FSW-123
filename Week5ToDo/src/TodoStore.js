import React from 'react'
import { v4 as uuidv4 } from "uuid";


export const listOfTodos = [
    { id: uuidv4(), text:"Drink Smoothie", isCompleted: true },
    { id: uuidv4(), text: "Do homework", isCompleted: false },
    { id: uuidv4(), text: "video games", isCompleted: false }, 
    { id: uuidv4(), text: "Dinner", isCompleted: true }
  ]