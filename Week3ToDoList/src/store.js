import { v4 as uuidv4 } from 'uuid';

const todos = [
    {id: uuidv4(),text: "HomeWork",isCompleted: false},

    {id: uuidv4(),text: "Basketball",isCompleted: false},

    {id: uuidv4(),text: "Lunch",isCompleted: false},

    {id: uuidv4(),text: "Swim",isCompleted: false},

    {id: uuidv4(),text: "Dinner shopping",isCompleted: false}
];

export default todos;