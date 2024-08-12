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
  }
  export default function studentStyle({firstLast, email }:ContactFormEmailProps) {
    return(
        <Html>
          <Head
          />
          <Preview>Mentor Signup!</Preview>
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
                  Hello there {firstLast}, Please fill out the following application
                    <Hr />
                    <br />
                    </Text>
                    <Img src='https://i.imgur.com/kCC7QtS.png' height='' width='100' className='mb-5'/>
                </Section>
              </Container>
            </Body>
          </Tailwind>
        </Html>
    )
    
  }