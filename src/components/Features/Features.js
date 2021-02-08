import React, { Component } from "react";
import Database from "../../database/database";
import Search from "../../assets/images/search.svg";
import Map from "../../assets/images/map.svg";
import Listing from "../../assets/images/listing.svg";
import FeaturePlus from "../../assets/images/plus.svg";
import "./Features.scss";

class Features extends Component {

    state = {
        list: Database.data,
        imgs: {
            "search": Search,
            "map": Map,
            "listing": Listing,
            "featurePlus": FeaturePlus
        }
    }

    render() {
        const { list, imgs } = this.state;
        return (
            <div className="features">
                <h2 className="features__title">We're Different</h2>
                <p className="features__desc">Haüskey Realty Brokers have over of 30 years of real estate experience, so unlock the door to your next home.</p>
                {
                    list.map((item, index) => {
                        return (
                            <article key={index} className="card">
                                <figure className="card__fig">
                                    <img className="card__img" src={imgs[item.image]} alt="features" />
                                </figure>
                                <ul className="card__features">
                                    <li className="card__list">{item.title}</li>
                                    {item.list.map((item, index) => {
                                        return (
                                            <li key={index} className="card__list card__list--desc">{item}</li>
                                        )
                                    })
                                    }
                                </ul>
                            </article>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

export default Features;