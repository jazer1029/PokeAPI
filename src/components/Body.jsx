import { useQuery } from "react-query";
import { getCurrentPokemon } from "../fetchMethods/getMethods";
import { BodySection } from "../styles/Body.styles";
const Body = ({ currentPokemon }) => {
    const { data } = useQuery(["pokemon", currentPokemon.url], () => getCurrentPokemon(currentPokemon.url).then((res) => res.json()), {
        refetchOnWindowFocus: false,
    });

    const spritesImg = [];

    for (const sprite in data?.sprites) {
        if (data?.sprites[sprite]) {
            spritesImg.push(data?.sprites[sprite]);
        }
    }
    return (
        <BodySection key={1}>
            <div className="pokeInfo">
                <div key={2} className="abilities">
                    <h2>Abilites</h2>
                    <ul>
                        {data ? (
                            data.abilities?.map((ability, i) => {
                                return <li key={i}>{ability.ability.name.toUpperCase()}</li>;
                            })
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
                <div className="forms">
                    <h2>Forms</h2>
                    <ul>
                        {data ? (
                            data.forms?.map((form, i) => {
                                return <li key={i}>{form.name.toUpperCase()}</li>;
                            })
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
                <div className="heldItems">
                    <h2>Held Items</h2>
                    <ul>
                        {data ? (
                            data.held_items?.map((item, i) => {
                                return <li key={i}>{item.item.name.toUpperCase()}</li>;
                            })
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
                <div className="moves">
                    <h2>Moves</h2>
                    <ul className="movesList">
                        {data ? (
                            data.moves?.map((move, i) => {
                                return <li key={i}>{move.move.name.toUpperCase()}</li>;
                            })
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
                <div className="types">
                    <h2>Types</h2>
                    <ul>
                        {data ? (
                            data.types?.map((type, i) => {
                                return <li key={i}>{type.type.name.toUpperCase()}</li>;
                            })
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
            </div>

            <div className="spriteContainer">
                <div className="spriteImgContainer">
                    <img className="spriteImg" src={data?.sprites?.front_default} />
                </div>
                <div>
                    <p className="spriteName">{data?.name.toUpperCase()}</p>
                </div>
            </div>
            <div className="spritesCarousel">
                {spritesImg.map((sprite, i) => {
                    return typeof sprite == "string" ? <img key={i} className="spriteImgCar" src={sprite} /> : "";
                })}
            </div>
        </BodySection>
    );
};

export default Body;