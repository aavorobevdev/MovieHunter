import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

type MovieCardProps = { movie: any };

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { overview, title, original_language, poster_path } = movie;

  console.log(overview, title, original_language, poster_path);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{overview}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Watch now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add in favorites
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
