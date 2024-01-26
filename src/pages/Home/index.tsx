import { PageNavigation } from '@/components/PageNavigation'
import { Page } from '@/components/Page'
import { TaskLog } from '@/components/TaskLog'

export const Home: React.FC = () => {
  return (
    <Page>
      <PageNavigation currentPage="home" />
      <TaskLog />
    </Page>
  )
}
