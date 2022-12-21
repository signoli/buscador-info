//Componente que renderiza la tarjeta de noticia
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
    <Card sx={{ display: 'flex', maxWidth: 800, maxHeight:300, m: 2}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ textAlign: 'left' }}>
          {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', color: 'text.disabled'}}>
          {item.source.name}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left' }}>
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

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={item.urlToImage}
        alt="imagen"
      />
    </Card>
    </>
  );
}

export default NewsCard;


