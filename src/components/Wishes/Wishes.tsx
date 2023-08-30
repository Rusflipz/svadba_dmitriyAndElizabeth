import React from 'react';
// @ts-ignore
import './Wishes.scss'

function Wishes() {
    return (
        <section id='Wishes' className='wishes'>
            <p className={'wishes__description'}>Пожелания</p>
            <p className={'wishes__text'}>Самым главным подарком для нас будет Ваше хорошее настроение на нашей свадьбе</p>

            <p className={'wishes__text'}>~~~</p>

            <p className={'wishes__text'}>P.S. Пожалуйста подарите Ваше присутствие на нашем празднике до 01 октября 2023 года любым удобным для Вас способом</p>
            {/*<p className='welcome-block__description'>Дорогие гости!</p>*/}
            {/*<p className='welcome-block__text'>Приглашаем разделить с нами радость особенного для нас события и стать*/}
            {/*    свидетелями начала нашей семейной*/}
            {/*    жизни!</p>*/}
            {/*<p className='welcome-block__text'>Ждем Вас!</p>*/}

            {/*<p className='welcome-block__description'>4 августа 2023</p>*/}
            {/*<p className='welcome-block__text'>На церемонии бракосочетания<br/> адрес: г. Раменское, ул*/}
            {/*    Красноармейская 2</p>*/}
            {/*<p className='welcome-block__text'>А также на банкете в ресторане Conquistador<br/> адрес: г. Раменское, ул*/}
            {/*    Северное шоссе 10</p>*/}

        </section>
    );
}

export default Wishes;
