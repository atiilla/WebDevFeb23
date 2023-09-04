import {Button, ButtonGroup, Row} from 'react-bootstrap'
import Layout from './components/layout'
import MovieCard from './components/movie.card'

export default function App() {
    return (
        <Layout>
            <div className='m-auto text-center'>
            <Row xs={1} md={4} className="g-4 mb-3 text-start">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <MovieCard idx={idx}/>
                ))}
            </Row>
            <ButtonGroup>
                <Button variant='danger'>Previous Page</Button>
                <Button variant='dark'>Next Page</Button>
            </ButtonGroup>
            </div>
        </Layout>
    )
}