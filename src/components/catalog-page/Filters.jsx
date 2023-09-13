import { Accordion, AccordionItem, Button, Radio, RadioGroup } from "@nextui-org/react"
import { useState } from "react";
import { connect } from "react-redux";
import { filterListAction, resetFilterAction } from "../../core/store";
import { motion } from "framer-motion";

const FiltersView = ({ getFilter, getResetFilter }) => {
    const [season, setSeason] = useState("");
    const [gender, setGender] = useState("");

    const btnHandler = () => {
        const filterParam = {
            season,
            gender
        }
        getFilter(filterParam);
    }

    const resetHandler = () => {
        setSeason('');
        setGender('');
        getResetFilter();
    }

    return (
        <>
            <Accordion>
                <AccordionItem key="1" aria-label="Фильтровать" title="Фильтровать" classNames={{ content: "flex flex-col gap-3" }}>
                    <div className="flex gap-3 p-[10px]">
                        <RadioGroup
                            label="Сезон:"
                            value={season}
                            onChange={e => setSeason(e.target.value)}
                        >
                            <Radio value="winter">Зима</Radio>
                            <Radio value="summer">Лето</Radio>
                            <Radio value="demi-season">Демисезон</Radio>
                        </RadioGroup>

                        <RadioGroup
                            label="Для кого:"
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                        >
                            <Radio value="male">для него</Radio>
                            <Radio value="female">для неё</Radio>
                            <Radio value="children">подросток</Radio>
                        </RadioGroup>
                    </div>
                    {
                        (season || gender) && <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="max-w-[250px] flex flex-col gap-2">
                            <Button onClick={btnHandler}>Отфильтровать</Button>
                            <Button onClick={resetHandler}>Сбросить</Button>
                        </motion.div>
                    }
                </AccordionItem>
            </Accordion>

        </>
    );

}

const mapDispatch = (dispatch) => ({
    getFilter: (payload) => dispatch(filterListAction(payload)),
    getResetFilter: () => dispatch(resetFilterAction())
})

export const Filters = connect(null, mapDispatch)(FiltersView);