import React from 'react';

import './side-bar.css';
import BarItems from './side-bar-items';

const SideBar = () => {
    return (
        <ul className="bar-list list-group">
            <BarItems label='Roberto Diaz'/>
            <BarItems label='Поиск друзей'/>
            <BarItems label='Страницы'/>
            <BarItems label='Группы'/>
            <BarItems label='Watch'/>
            <BarItems label='Мероприятия'/>
            <BarItems label='Воспоминания'/>
            <BarItems label='Сохраненное'/>
        </ul>
    )
}

export default SideBar;