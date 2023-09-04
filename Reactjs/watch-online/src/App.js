import { Alert, Button, ButtonGroup, Row } from 'react-bootstrap'
import Layout from './components/layout'
import MovieCard from './components/movie.card'
import { useEffect, useState } from 'react'
import {
    isLoggedIn,
    login,
    paginator
} from './utils/index'
import MovieDetail from './components/movie.detail'
export default function App() {
    const [user, setUser] = useState({});
    const [movies, setMovies] = useState([]);
    //  const [moviesperPage,setMoviesperPage] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(false);
    const [detail, setDetail] = useState(false);
    const [movieDetail,setMovieDetail] = useState({})

    useEffect(() => {
        let token = localStorage.getItem('token') || ""
        setIsLoading(true)
        isLoggedIn(token)
            .then(res => res.json())
            .then(data => {

                return data
            })
            .then(data => {
                let paginated = paginator(data, pageNumber, 10)

                setMovies(paginated)
            })
            .finally(() => setIsLoading(false))
    }, [pageNumber])

    const handleLogin = e => {
        e.preventDefault();
        login(user)
            .then(data => {
                localStorage.setItem('token', data.token)
            })
    }

    const handleRegister = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        e.preventDefault();
        console.log(e.target)
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const handleSingleMovie=(obj)=>{
    //     setMovieDetail(obj)
    // }

    const handleDetail = (obj)=>
    {
        setDetail(true);
        setMovieDetail(obj)
    }

    return (
        <Layout authfunc={[handleLogin, handleChange, handleRegister]}>
            <div className='m-auto text-center'>
                <Row xs={1} md={4} className="g-4 mb-3 text-start">
                    {
                        isLoading ?
                            <p className='h2'>Movies are loading...</p>
                            :
                            movies.data &&
                            movies.data.map((movie, idx) => (
                                <MovieCard idx={idx} movie={movie} key={idx} handleDetail={handleDetail}/>
                            ))
                    }
                </Row>
                <ButtonGroup>
                    <Button variant='danger'>Previous Page</Button>
                    <Button variant='dark' onClick={() => setPageNumber(pageNumber + 1)}>Next Page</Button>
                </ButtonGroup>
                <MovieDetail show={detail} handleDetail={handleDetail} setShow={setDetail} singleMovie={movieDetail}/>
            </div>
        </Layout>
    )
}