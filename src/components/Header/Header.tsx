import React from 'react';
// @ts-ignore
import './Header.scss'

function Header() {
    return (
        <header className={'header'}>
            {/*<p className={'header__text'}>Приглашение</p>*/}
            <nav className={'header__navigation'}>
                <a className={'header__navigation-link'}>Расписание</a>
                <a className={'header__navigation-link'}>Место</a>
                <a className={'header__navigation-link'}>Пожелания</a>
                <a className={'header__navigation-link'}>Контакты</a>
            </nav>
        </header>
    );
}

export default Header;
