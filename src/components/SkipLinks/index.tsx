import { SrOnly } from '@/components/styled/shared'

export const SkipLinks: React.FC = () => {
  return (
    <SrOnly>
      <a href="#task-list">Your tasks</a>
      <a href="#new-task-form">Create a new Task</a>
    </SrOnly>
  )
}
