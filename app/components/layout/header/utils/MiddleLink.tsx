import React from "react";
import { DefaultButton } from "../../../core/button";
import { useRouter } from "next/router";

export default function Link(props: any) {
    // State to define wheter the current route is the active or not
    const [active, setActive] = React.useState(false);
    const Router = useRouter();

    // Check if the current route is the active one on page load
    React.useEffect(() => {
        if (props.href === window.location.pathname) {
            return setActive(true);
        }
        setActive(false);
    }, []);

    // ChangeRoute function
    const changeRoute = (e: any) => {
        e.preventDefault();
        Router.push(props.href);
    };

    return (
        <>
            {/* Show different button style based on active state */}
            {active ? (
                <DefaultButton
                    variant="text"
                    color="primary"
                    bgColor="Black"
                    // {...props}
                >
                    {props.children || props.text}
                </DefaultButton>
            ) : (
                <DefaultButton
                    variant="text"
                    color="primary"
                    bgColor="Gray"
                    onClick={(e: any) => {
                        changeRoute(e);
                    }}
                    // {...props}
                >
                    {props.children}
                </DefaultButton>
            )}
        </>
    );
}
