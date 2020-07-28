import React, { useState } from 'react';
// import { Jumbotron, Container } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
        Jumbotron,
        CardTitle, CardSubtitle, Button,Row, Col,Container
  } from 'reactstrap';
  import{Link} from 'react-router-dom'
  
//   import './CSS/Beranda.css';
// import { Button } from 'reactstrap';
// import FormLogin from './FormLogin';

const items = [
    {
      src: 'https://cdn.statically.io/img/dikemas.com/uploads/2018/07/mie-lidi-720x432.jpg',
      altText: 'Lidi MIX',
      caption: 'Lidi AYE'
    },
    {
      src: 'https://medias.infia.co/news/images/2019/03/23/2019-03-23-01-55-27-314873.jpeg',
      altText: 'Lidi Asin',
      caption: 'Lidi AYE'
    },
    {
      src: 'https://img-global.cpcdn.com/recipes/6646274fc30adcfa/751x532cq70/mie-lidi-pedas-foto-resep-utama.jpg',
      altText: 'Lidi Pedas',
      caption: 'Lidi AYE'
    },
    {
        src: 'https://cf.shopee.co.id/file/9c2e2cab7e05b47e7c8b18d06c75eb58',
        altText: 'Lidi SIUMANG',
        caption: 'AYE STORE'
      },
  ];
  
const HomeComp = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
        
      );
    });
  
    return (
    <Container>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <Jumbotron>
                    <h1 className="display-3">Selamat Datang di AYE STORE</h1>
                    <p className="lead">Ingin jadi Reseller Lidi AYE? Gampang banget hanya dengan daftar jadi member </p>
                    <hr className="my-2" />
                    <p>Tersedia katalog Lidi berbagai merek,dan makanan khas AYE STORE </p>
                    <p className="lead">
                    <Button  outline color="primary"size="sm" >
                    <Link to="/login">LogIn</Link>  </Button>
                    <Button  outline color="primary" size="sm" >
                    <Link to="/register">Register</Link>  </Button>
                    </p>
        </Jumbotron>
      </Container>
    );
  }
  export default HomeComp
