import React from "react";
import {
  Button,
  CircularProgress,
  List,
  ListItem,
  Box,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_REQUEST_STATUS } from "../../reducers/news";
import { fetchNews } from "../../actions/news";

export default function News() {
  const { status, list } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const loadData = () => dispatch(fetchNews());

  if (status === NEWS_REQUEST_STATUS.LOADING) return <CircularProgress />;

  return (
    <Box sx={{ p: 3, display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <Typography component="h1" variant="h5" sx={{ width: '100%' }}>
        News page
      </Typography>
      {status !== NEWS_REQUEST_STATUS.ERROR ? (
        <List sx={{ width: '100%' }}>
          {list.map((newsItem) => (
            <ListItem key={newsItem.id} sx={{ paddingLeft: '0px', borderBottom: '1px solid #000' }}>
              <p>{newsItem.title}</p>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography component="h4" variant="h6">
          ERROR LOADING DATA
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        title="Request"
        onClick={loadData}
        sx={{ marginTop: '20px', width: '200px' }}
      >
        Request
      </Button>
    </Box>
  );
}
