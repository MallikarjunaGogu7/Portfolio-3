import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Let's build something amazing together — feel free to reach out! </p>
        
      </header>
      <div className="contacts">
        <div>
        <a><img src={emailIcon} alt="Email" /></a> 
          <a>mallikarjunagogu7@gmail.com</a>
        </div>
        <div>
        <a><img src={phoneIcon} alt="Phone No" /></a>
          <a>(+91) 9346318329</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}