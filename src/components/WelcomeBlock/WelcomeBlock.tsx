import React from 'react';
// @ts-ignore
import './WelcomeBlock.scss'

function WelcomeBlock() {
    return (
        <section id='welcome-block' className='welcome-block'>
            <p className='welcome-block__description'>Дорогие гости!</p>
            <p className='welcome-block__text'>Мы будем рады разделить с Вами радость неповторимого для нас дня!</p>
            <p className='welcome-block__text'>Приглашаем присоединиться к нашему празднику и украсить его своим присутствием</p>
            <p className='welcome-block__text'>Ждем Вас!</p>

            <p className='welcome-block__description'>7 октября 2023 года</p>
            <p className='welcome-block__text'>На церемонии бракосочетания<br/> по адресу: г. Раменское ул. Красноармейская д.2</p>
            <p className='welcome-block__text'>А также в банкетном зале «Ренессанс»<br/>по адресу: г. Жуковский ул. Туполевское шоссе 1/3</p>
        </section>
    );
}

export default WelcomeBlock;
