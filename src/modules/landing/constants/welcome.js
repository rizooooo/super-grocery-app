import { LandingImage1, LandingImage2, LandingImage3 } from './svgs';

const welcome_screen = [
    {
        title: 'Delivery',
        description: 'Shop form anywhere. Get groceries and liquior delivered right to you',
        image: LandingImage1,
        buttonOne: 'Log In',
        buttonTwo: 'Next'
    },
    {
        title: 'In-Store Pickup',
        description: `Order online, select your time, then pick up your items when you're ready`,
        image: LandingImage2,
        buttonOne: 'Log In',
        buttonTwo: 'Next'
    },
    {
        title: 'Curbside Pickup*',
        description: `Shop online for groceries and swing by when it's best for you`,
        image: LandingImage3,
        buttonOne: 'Log In',
        buttonTwo: 'Get Started'
    }
]

export default welcome_screen;