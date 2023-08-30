import React from 'react';
// @ts-ignore
import './Program.scss'
// @ts-ignore
import banket from '../../images/table1.jpg'
// @ts-ignore
import cake from '../../images/cake.jpg'
// @ts-ignore
import zags from '../../images/zags.jpg'
// @ts-ignore
import rings from '../../images/rings1.jpg'
// @ts-ignore
import end from '../../images/end3.jpg'

function Program() {
    return (
        <section className='program-block'>
            <p className='program-block__text'>Программа дня</p>
            <div className='program-block__container'>
                <div className='program-block__left-column'>

                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                            <img className='program-block__item-image' alt='Ошибка изображения'
                                 src={zags}>
                            </img>
                        </div>
                        <p className='program-block__item-time'>12:20</p>
                        <p className='program-block__item-text'>Сбор гостей</p>
                    </div>

                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                        </div>
                        <p className='program-block__item-text'></p>
                        <p className='program-block__item-time'></p>
                    </div>


                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                            <img className='program-block__item-image' alt='Ошибка изображения'
                                 src={banket}>
                            </img>
                        </div>
                        <p className='program-block__item-time'>16:00</p>
                        <p className='program-block__item-text'>Банкет</p>
                    </div>

                    {/*<div className='program-block__item'>*/}
                    {/*    <div className='program-block__item-image-container'>*/}
                    {/*    </div>*/}
                    {/*    <p className='program-block__item-text'></p>*/}
                    {/*    <p className='program-block__item-time'></p>*/}
                    {/*</div>*/}

                    {/*<div className='program-block__item'>*/}
                    {/*    <div className='program-block__item-image-container'>*/}
                    {/*        <img className='program-block__item-image' alt='Ошибка изображения'*/}
                    {/*             src={end}>*/}
                    {/*        </img>*/}
                    {/*    </div>*/}
                    {/*    <p className='program-block__item-time'>22:00</p>*/}
                    {/*    <p className='program-block__item-text'>Завершение банкета</p>*/}
                    {/*</div>*/}

                </div>

                <div className='program-block__centre-column'>
                    <div className='program-block__centre-column_point'></div>
                    <div className='program-block__centre-column_line'></div>

                    <div className='program-block__centre-column_point'></div>
                    <div className='program-block__centre-column_line'></div>

                    <div className='program-block__centre-column_point'></div>
                    <div className='program-block__centre-column_line'></div>

                    <div className='program-block__centre-column_point'></div>
                    {/*<div className='program-block__centre-column_line'></div>*/}
                    {/*<div className='program-block__centre-column_point'></div>*/}

                </div>

                <div className='program-block__right-column'>

                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                        </div>
                        <p className='program-block__item-text'></p>
                        <p className='program-block__item-time'></p>
                    </div>

                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                            <img className='program-block__item-image' alt='Ошибка изображения'
                                 src={rings}>
                            </img>
                        </div>
                        <p className='program-block__item-time'>12:40</p>
                        <p className='program-block__item-text'>Церемония бракосочетания</p>
                    </div>

                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                        </div>
                        <p className='program-block__item-text'></p>
                        <p className='program-block__item-time'></p>
                    </div>

                    <div className='program-block__item'>
                        <div className='program-block__item-image-container'>
                            <img className='program-block__item-image' alt='Ошибка изображения'
                                 src={cake}>
                            </img>
                        </div>
                        <p className='program-block__item-time'>21:00</p>
                        <p className='program-block__item-text'>Торт</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Program;
