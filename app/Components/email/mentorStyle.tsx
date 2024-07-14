import { 
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Img 
  } from "@react-email/components";
  
  import { Tailwind } from "@react-email/tailwind"


  type ContactFormEmailProps = {
    firstLast: string;
    email: string;
    countryCode: any;
    phoneNumber: any;
    expertise: string;
    years: any;
    languages: string;
    price: any;
    introVid: string;
    country: string;

  }
  export default function studentStyle({firstLast, email, countryCode, phoneNumber, expertise, years, languages, price, introVid, country }:ContactFormEmailProps) {
    return(
        <Html>
          <Head
          />
          <Preview>Student Signup!</Preview>
          <Tailwind>
            <Body className='bg-gray-100'>
              <Container>
                <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                  <Img 
                  src='https://media.istockphoto.com/id/486325400/photo/teacher-asking-her-students-a-question.jpg?s=612x612&w=0&k=20&c=gA6YxA-uGplqjyZfTKBuOcAXEZz7S_KqgGgEGl8YztQ=' alt="Student" width="300" height="200"
                  />
                  <Heading className='leading-tight'>
                    Mentor Signup!
                  </Heading>
                    <Text>
                    My name is: {firstLast}
                     <br />
                    I am an expert in {expertise} for {years} years
                    <br />
                    I can speak {languages}
                    <br/> 
                    My price per session is {price} USD
                    <br />
                    The link to my youtube intro is {introVid}
                    <br />
                    I am from {country}
                    <Hr />
                    <Heading>Contact Info</Heading>
                    my email is: {email}
                    <br />
                    My number is ({countryCode}) {phoneNumber}
                    </Text>
                    <Img src='https://i.imgur.com/kCC7QtS.png' height='' width='100' className='mb-5'/>
                </Section>
              </Container>
            </Body>
          </Tailwind>
        </Html>
    )
    
  }