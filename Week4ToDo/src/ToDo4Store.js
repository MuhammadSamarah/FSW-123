import { v4 as uuidv4 } from "uuid";

const todos = [
    {id: uuidv4(), text: "Feed Cat.", isComplete: false},
    {id: uuidv4(), text: "Go For a Walk.", isComplete: false},
    {id: uuidv4(), text: "Go to Work.", isComplete: false},
    {id: uuidv4(), text: "Eat Dinner.", isComplete: false}
];

export default todos;