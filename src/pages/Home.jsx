import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <div className='container'>
                    <h1 id='nome'>{"< tiemi nagazawa >"}</h1>
                    <p className='subtitulo'>dev. front-end + arquiteta</p>
                </div>
            </div>
        </>
    );
}

export default Home;
