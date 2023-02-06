import { FC, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Card from './card/Card';

import { fetchProducts, getProducts, productsStatus, updateStatus } from '../../../redux/slice/productsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';

import imgB1 from './img/B1.png';
import imgB2 from './img/B2.png';
import imgB3 from './img/B3.png';
import imgB4 from './img/B4.png';
import imgF3 from './img/F3.png';
import imgF2 from './img/F2.png';
import imgF1 from './img/F1.png';
import imgB8 from './img/B8.png';
import imgB9 from './img/B9.png';

import imgM1 from './img/M1.png';
import imgM2 from './img/M2.png';
import imgM3 from './img/M3.png';



import styles from './Catalog.module.scss';

const Catalog = ({ setActivePage }) => {
   const products = useAppSelector(getProducts);
   const statusProducts = useAppSelector(productsStatus);
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = () => {
         dispatch(fetchProducts());
      };
      fetchData();
      setActivePage('catalog');
      window.scrollTo(0, 0);
   },[])

   if (statusProducts === 'error') {
      alert('something went wrong, please try again later');
      navigate('/');
      dispatch(updateStatus('loading'));
   }

   if (statusProducts === 'loading') {
      return <h2>...loading</h2>;
   }

   return (
      <>
         <h2>Каталог автомобилей</h2>
         <section className={styles.cards}>
            {products.map((item, index) => (
               <Card key={index} id={item._id} img={imgF1} h={item.title} text={item.info} price={String(item.price)} />
            ))}
         </section>
         {/* <div className={styles.container}>
            <Card
               id={'2'}
               img={imgB2}
               h={'BMW XM'}
               text={
                  'Эксклюзивный, экспрессивный, электрифицированный: новый BMW XM сочетает в себе экспрессивный дизайн с высокой динамикой BMW M и мощной технологией подключаемого гибрида последнего поколения.'
               }
               price={'31 000 000 '}
            />
            <Card
               id={'3'}
               img={imgB3}
               h={'BMW X5 M F95'}
               text={
                  "Оснащенный новыми технологиями, обеспечивающими больше безопасности и максимум динамики на любых покрытиях, BMW X5 является безусловным лидером."
               }
               price={'7 190 000  '}
            />
            <Card
               id={'4'}
               img={imgB4}
               h={'BMW X4'}
               text={
                  "Новый BMW X4 это настоящий покоритель дорог. Это Sports Activity Coupe (SAC), оснащенный двигателями BMW TwinPower Turbo и имеющий более широкую колесную базу для превосходной управляемости, а также множество усовершенствованных элементов дизайна экстерьера и интерьера."
               }
               price={'5 700 000 '}
            />
            <Card
               id={'5'}
               img={imgF3}
               h={'Ferrari F8 Tributo'}
               text={
                  'BMW iX M60: Электрическая динамика движения высочайшего уровня. Cочетает в себе инновационную мощь BMW i и BMW M. Узнайте больше об этом первом полностью электрическом автомобиле BMW M в сегменте мощных SAV.'
               }
               price={'18 630 000 '}
            />
            <Card
               id={'6'}
               img={imgF2}
               h={'Ferrari Roma'}
               text={
                  "Обновленный BMW 8 серии Cabrio – это роскошный автомобиль, который позволяет Вам наслаждаться чувством эксклюзивной свободы на каждом километре пути. Испытайте сами!"
               }
               price={'17 200 000 '}
            />
            <Card
               id={'7'}
               img={imgF1}
               h={'Ferrari 296 GTB'}
               text={
                  "Потрясающая элегантность и разнообразные информационно-развлекательные возможности сочетаются в новом BMW 7 серии, обеспечивая премиальные впечатления от поездки!"
               }
               price={'23 690 000 '}
            />
            <Card
               id={'8'}
               img={imgM3}
               h={'Mercedes AMG H247'}
               text={
                  'Бескомпромиссный и неповторимый: новый BMW 4 серии Coupe решительно и элегантно разрушает стереотипы. Его независимый дизайн и классический купеобразный силуэт напоминают о легендарных моделях прошлого, и в то же время подчеркивают прогрессивный характер автомобиля.'
               }
               price={'4 450 000 '}
            />
            <Card
               id={'9'}
               img={imgM2}
               h={'Mercedes AMG W177'}
               text={
                  "BMW Z4 сочетает в себе динамику спорткара с ощущением свободы, которое дарит родстер. Испытайте сами: Современная эстетика культового дизайна родстера. Впечатляющая динамика благодаря мощности до 387 л.с. и безупречная управляемость. Аэродинамический пакет M для большей эффективности и динамики!"
               }
               price={'5 110 000 '}
            />
            <Card
               id={'10'}
               img={imgM1}
               h={'Mercedes A-Класс'}
               text={
                  "Ссылка на сайт, откуда можно брать картинки: https://quto.ru/mercedes-benz/a-class/w177f/hatchback5d"
               }
               price={'3 220 000 '}
            />
         </div> */}
      </>
   );
};

export default Catalog;
