import { useState } from "react"
import Movie from './movie';
import {v4 as uuid} from "uuid"


const Movies = ()=>{
 const [MoivesList] = useState([
    {title:"The Shawshank Redemption",disc:"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",link:'https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=9X0385Q960THZQT3QCSB&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1', src:"https://m.media-amazon.com/images/M/MV5BMTcxMzgyNzk2Ml5BMl5BanBnXkFtZTcwNDEzNTkyMQ@@._V1_UY100_UX100_AL_.jpg"},  
    {title:"The Godfather",disc:"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",link:"https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=9X0385Q960THZQT3QCSB&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2",src:"https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX100_CR0,0,100,100_AL_.jpg"},
    {title:"The Dark Knight",disc:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",link:"https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=9X0385Q960THZQT3QCSB&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3",src:"https://m.media-amazon.com/images/M/MV5BNTQwODYzMDg0NV5BMl5BanBnXkFtZTcwMzcxMTk2Mw@@._V1_UY100_CR15,0,100,100_AL_.jpg"},
    {title:"The Godfather Part II",disc:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",link:"https://www.imdb.com/title/tt0071562/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=9X0385Q960THZQT3QCSB&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4",src:"https://m.media-amazon.com/images/M/MV5BMTQyMDc0ODY1OV5BMl5BanBnXkFtZTgwMDI4NjIwMjE@._V1_UY100_CR14,0,100,100_AL_.jpg"},
 ]);

return (
    <>
    <h1>Movies</h1>
    <div className="container">
        <div className="row">
        {MoivesList.map((m)=>{return(<Movie key={uuid()} {...m}></Movie>)})}
    </div>
    </div>
    </>
)
}

export default Movies;