import { PageNavigation } from '@/components/PageNavigation'
import { Page } from '@/components/Page'
import { TaskLog } from '@/containers/TaskLog'
import { TaskForm } from '@/containers/TaskForm'
import { SkipLinks } from '@/components/SkipLinks'

export const Home: React.FC = () => {
  return (
    <Page>
      <SkipLinks />
      <PageNavigation currentPage="home" />
      <TaskForm />
      <TaskLog />
    </Page>
  )
}
