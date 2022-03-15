import react, { useEffect, useState } from "react";

const Timer = (props) => {
    let  [value, setValue] = useEffect(props.initValue);

    useEffect(() => {
        console.log(`==============`);

        const Timer = setInterval(() => {
            setValue(prevValue => {
                console.log(prevValue, Timer);
                if (prevValue === 1) {
                    clearInterval(Timer);
                }
                return prevValue -1;
            });
        }, 1000);

        return () => {
            console.log(`clear timer after component been unmounted`);
            clearInterval(Timer);
        };
    }, []);

    return (
        <div>
            Timer left: {value} Secounds
        </div>
    )
}

export default Timer;