import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

import user1 from "../../../../public/newDeco.jpeg";
import user2 from "../../../../public/newDeco2.png";
import user3 from "../../../../public/newDeco3.jpeg";

const blogs = [
  {
    img: user1,
    title: "Super awesome, Next new Decoration is coming soon!",
    subtitle:
      "Innovative and Trendy Decorations Just Around the Corner",
    // btncolor: "error.main",
  },
  {
    img: user3,
    title: "Super awesome, Next New Catering  is coming soon!",
    subtitle:
      "Crafting Memorable Meals for Your Special Occasions.",
    // btncolor: "warning.main",
  },
  {
    img: user2,
    title: "Super awesome, Next New Decoration is coming soon!",
    subtitle:
      "Stay Ahead of the Trend with Our New Decoration Line.",
    //btncolor: "primary.main",
  },
];

const BlogCard: React.FC = () => {
  console.log("Rendering BlogCard with blogs:", blogs);
  return (
    <Grid container spacing={3}>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image
              src={blog.img}
              alt="img"
              style={{ width: "100%", height: "250px" }}
            />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h4">{blog.title}</Typography>
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
                {blog.subtitle}
              </Typography>
              {/* <Button
                variant="contained"
                sx={{
                  mt: "15px",
                  backgroundColor: blog.btncolor,
                  "&:hover": {
                    backgroundColor: blog.btncolor,
                  },
                }}
              >
                Learn More
              </Button> */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;