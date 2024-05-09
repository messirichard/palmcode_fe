import {useState} from "react";
import {Slider} from "@nextui-org/react";
import Image from 'next/image'
import iconsSliders from '../../assets/images/mingcute_surfboard-line.png'

export default function SliderForm() {
    const [value, setValue] = useState(3)

    const NumberList = ({ start = 0, end = 10 }) => {
        const numbers = Array.from({ length: end - start + 1 }, (_, index) => start + index);
        return (
            <ul>
                {numbers.map((num) => (
                    <li 
                    className={value===num ? "actives" : ""}
                    key={num}>{
                        num === 10 ? num+"+" : num
                    }</li>
                ))}
            </ul>
        );
    };

    return (
        <>
        <div className="inner-box-slide-ranges">
            <label htmlFor="" className="names">Your Sufing Experience </label>
            <div className="list-item-circleTop">
                <NumberList />
                </div>
        <Slider
            showTooltip={false}
            step={1}
            maxValue={10}
            minValue={0}
            onChangeEnd={setValue}
            defaultValue={3}
            color="foreground"
            className="max-w-full"
            classNames={{
                base: "max-w-md gap-3",
                filler: "bg-gradient-to-r from-white to-cyan-400",
              }}
        renderThumb={({index, ...props}) => (
                        <div
                            {...props}
                            className=""
                            // className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                        >
                        <span
                                className="transition-transform rounded-none w-[42px] h-[48px] block group-data-[dragging=true]:scale-100">
                                <Image
                            src={iconsSliders}
                            alt=""
                            width={42}
                            height={48}
                            className='pos_icons_middle'
                        />
                            </span>
                        </div>
                    )}
        />
        </div>
        </>
    );
}