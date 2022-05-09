import Devit from 'components/Devit/Devit'
import { GetServerSideProps } from 'next'

export default function StatusDevitPage({ devit }) {
  console.log('Rendering StatusDevitPage')

  return (
    <Devit
      key={devit.id}
      id={devit.id}
      username={devit.username}
      avatar={devit.avatar}
      content={devit.content}
      createdAt={devit.createdAt}
      imageUrl={devit.imageUrl}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id: string = params.id as string
  const response = await fetch(`http://localhost:3000/api/devit/${id}`)
  const devit = await response.json()
  return {
    props: {
      devit,
    },
  }
}
