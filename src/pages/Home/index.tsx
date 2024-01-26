import { PageNavigation } from '@/components/PageNavigation'
import { Page } from '@/components/Page'
import { TaskLog } from '@/containers/TaskLog'
import { TaskForm } from '@/containers/TaskForm'

export const Home: React.FC = () => {
  return (
    <Page>
      <PageNavigation currentPage="home" />
      <TaskForm />
      <TaskLog />
    </Page>
  )
}
