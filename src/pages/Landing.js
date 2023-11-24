import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>

            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>

                        {/* hoac truy cap Hipsum de lay doan van */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt placeat odio nisi, aperiam ipsa natus. Perferendis ipsa provident aliquam ex?</p>

                    <Link to='/register' className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>

                <img src={main} alt="job hunt" className='img main-img'/>
            </div>
        </Wrapper>
    );
};

export default Landing;
