import img1 from '../images/googlePlay.png';
import img2 from '../images/appleStore.png';
import img3 from '../images/inst.svg';
import img4 from '../images/fb.svg';
import '../components/foot.css';
const Foot = () => {
    return (
        <div>
            <div className='ft'>
                <h2>MY CART will never contact their customers for cash prizes or request passwords/pins/CVV.Please <br /> 
                refrain from such sharing such confidential informataion with anyone, as this can result in farudulent transactions.</h2>
                <div className='tag'>
                            <a href=""><p>Privacy policy</p></a>
                            <a href=""><p>Terms of use</p></a>
                            <a href=""><p>Return policy</p></a>
                        </div>
            </div>

            <div className='foot'>
                <div className='ft1'>
                    <div className='ff'>
                        <div className='logo'>
                            <h3 id='dr'>DOWNLOAD OUR APP</h3>
                            <a href="" id='lg'><img src={img1} alt="" height={33} width={112} /></a>
                            <a href="" id='lg'><img src={img2} alt="" height={33} width={112} /></a>
                        </div>
                        <div>
                        <h3 id='flo'>FOLLOW US</h3>
                        <a href="" id='lg'><img src={img3} alt="" /></a>
                        <a href="" id='lg'><img src={img4} alt="" /></a>
                         </div>
                        <div className='az'>
                            <h5>FOR QUERIES</h5>
                            <p>8762508989 | MYCARTsupport@gmail.com</p>
                        </div>                        
                    </div>
                    

                </div>
                <div className='ft2'>
                    <p>© 2019 - 2022 MyCart Fashion Pvt. Ltd. All Rights Reserved</p>
                </div>
            </div>
           
        </div>
    );
}

export default Foot;