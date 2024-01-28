import { Task } from '@/context/task-context'
import { updateTaskHistory } from './updateTaskHistory'

describe('udpateTaskHistory()', () => {
  it('returns identity when the status in edit is the same as the original status of the task', () => {
    const task: Task = {
      id: '123',
      title: 'A title',
      description: 'A description',
      createdAt: 123,
      status: 'todo',
      history: [
        {
          targetStatus: 'blocked',
          createdAt: 123,
        },
        {
          targetStatus: 'inProgress',
          createdAt: 123,
        },
      ],
    }

    expect(updateTaskHistory(task, 'todo')).toEqual(task.history)
  })

  it('returns an updated version of history when the status in edit is different than the original status of the task', () => {
    const task: Task = {
      id: '123',
      title: 'A title',
      description: 'A description',
      createdAt: 123,
      status: 'inQa',
      history: [
        {
          targetStatus: 'inProgress',
          createdAt: 123,
        },
      ],
    }

    expect(updateTaskHistory(task, 'todo')).toEqual([
      {
        targetStatus: 'inProgress',
        createdAt: 123,
      },
      {
        targetStatus: 'todo',
        createdAt: Date.now(),
      },
    ])
  })
})
