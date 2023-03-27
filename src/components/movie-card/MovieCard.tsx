import React, { FC } from "react";
import { Box, Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Movie } from "../../types/movies";

type MovieCardProps = { movie: Movie; width: string; height: string };

export const MovieCard: FC<MovieCardProps> = ({ movie, width, height }) => {
  const { overview, title, original_language, poster_path, vote_average } =
    movie;

  return (
    <Stack width={width} height={height} spacing={2}>
      <Card maxW="sm" overflow="hidden">
        <CardBody color="white" padding={0} borderRadius="lg">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </CardBody>
      </Card>
      <Heading mt="10px" size="md" color="white">
        {title}
      </Heading>
    </Stack>
  );
};
