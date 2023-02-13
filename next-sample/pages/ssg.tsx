import type { NextPage, GetStaticProps } from 'next'

type Props = {
  message: string
}

const Home: NextPage<Props> = (props) => {
  const { message } = props
  return (
    <div>{message}</div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message);

  return {
    props: {
      message
    }
  }
}

export default Home;
