
import Box from "../components/Box";
const HomePage = () =>{
    

    return (
        <div className="center">
            <h1>title</h1>
            <h1>subtitle</h1>
            <div className='wrapper'>
            
            <Box label='Downlaod reel' icon={'icon'}/>
            <Box label='Downlaod story' icon={'icon'}/>
            <Box label='Downlaod highlight' icon={'icon'}/>
            <Box label='Downlaod picture' icon={'icon'}/>
            <Box label='Downlaod profile pic' icon={'icon'}/>
            <Box label='Downlaod video' icon={'icon'}/>
            </div>
            <button >All tools</button>
            <div style={{ width: 50, height: 50 }}>        
</div>
        </div>
    );
};

export default HomePage;