import { withRouter } from 'next/router'


const A = ({ router }) => <span>A {router.query.id}</span>

export default withRouter(A)