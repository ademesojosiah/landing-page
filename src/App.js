import './App.css';
import Nav from './Nav';
import About from './About';
import Features from './Features.js';
import Tabs from './Tabs';
import FlexBoxes from './FlexBoxes';
import Faqs from './Faqs';
import Main from './Main';
import Footer from './Footer';
import FooterNav from './FooterNav';


function App() {
  return (
    <div className="app">
 
      <Main>
        <Nav />
        <About />
        <Features header={'Features'} text={'Our aim is to make it quick and easy for you to acess your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'} />
        <Tabs/>
        <Features header={'Download the extension'} text={ "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize "} />
        <FlexBoxes />
        <Features header={'Frequently Asked Question'} text={ "Here are some of our FAQs. If you have any questions you'd like answered please free to email us. "} />
        <Faqs />
      </Main>
        <Footer />
        <FooterNav />


    </div>
  );
}

export default App;
