import Footer from './components/Footer';
import Card from './components/Card';

import './App.css';

function App() {
  const card_1 = {
    title: "Join our community",
    title_color: "Cyan",
    sub_titile: {
      title_left: "30-day, hassle-free money back guarantee",
      title_right: "",
      title_left_color: "Bright-Yellow",
      title_right_color: "",
    },
    description: "Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.",
    description_color: "Grayish-Blue",
    description_size: 'md',
    hasBtn: false,
    bg_color: "white",
    rounded_left: true,
    rounded_right: true,
    rounded_top: true,
    inTheMiddle: false,
    inThebottom: false,
    inThetop: true,
  }

  const card_2 = {
    title: "Monthly Subscription",
    title_color: "white",
    sub_titile: {
      title_left: "$29",
      title_right: "per month",
      title_left_color: "white",
      title_right_color: "Grayish-Blue",
      title_left_size: "3xl",
      title_right_size: "sm",
    },
    description: "Full access for less than $1 a day    ",
    description_color: "Light-Gray",
    description_size: 'sm',
    hasBtn: true,
    btn_color: "Bright-Yellow",
    btn_title: "Sign Up",
    bg_color: "Cyan-dark",
    rounded_left: true,
    rounded_bottom: true,
    inTheMiddle: true,
    inThebottom: false,
    inThetop: false,
  }

  const card_3 = {
    title: "Why Us",
    title_color: "white",
    description: "Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week",
    description_color: "Light-Gray",
    description_size: 'sm',
    hasBtn: false,
    bg_color: "Cyan",
    rounded_right: true,
    rounded_bottom: true,
    inTheMiddle: false,
    inThebottom: true,
    inThetop: false,
  }

  return (
    <>
      {/* flex container */}
      <div
        className='
          flex 
          flex-col 
          justify-center 
          items-center 
          w-screen 
          h-screen
          max-w-xl
          sm:m-auto
        '>
        {/* grid container */}
        <div
          className='
            rounded-xl
            my-auto 
            grid 
            sm:grid-cols-2
            grid-rows-1 
            grid-cols-1
            sm:m-0
            m-8
            shadow-2xl
          '>
          {/* card-1 */}
          <div
            className='sm:col-span-2'>
            <Card {...card_1} />
          </div>
          {/* card-2 */}
          <Card {...card_2} />
          {/* card-3 */}
          <Card {...card_3} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;