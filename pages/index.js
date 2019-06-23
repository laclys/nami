import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {

  function goToPageA() {
    Router.push({
      pathname: '/a',
      query: {
        id: 2
      }
    })
  }

  return (
    <>
      <Link href='/a?id=1' >
        <Button>Index</Button>
      </Link>
      <Button onClick={goToPageA} >goToPageA</Button>
    </>
  )
}