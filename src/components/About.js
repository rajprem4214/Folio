import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

import './About.css'

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src='https://i.ibb.co/44WXyQz/coorg-self.jpg' alt="me" />
              </div>
            </div>
            {/* <div className="">
              <p>Hello, I'm Prem Raj, a passionate Software Engineer and competitive programmer from Bengaluru, India. I've interned at Microsoft and Wokelo.AI, where I streamlined processes, improved site performance, and developed innovative projects. With a strong foundation in competitive programming and a knack for coding, I've achieved impressive ratings on platforms like Codeforces and LeetCode. I'm on a mission to make a mark in the tech world and excel in the world of competitive programming. Explore my portfolio to see my work in action.</p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div> */}
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.about}
            </Text>
          </div>
        </Stack>
      </Container>
    </>
  );
}

