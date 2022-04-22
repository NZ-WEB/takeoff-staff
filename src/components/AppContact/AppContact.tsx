import { List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const AppContact = () => {
  return (
    <List>
      <ListItem>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6">#1</Typography>
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Vasya Puphin</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: 'right' }} variant="subtitle1">
              +7 (910) 521-46-68
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
};
