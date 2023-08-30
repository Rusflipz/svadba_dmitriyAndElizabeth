import React from 'react';
// @ts-ignore
import './NameBlock.scss'
// @ts-ignore
import arrowDown from '../../images/down-arrow.png'

function NameBlock() {
    return (
        <section className='name-block'>
            <div className='name-block__image'>
                <div className='name-block__image-overlay'></div>
                <div className='name-block__names-container'>
                    <p className='name-block__main-text'>Дмитрий
                        <br/>
                        и
                        <br/>
                        Елизавета</p>
                    <p className='name-block__text'>Приглашают Вас на торжество,<br/> посвященное бракосочетанию!</p>
                </div>
                <a href={'#welcome-block'}><img className='name-block__arrow-down' src={arrowDown}/></a>

            </div>
        </section>
    );
}

export default NameBlock;
