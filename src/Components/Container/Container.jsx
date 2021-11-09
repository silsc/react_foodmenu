import React, {Component} from 'react';
import './Container.scss';

import CardComponent from  '../Card/Card.jsx'

import beer from '../../Assets/Icons/Beer.png'
import burger from '../../Assets/Icons/Burger.png'
import cereal from '../../Assets/Icons/Cereal.png'
import eggs from '../../Assets/Icons/Eggs.png'

class ContainerComponent extends Component {

    state = {
        categories: [
            {
                name: "Beer",
                img: beer,
                options: ["IPA", "Brown Ale", "Porter", "Stout"]
            },
            {
                name: "Burger",
                img: burger,
                options: ["Cheese", "Tex-Mex", "Aloha", "Portobello"]
            },
            {
                name: "Cereal",
                img: cereal,
                options: ["Oats", "Wheat", "Rice", "Maize"]
            },
            {
                name: "Eggs",
                img: eggs,
                options: ["Boiled", "Scrambled", "Omeñet", "Oven"]
            }
        ]
    }
    render() {
        return (
            <section className="menu-container">
                <div className="bars"></div>
                <section className="top">
                    Categories
                </section>
                <section className="bottom">
            {this.state.categories.map((category) => {
                return <CardComponent category={category}></CardComponent>
            })}
                </section>
            </section>
        )
    }
}

export default ContainerComponent;