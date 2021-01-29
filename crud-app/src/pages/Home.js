import React, { Component } from 'react';
import  './Home.css';


 class Home extends Component {
    render() {
        return (
            <div className = "row">

                <div className ="medium-12 columns">
                <div id="page-wrapper">

    <header id="header" class="alt">
        <h1><a href="index.html">African Marketplace</a></h1>
        <nav id="nav">
            <ul>
                <li class="special">
                    <a href="#menu" class="menuToggle"><span>Menu</span></a>
                    <div id="menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Meet the Team</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>


    <section id="banner">
        <div class="inner">
            <h2>African Marketplace</h2>
            <p>Sauti Africa empowers small business owners, particularly women, <br />to improve their business and economic opportunities<br /> to grow out of poverty. </p>
            <ul class="actions special">
                <li><a href="#" class="button primary">Activate</a></li>
            </ul>
        </div>
        <a href="#one" class="more scrolly">Learn More</a>
    </section>

    <section id="one" class="wrapper style1 special">
        <div class="inner">
            <header class="major">
                <h2>Arcu aliquet vel lobortis ata nisl<br />
                eget augue amet aliquet nisl cep donec</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
            </header>
            <ul class="icons major">
                <li><span class="icon fa-gem major style1"><span class="label">Lorem</span></span></li>
                <li><span class="icon fa-heart major style2"><span class="label">Ipsum</span></span></li>
                <li><span class="icon solid fa-code major style3"><span class="label">Dolor</span></span></li>
            </ul>
        </div>
    </section>

    <section id="two" class="wrapper alt style2">
        <section class="spotlight">
            <div class="image"><img src="images/pic01.jpeg" alt="" /></div><div class="content">
                <h2>Magna primis lobortis<br />
                sed ullamcorper</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
        <section class="spotlight">
            <div class="image"><img src="images/pic02.jpeg" alt="" /></div><div class="content">
                <h2>Tortor dolore feugiat<br />
                elementum magna</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
        <section class="spotlight">
            <div class="image"><img src="images/pic03.jpeg" alt="" /></div><div class="content">
                <h2>Augue eleifend aliquet<br />
                sed condimentum</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
    </section>
    <section id="three" class="wrapper style3 special">
        <div class="inner">
            <header class="major">
                <h2>Accumsan mus tortor nunc aliquet</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
            </header>
            <ul class="features">
                <li class="icon fa-paper-plane">
                    <h3>Arcu accumsan</h3>
                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                </li>
                <li class="icon solid fa-laptop">
                    <h3>Ac Augue Eget</h3>
                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                </li>
                <li class="icon solid fa-code">
                    <h3>Mus Scelerisque</h3>
                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                </li>
                <li class="icon solid fa-headphones-alt">
                    <h3>Mauris Imperdiet</h3>
                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                </li>
                <li class="icon fa-heart">
                    <h3>Aenean Primis</h3>
                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                </li>
                <li class="icon fa-flag">
                    <h3>Tortor Ut</h3>
                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                </li>
            </ul>
        </div>
    </section>

    <section id="cta" class="wrapper style4">
        <div class="inner">
            <header>
                <h2>Arcue ut vel commodo</h2>
                <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
            </header>
            <ul class="actions stacked">
                <li><a href="#" class="button fit primary">Activate</a></li>
                <li><a href="#" class="button fit">Learn More</a></li>
            </ul>
        </div>
    </section>

    <footer id="footer">
        <ul class="icons">
            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
            <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
        </ul>
    </footer>
            </div>
                </div>
            </div>
            
        )
    }
}

export default Home;