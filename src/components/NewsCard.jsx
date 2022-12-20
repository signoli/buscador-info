//Componente que renderiza la tarjeta de noticia

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NewsCard = ({ item }) => {
  const { DateTime } = require("luxon");
  const getPublished = (date) => {
    let day = DateTime.fromISO(date).setZone("UTC").toFormat("dd-MM-yyyy");

    let hour = DateTime.fromISO(date).setZone("UTC").toFormat("HH:mm");

    return `Publicado el: ${day} a las ${hour} hs`;
  };

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 700 }} className="card-news">
        {item.urlToImage ? (
          <CardMedia component="img" image={item.urlToImage} alt="imagen" />
        ) : (
          <CardMedia
            component="img"
            image="https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
            alt="imagen"
          />
        )}

        <CardContent>
          
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{ 
              textAlign: 'left',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            {item.title}
          </Typography>


          <Typography 
            variant="h7" 
            component="div" 
            sx={{ textAlign: 'left' }}
          >
            De {item.source.name}
          </Typography>
          
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ textAlign: 'left' }}
          >
            {item.description}
          </Typography>

        </CardContent>
        
        <CardActions className="card-footer">
          
          <Button size="small" href={item.url} target="_blank">
            IR A LA NOTICIA
          </Button>
          
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {getPublished(item.publishedAt)}
          </Typography>

        </CardActions>
      </Card>
    </>
  );
}

export default NewsCard;
