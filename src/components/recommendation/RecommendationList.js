import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";
import Looks5OutlinedIcon from "@mui/icons-material/Looks5Outlined";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Fragment } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

export default function RecommendationList(props) {
  const iconList = [
    <LooksOneOutlinedIcon />,
    <LooksTwoOutlinedIcon />,
    <Looks3OutlinedIcon />,
    <Looks4OutlinedIcon />,
    <Looks5OutlinedIcon />,
  ];
  const isMobile = useMediaQuery("(max-width: 1400px)");
  const navigate = useNavigate();

  // 추천 카테고리를 선택했을 때 callback 함수
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.textContent);
    navigate(`/restaurant/list`, {
      state: {
        restInfoList: props.restInfoList,
        category: event.target.textContent,
      },
    });
  };

  const testImg = require(`../../images/delivery-cat.png`);
  const carouselCard = (text) => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="100%" image={testImg} />
          <CardContent>
            <Typography>Chicken</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  // 모바일 화면인 경우
  if (isMobile) {
    var items = [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #2",
        description: "Hello World!",
      },
    ];
    return (
      <Fragment>
        <h3>📈 AI가 추천해주는 Top5 음식!</h3>
        {/* <Box
          align="center"
          sx={{
            display: "flex",
            alignItem: "row",
            justifyContent: "space-between",
            m: 4,
          }}
        >
          {props.list.map((item, idx) => {
            if (idx <= 5) {
              return (
                <Card key={idx} onClick={handleClick}>
                  <CardActionArea>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ m: 1 }}
                    >
                      {item}
                    </Typography>
                  </CardActionArea>
                </Card>
              );
            }
          })}
        </Box> */}
        <Carousel height={200}>
          {props.list.map((item, idx) => {
            if (idx <= 5) {
              return carouselCard(item);
            }
          })}
        </Carousel>
      </Fragment>
    );
  }
  // PC 화면인 경우
  else {
    return (
      <List
        sx={{
          width: "100%",
          maxWidth: 270,
          bgcolor: "background.paper",
          borderRadius: "16px",
          border: 3,
          position: "absolute",
          top: "300px",
          left: "80vw",
        }}
        aria-label="contacts"
        subheader={<ListSubheader>📈 AI가 추천해주는 Top5</ListSubheader>}
      >
        {props.list.map((item, idx) => {
          if (idx <= 5) {
            return (
              <ListItem onClick={handleClick} key={idx}>
                <ListItemButton>
                  <ListItemIcon>{iconList[idx]}</ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    );
  }
}
