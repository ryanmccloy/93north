import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Img,
} from "@react-email/components";

export default function ContactFormSubmission({ name }) {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>We'll be in touch soon!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Hello {name || "there"},</Heading>
          <Text style={text}>
            We’ve received your message and our team will be in touch within the
            next <strong>48 hours</strong>.
          </Text>
          <Text style={text}>
            In the meantime, feel free to check out our latest projects at{" "}
            <a href="https://www.93northstudio.com" style={link}>
              93northstudio.com
            </a>
          </Text>
          <Img
            src="https://93northstudio.com/logo/logo-no-bg.png"
            width="120"
            alt="93 North Studio"
            style={logo}
          />
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f9f9f9",
  fontFamily: '"Montserrat", Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 24px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "600px",
};

const heading = {
  fontFamily: '"Bebas Neue", Impact, "Arial Black", sans-serif',
  fontSize: "32px",
  lineHeight: "1.2",
  marginBottom: "16px",
  color: "#111",
};

const text = {
  fontFamily: '"Montserrat", Arial, sans-serif',
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#444",
  marginBottom: "16px",
};

const link = {
  color: "#fe7d28",
  textDecoration: "none",
};

const logo = {
  margin: "40px auto 0px",
};
