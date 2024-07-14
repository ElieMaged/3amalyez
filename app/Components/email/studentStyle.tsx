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
    phone: any;
    interests: string;

  }
  export default function studentStyle({firstLast, email, phone, interests }:ContactFormEmailProps) {
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
                  src='https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg' alt="Student" width="300" height="200"
                  />
                  <Heading className='leading-tight'>
                    Student Signup!
                  </Heading>
                    <Text>
                     My name is: {firstLast}
                     <br />
                     I am interested in: {interests}
                     <Hr />
                     <Heading>Contact Info</Heading>
                     My email is: {email}
                     <br />
                     my number is: {phone}
                    </Text>
                  <Img src='https://i.imgur.com/kCC7QtS.png' height='' width='100' className='mb-5'/>
                </Section>
              </Container>
            </Body>
          </Tailwind>
        </Html>
    )
    
  }