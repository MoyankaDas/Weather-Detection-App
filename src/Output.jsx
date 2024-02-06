import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Output({ city }) {
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <div style={{ display: "flex", justifyContent: "center", border: "2px solid white",padding:"0.5rem", borderRadius:"2.5rem"}}>
                <Card style={{ border: "2px solid black", borderRadius: "2rem" }} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            width="350"
                            image={city.humidity > 80 ?
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxc5HMwacB7VoDElio9adWt-AbL_x4VVKKbwQIVT3EA&s'
                                : city.temp > 15 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiElKY8Lkiue_4YRGIIc3BrYebWeaELuzaLeuXSw6ivg&s'
                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwltmQ4DrKfpUBUQ1BOtV1DIhLUuUb0Zn4psNRtQXlQ&s'}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                style={{ fontWeight: "bold" }}>
                                {city.city}&nbsp;&nbsp;
                                {city.humidity > 80 ?
                                    <ThunderstormIcon style={{ color: "blue" }} />
                                    : city.temp > 15 ? <WbSunnyRoundedIcon style={{ color: "orange" }} />
                                        : <AcUnitIcon style={{ color: "skyblue" }} />}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <div style={{ fontWeight: "bold", color: "black" }}>Temparature : {city.temp}&deg;C</div>
                                <div style={{ fontWeight: "bold", color: "black" }}>Humidity : {city.humidity}</div>
                                <div style={{ fontWeight: "bold", color: "black" }}>Maximum Temparature : {city.temp_max}&deg;C</div>
                                <div style={{ fontWeight: "bold", color: "black" }}>Minimum Temparature : {city.temp_min}&deg;C</div>
                                <div style={{ fontWeight: "bold", color: "black" }}>Weather : {city.weather}</div>
                                <div style={{ fontWeight: "bold", color: "black" }}>Feels Like : {city.feels_like}&deg;C</div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>

    )
}