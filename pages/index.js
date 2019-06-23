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
    }, '/a/2')
  }

  return (
    <>
      <Link href='/a?id=1'
        as='/a/1'
        title='AAA'>
        <Button>Index</Button>
      </Link>
      <Button onClick={goToPageA} >goToPageA</Button>
    </>
  )
}