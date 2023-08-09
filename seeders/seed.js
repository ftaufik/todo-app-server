const db = require('../models')
const User = db.users
const Todo = db.todos

function SeedUser() {
  db.users.bulkCreate(
    [
      {
        id: '4423e48e-b229-4d53-95b5-d2a4463f7a1a',
        username: 'Firmanttt',
        password: '4444'
      },
      {
        id: '6d9ff448-0a5e-473b-a8d1-199dd124d594',
        username: 'Otherss',
        password: '1234'
      },
    ],
    {
      updateOnDuplicate: ['id', 'username', 'password']
    }
  )
}

function SeedTodo() {
  db.todos.bulkCreate(
    [
        {
            userId: '4423e48e-b229-4d53-95b5-d2a4463f7a1a',
            todo: "Clean Room",
            isComplete: false
        },
        {
            userId: '6d9ff448-0a5e-473b-a8d1-199dd124d594',
            todo: "Running",
            isComplete: false
        },
    ],
    {
        updateOnDuplicate: ['userId', 'todo', 'isComplete']
    }
  )
}

function initializeModels() {
  return Promise.all([
    SeedUser(),
    SeedTodo()
  ])
}

initializeModels()
